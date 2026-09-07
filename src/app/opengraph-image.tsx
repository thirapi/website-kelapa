import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG default — Tropical Heritage: base gelap + aksen ember.
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
          padding: 96,
          background: "#14100C",
          color: "#F5F0E8",
        }}
      >
        <div style={{ fontSize: 28, color: "#F28C28", letterSpacing: 8 }}>
          COCONUT PRODUCTS
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16 }}>
          Hancoco.
        </div>
        <div style={{ fontSize: 32, color: "#A39B8D", marginTop: 16 }}>
          From the Coconut Heartlands to the World.
        </div>
      </div>
    ),
    { ...size },
  );
}
