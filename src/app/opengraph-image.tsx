import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG default — Nagari Katapiang: base putih hangat + coklat.
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
          background: "#FAF6EF",
          color: "#2B1D12",
        }}
      >
        <div style={{ fontSize: 28, color: "#7A4E1F", letterSpacing: 8 }}>
          DESA ENERGI BERDIKARI
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16 }}>
          COCO KATAPIANG.
        </div>
        <div style={{ fontSize: 32, color: "#6E5F50", marginTop: 16 }}>
          The Value of Coconut, Reimagined.
        </div>
      </div>
    ),
    { ...size },
  );
}
