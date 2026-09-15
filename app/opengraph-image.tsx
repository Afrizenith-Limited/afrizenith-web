import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

// Inlined at build time — ImageResponse can't fetch a relative asset.
const mark = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/images/logo-mark.png"),
).toString("base64")}`;

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b1f44",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src={mark} width={68} height={65} alt="" />
          <span style={{ fontSize: 44, fontWeight: 700 }}>
            Afri<span style={{ color: "#ff8a00" }}>Zenith</span>
          </span>
        </div>

        <div style={{ marginTop: 48, fontSize: 60, lineHeight: 1.15 }}>
          {SITE.description}
        </div>

        <div style={{ marginTop: 40, fontSize: 28, color: "#a8b3c7" }}>
          {SITE.tagline}
        </div>
      </div>
    ),
    size,
  );
}
