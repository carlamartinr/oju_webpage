import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "Ojú · Gildas del sur en Sanlúcar de Barrameda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [logo, photo] = await Promise.all([
    readFile(join(process.cwd(), "public/oju.png")),
    readFile(join(process.cwd(), "public/images/conocenos-gildas.jpg")),
  ]);

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#ede7d9", color: "#152d0b" }}>
        <div style={{ display: "flex", width: "50%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* ImageResponse embeds these local assets directly into the generated PNG. */}
          <img src={`data:image/png;base64,${logo.toString("base64")}`} width={370} height={285} alt="Ojú" />
          <div style={{ display: "flex", marginTop: 28, fontSize: 36 }}>Gildas del sur</div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 24, color: "#0d3866" }}>Sanlúcar de Barrameda</div>
        </div>
        <img src={`data:image/jpeg;base64,${photo.toString("base64")}`} width={600} height={630} alt="Gildas Ojú" style={{ objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
