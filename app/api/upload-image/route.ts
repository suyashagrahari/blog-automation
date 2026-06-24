import { isS3Configured, uploadBlogImage } from "@/app/lib/s3";

// Receive an image (multipart/form-data, field "file"), compress it (~90% smaller
// via WebP q80 + 1600px cap) and upload it to the shared S3 bucket. Returns the
// public S3 URL, which the studio then saves onto the article's coverImageUrl.

export const runtime = "nodejs";
export const maxDuration = 60;

const TAG = "[upload-image]";

// Describe a Buffer/ArrayBuffer so logs reveal the exact backing-store type
// (the SharedArrayBuffer-vs-ArrayBuffer distinction that sharp cares about).
function describeBuffer(buf: unknown): Record<string, unknown> {
  try {
    const b = buf as { length?: number; byteLength?: number; constructor?: { name?: string }; buffer?: unknown };
    const backing = b?.buffer as { constructor?: { name?: string } } | undefined;
    return {
      ctor: b?.constructor?.name ?? typeof buf,
      length: b?.length ?? b?.byteLength ?? null,
      backingCtor: backing?.constructor?.name ?? null,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      isShared: typeof SharedArrayBuffer !== "undefined" && (b?.buffer as any) instanceof SharedArrayBuffer,
      isArrayBuffer: (b?.buffer as unknown) instanceof ArrayBuffer,
    };
  } catch (e) {
    return { describeError: e instanceof Error ? e.message : String(e) };
  }
}

export async function POST(req: Request) {
  console.log(`${TAG} ▶ POST received`, {
    s3Configured: isS3Configured(),
    runtime: process.env.NEXT_RUNTIME ?? "node",
    node: process.version,
    hasRegion: !!process.env.S3_REGION,
    hasBucket: !!process.env.S3_BUCKET_NAME,
    hasAccessKey: !!process.env.S3_ACCESS_KEY_ID,
    hasSecret: !!process.env.S3_SECRET_ACCESS_KEY,
  });

  if (!isS3Configured()) {
    console.error(`${TAG} ✖ S3 not configured (missing env vars)`);
    return json(
      {
        error:
          "S3 is not configured. Add S3_REGION, S3_BUCKET_NAME, S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY to blog-automation/.env (copy them from the server's .env).",
        stage: "config",
      },
      500
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch (err) {
    console.error(`${TAG} ✖ formData() failed`, err);
    return json({ error: "Expected multipart/form-data with a 'file' field.", stage: "formData" }, 400);
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    console.error(`${TAG} ✖ no File in field 'file' (got ${typeof file})`);
    return json({ error: "No file uploaded. Send multipart/form-data with field 'file'.", stage: "file" }, 400);
  }
  console.log(`${TAG} • file received`, { name: file.name, type: file.type, size: file.size });

  const folder = typeof form.get("folder") === "string" ? (form.get("folder") as string) : "blog";

  let bufferDiag: Record<string, unknown> = {};
  try {
    // Wrapping the ArrayBuffer in a Uint8Array first forces Buffer.from to COPY
    // the bytes into a freshly-allocated (non-shared) Buffer. On Vercel's Node
    // runtime file.arrayBuffer() is backed by a SharedArrayBuffer, which sharp
    // rejects with: input argument must be ArrayBuffer. The copy fixes that.
    const rawAb = await file.arrayBuffer();
    console.log(`${TAG} • arrayBuffer()`, describeBuffer(rawAb));

    const buffer = Buffer.from(new Uint8Array(rawAb));
    bufferDiag = describeBuffer(buffer);
    console.log(`${TAG} • buffer ready (post-copy)`, bufferDiag);

    const mime = file.type || "image/png";
    console.log(`${TAG} • → uploadBlogImage`, { mime, folder, bytes: buffer.length });

    const uploaded = await uploadBlogImage(buffer, mime, folder);
    console.log(`${TAG} ✓ uploaded`, uploaded);
    return json({ ok: true, ...uploaded });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : undefined;
    console.error(`${TAG} ✖ upload failed`, { message, stack, bufferDiag });
    // Return the diagnostics in the response body so the failure is visible in
    // the browser Network tab even without opening Vercel logs.
    return json({ error: message, stage: "upload", bufferDiag }, 400);
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}
