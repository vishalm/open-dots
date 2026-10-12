import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const dots = [
    { color: "#4285f4", x: 0, y: 0 },
    { color: "#ea4335", x: 72, y: 0 },
    { color: "#fbbc05", x: 0, y: 72 },
    { color: "#34a853", x: 72, y: 72 },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "100px",
          background: "#07070a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "relative", width: 128, height: 128, display: "flex" }}>
          {dots.map((dot) => (
            <div
              key={dot.color}
              style={{
                position: "absolute",
                left: dot.x,
                top: dot.y,
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: dot.color,
                display: "flex",
              }}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 72,
            fontWeight: 600,
            color: "#f5f5f7",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          Open Dots
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#9a9aa3",
            maxWidth: 820,
            display: "flex",
          }}
        >
          Stop renting your AI agent.
        </div>
      </div>
    ),
    { ...size }
  );
}
