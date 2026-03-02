export function BaseGradient() {
  return (
    <div
      className="w-full h-full"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -30,
        background: "radial-gradient(circle at top left, #0b1220, #000000)",
      }}
      aria-hidden="true"
    />
  );
}

export default BaseGradient;
