import { createHash } from "node:crypto";
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

// Hash the actual exported scripts: no fixed nonce or unsafe-inline for JavaScript.
// All documents share the allowlist so client navigation and the fallback 404 work.
const hashes = new Set();
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await scan(path);
    else if (entry.name.endsWith(".html")) {
      const html = await readFile(path, "utf8");
      for (const [, attributes, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (!/\bsrc\s*=/i.test(attributes) && body) {
          hashes.add(`'sha256-${createHash("sha256").update(body).digest("base64")}'`);
        }
      }
    }
  }
}

await scan("out");
if (!hashes.size) throw new Error("No inline scripts found in the static export.");
const policy = [
  "default-src 'self'",
  `script-src 'self' ${[...hashes].sort().join(" ")}`,
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'", // Next image styles and GSAP transforms.
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'none'",
].join("; ");
const header = `  Content-Security-Policy: ${policy}`;
if (header.length > 2000) {
  throw new Error("CSP exceeds the Cloudflare Pages 2000-character line limit; split policies by route before deploying.");
}
const template = await readFile("public/_headers", "utf8");
await writeFile("out/_headers", template.replace("/*\n", `/*\n${header}\n`));
console.log(`Generated CSP with ${hashes.size} script hashes (${header.length}/2000 characters).`);
