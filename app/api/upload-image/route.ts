import { isS3Configured, uploadBlogImage } from "@/app/lib/s3";

// Receive an image (multipart/form-data, field "file"), compress it (~90% smaller
// via WebP q80 + 1600px cap) and upload it to the shared S3 bucket. Returns the
// public S3 URL, which the studio then saves onto the article's coverImageUrl.

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: Request) {
  if (!isS3Configured()) {
    return json(
      {
        error:
          "S3 is not configured. Add S3_REGION, S3_BUCKET_NAME, S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY to blog-automation/.env (copy them from the server's .env).",
      },
      500
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return json({ error: "Expected multipart/form-data with a 'file' field." }, 400);
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return json({ error: "No file uploaded. Send multipart/form-data with field 'file'." }, 400);
  }

  const folder = typeof form.get("folder") === "string" ? (form.get("folder") as string) : "blog";

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const mime = file.type || "image/png";
    const uploaded = await uploadBlogImage(buffer, mime, folder);
    return json({ ok: true, ...uploaded });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : "Upload failed" }, 400);
  }
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } });
}
