import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          padding: 3,
        }}
      >
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1 }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#4285f4" }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1 }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#ea4335" }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1 }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#fbbc05" }} />
        </div>
        <div style={{ width: "50%", height: "50%", display: "flex", padding: 1 }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#34a853" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
