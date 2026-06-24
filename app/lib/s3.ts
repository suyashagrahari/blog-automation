import crypto from "node:crypto";
import sharp from "sharp";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// ─────────────────────────────────────────────────────────────────────────────
// Server-side S3 image upload for the Blog Automation studio. Mirrors the gifts
// `server` mediaProcessor + s3Media services so blog covers land in the SAME
// bucket as the rest of the app ("client type"): compress with sharp → upload to
// S3 → return the public URL. Reads the same env vars as the server:
//   S3_REGION, S3_BUCKET_NAME, S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY,
//   S3_PUBLIC_BASE_URL (optional CDN), S3_UPLOAD_PREFIX (default "gifts-media").
// ─────────────────────────────────────────────────────────────────────────────

const ENV = {
  region: process.env.S3_REGION || "",
  bucket: process.env.S3_BUCKET_NAME || "",
  accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
  publicBaseUrl: process.env.S3_PUBLIC_BASE_URL || "",
  uploadPrefix: process.env.S3_UPLOAD_PREFIX || "gifts-media",
};

const hasCredentials = !!(ENV.region && ENV.bucket && ENV.accessKeyId && ENV.secretAccessKey);

const s3 = hasCredentials
  ? new S3Client({
      region: ENV.region,
      credentials: { accessKeyId: ENV.accessKeyId, secretAccessKey: ENV.secretAccessKey },
    })
  : null;

export const isS3Configured = (): boolean => !!s3;

const MAX_IMAGE_BYTES = 15 * 1024 * 1024; // reject anything larger BEFORE compressing

const ALLOWED_IMAGE_MIMES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/pjpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/avif",
  "image/heic",
  "image/heif",
  "image/bmp",
  "image/tiff",
]);

export const isAllowedImageMime = (mime: string): boolean =>
  ALLOWED_IMAGE_MIMES.has((mime || "").toLowerCase());

const sanitizeSegment = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9/_-]/g, "-")
    .replace(/\/+/g, "/")
    .replace(/^-+|-+$/g, "")
    .replace(/^\/+|\/+$/g, "");

const getPublicUrl = (key: string): string => {
  if (ENV.publicBaseUrl) return `${ENV.publicBaseUrl.replace(/\/+$/, "")}/${key}`;
  return `https://${ENV.bucket}.s3.${ENV.region}.amazonaws.com/${key}`;
};

/**
 * Compress a blog cover image. "compress ~90%" → re-encode to WebP at quality 80
 * and cap the longest side at 1600px, which typically shrinks a multi-MB
 * ChatGPT/DALL·E PNG to a few hundred KB while staying crisp on retina blog hero
 * slots. Returns the optimized WebP buffer.
 */
export const compressImage = async (buffer: Buffer): Promise<Buffer> => {
  // Defensive copy: if `buffer` is backed by a SharedArrayBuffer (as happens on
  // Vercel's runtime for File.arrayBuffer()), sharp throws "input must be
  // ArrayBuffer". Re-wrapping in a fresh Uint8Array guarantees normal memory.
  const safe = Buffer.from(new Uint8Array(buffer));
  console.log("[s3.compressImage] • in", {
    inLen: buffer?.length,
    safeLen: safe.length,
    inBackingShared:
      typeof SharedArrayBuffer !== "undefined" &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((buffer as any)?.buffer instanceof SharedArrayBuffer),
    safeBacking: safe.buffer?.constructor?.name,
  });
  const out = await sharp(safe)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 4 })
    .toBuffer();
  console.log("[s3.compressImage] ✓ out", { outLen: out.length });
  return out;
};

export interface UploadedImage {
  url: string;
  key: string;
  size: number;
  contentType: string;
}

/**
 * Compress an image buffer and upload it to S3 under
 * `<prefix>/blog/<YYYY>/<MM>/<timestamp>-<rand>.webp`. Returns the public URL.
 */
export const uploadBlogImage = async (
  buffer: Buffer,
  mime: string,
  folder = "blog"
): Promise<UploadedImage> => {
  if (!s3) {
    throw new Error(
      "S3 is not configured. Set S3_REGION, S3_BUCKET_NAME, S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY in the blog-automation .env."
    );
  }
  if (!isAllowedImageMime(mime)) {
    throw new Error(`Unsupported image type "${mime}". Use jpg, png, webp, gif, avif, heic, bmp or tiff.`);
  }
  if (buffer.length > MAX_IMAGE_BYTES) {
    throw new Error("Image is too large. Max supported size is 15MB.");
  }

  console.log("[s3.uploadBlogImage] • compressing", { mime, bytes: buffer.length, bucket: ENV.bucket, region: ENV.region });
  const optimized = await compressImage(buffer);

  const monthPath = new Date().toISOString().slice(0, 7).replace("-", "/");
  const randomPart = crypto.randomBytes(8).toString("hex");
  const safeFolder = sanitizeSegment(folder || "blog");
  const safePrefix = sanitizeSegment(ENV.uploadPrefix);
  const key = `${safePrefix}/${safeFolder}/${monthPath}/${Date.now()}-${randomPart}.webp`;

  console.log("[s3.uploadBlogImage] • → S3 PutObject", { key, size: optimized.length });
  try {
    await s3.send(
      new PutObjectCommand({
        Bucket: ENV.bucket,
        Key: key,
        Body: optimized,
        ContentType: "image/webp",
        CacheControl: "public, max-age=31536000, immutable",
      })
    );
  } catch (err) {
    // Surface S3 SDK errors (AccessDenied, NoSuchBucket, signature, region…)
    // with their AWS error name so the real cause is obvious in the logs.
    const e = err as { name?: string; Code?: string; $metadata?: { httpStatusCode?: number } };
    console.error("[s3.uploadBlogImage] ✖ S3 PutObject failed", {
      name: e?.name,
      code: e?.Code,
      httpStatusCode: e?.$metadata?.httpStatusCode,
      message: err instanceof Error ? err.message : String(err),
    });
    throw new Error(`S3 upload failed (${e?.name || e?.Code || "unknown"}): ${err instanceof Error ? err.message : String(err)}`);
  }

  const url = getPublicUrl(key);
  console.log("[s3.uploadBlogImage] ✓ done", { url });
  return { url, key, size: optimized.length, contentType: "image/webp" };
};
