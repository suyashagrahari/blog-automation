import type { GenerateRequestBody } from "@/app/lib/types";

// Proxy LLM calls server-side: avoids browser CORS (Anthropic blocks direct
// browser calls) and keeps provider-specific request shapes in one place.

export const runtime = "nodejs";
export const maxDuration = 300;

// A 2000+ word article PLUS 60–100 self-contained FAQs PLUS a full JSON-LD array
// is a large JSON payload — too little headroom truncates it (cut-off FAQs →
// invalid JSON → the whole article fails to parse). We therefore give each model
// as much output room as it actually supports.
//
// A flat 32000 was WRONG two ways: it OVER-shoots the smaller models' hard output
// caps (gpt-4o=16,384 · gpt-4-turbo/3.5=4,096 · gemini-1.5/2.0=8,192 ·
// claude-3.5=8,192 → the API 400s), and it UNDER-uses the big ones (gpt-5/o-series,
// gemini-2.5 65k, claude-4.x 64k). So pick the largest value each model can accept.
function maxTokensFor(provider: string, model: string): number {
  const m = (model || "").toLowerCase();
  if (provider === "openai") {
    if (/gpt-5|^o\d/.test(m)) return 96000;          // gpt-5 / o-series: very large output cap
    if (/gpt-4\.1/.test(m)) return 32000;            // 4.1 family: 32,768 output cap
    if (/gpt-4o/.test(m)) return 16000;              // 4o family: 16,384 cap
    if (/gpt-4-turbo|gpt-3\.5/.test(m)) return 4000; // legacy turbo/3.5: 4,096 cap
    return 16000;                                     // unknown OpenAI model → safe middle
  }
  if (provider === "gemini") {
    if (/gemini-2\.5/.test(m)) return 65000;         // 2.5 pro/flash: up to 65,536
    return 8000;                                      // 2.0 / 1.5: 8,192 cap
  }
  if (provider === "anthropic") {
    if (/opus-4|sonnet-4|haiku-4|3-7-sonnet/.test(m)) return 64000; // 4.x + 3.7: 64k output
    return 8000;                                      // 3.5 family: 8,192 cap
  }
  return 32000;
}

export async function POST(req: Request) {
  let body: GenerateRequestBody;
  try {
    body = (await req.json()) as GenerateRequestBody;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const { provider, model, apiKey, systemPrompt, userPrompt } = body;
  if (!provider || !model || !apiKey || !systemPrompt || !userPrompt) {
    return json({ error: "Missing provider, model, apiKey or prompts" }, 400);
  }

  try {
    const maxTokens = maxTokensFor(provider, model);
    let text = "";
    if (provider === "openai") text = await callOpenAI(model, apiKey, systemPrompt, userPrompt, maxTokens);
    else if (provider === "gemini") text = await callGemini(model, apiKey, systemPrompt, userPrompt, maxTokens);
    else if (provider === "anthropic") text = await callAnthropic(model, apiKey, systemPrompt, userPrompt, maxTokens);
    else return json({ error: `Unknown provider: ${provider}` }, 400);

    if (!text.trim()) return json({ error: "Model returned an empty response" }, 502);
    return json({ text });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : "Generation failed" }, 502);
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ── OpenAI (Chat Completions) ───────────────────────────────────────────────
async function callOpenAI(model: string, apiKey: string, system: string, user: string, maxTokens: number): Promise<string> {
  const isReasoning = /^(o\d|gpt-5)/i.test(model);
  const payload: Record<string, unknown> = {
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    response_format: { type: "json_object" },
  };
  // Reasoning models reject custom temperature and use max_completion_tokens;
  // classic models like a bit of warmth and use max_tokens.
  if (isReasoning) {
    payload.max_completion_tokens = maxTokens;
  } else {
    payload.temperature = 0.7;
    payload.max_tokens = maxTokens;
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(openaiErr(data, res.status));
  return data?.choices?.[0]?.message?.content ?? "";
}

function openaiErr(data: unknown, status: number): string {
  const d = data as { error?: { message?: string } };
  return `OpenAI ${status}: ${d?.error?.message || "request failed"}`;
}

// ── Google Gemini (generateContent) ─────────────────────────────────────────
async function callGemini(model: string, apiKey: string, system: string, user: string, maxTokens: number): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: user }] }],
      generationConfig: { responseMimeType: "application/json", temperature: 0.7, maxOutputTokens: maxTokens },
    }),
  });
  const data = await res.json();
  if (!res.ok) {
    const d = data as { error?: { message?: string } };
    throw new Error(`Gemini ${res.status}: ${d?.error?.message || "request failed"}`);
  }
  const parts = data?.candidates?.[0]?.content?.parts;
  if (Array.isArray(parts)) return parts.map((p: { text?: string }) => p.text || "").join("");
  return "";
}

// ── Anthropic Claude (Messages) ─────────────────────────────────────────────
async function callAnthropic(model: string, apiKey: string, system: string, user: string, maxTokens: number): Promise<string> {
  // Opus 4.7/4.8, Fable 5, and Mythos 5 REMOVED the sampling params — sending
  // temperature/top_p/top_k returns a 400. Only send temperature to models that
  // still accept it (Sonnet 4.x, Haiku 4.x, Opus 4.6 and older).
  const rejectsSampling = /opus-4-(7|8)|fable|mythos/i.test(model);
  const payload: Record<string, unknown> = {
    model,
    max_tokens: maxTokens,
    system: `${system}\n\nIMPORTANT: respond with ONLY the raw JSON object, no prose, no markdown code fences.`,
    messages: [{ role: "user", content: user }],
  };
  if (!rejectsSampling) payload.temperature = 0.7;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) {
    const d = data as { error?: { message?: string } };
    throw new Error(`Anthropic ${res.status}: ${d?.error?.message || "request failed"}`);
  }
  const content = data?.content;
  if (Array.isArray(content)) return content.map((b: { text?: string }) => b.text || "").join("");
  return "";
}
