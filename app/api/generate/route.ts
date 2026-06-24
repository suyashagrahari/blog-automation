import type { GenerateRequestBody } from "@/app/lib/types";

// Proxy LLM calls server-side: avoids browser CORS (Anthropic blocks direct
// browser calls) and keeps provider-specific request shapes in one place.

export const runtime = "nodejs";
export const maxDuration = 300;

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
    let text = "";
    if (provider === "openai") text = await callOpenAI(model, apiKey, systemPrompt, userPrompt);
    else if (provider === "gemini") text = await callGemini(model, apiKey, systemPrompt, userPrompt);
    else if (provider === "anthropic") text = await callAnthropic(model, apiKey, systemPrompt, userPrompt);
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
async function callOpenAI(model: string, apiKey: string, system: string, user: string): Promise<string> {
  const isReasoning = /^(o\d|gpt-5)/i.test(model);
  const payload: Record<string, unknown> = {
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    response_format: { type: "json_object" },
  };
  // Reasoning models reject custom temperature; classic models like a bit of warmth.
  if (!isReasoning) payload.temperature = 0.7;

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
async function callGemini(model: string, apiKey: string, system: string, user: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts: [{ text: user }] }],
      generationConfig: { responseMimeType: "application/json", temperature: 0.7, maxOutputTokens: 16384 },
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
async function callAnthropic(model: string, apiKey: string, system: string, user: string): Promise<string> {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model,
      max_tokens: 16384,
      temperature: 0.7,
      system: `${system}\n\nIMPORTANT: respond with ONLY the raw JSON object, no prose, no markdown code fences.`,
      messages: [{ role: "user", content: user }],
    }),
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
