import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app so Next doesn't pick up a parent lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // sharp's native binary lives in separate, platform-specific packages
  // (@img/sharp-<platform> + @img/sharp-libvips-<platform>) that sharp require()s
  // DYNAMICALLY at runtime. Next's static file tracing can't follow that dynamic
  // require, so on Vercel's Linux Lambda the @img/sharp-linux-x64 binary is left
  // out of the function bundle → sharp throws "Could not load the sharp module"
  // (caught → 400) or hard-crashes (→ 502). Force-include sharp AND @img so the
  // Linux native binaries ship with the /api/upload-image function.
  outputFileTracingIncludes: {
    "/api/upload-image": ["node_modules/sharp/**/*", "node_modules/@img/**/*"],
  },
};

export default nextConfig;
