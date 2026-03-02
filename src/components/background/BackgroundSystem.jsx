import { BaseGradient } from "./BaseGradient";
import { AuroraBackground } from "./AuroraBackground";
import { ParticleOverlay } from "./ParticleOverlay";
// import { WebGLEffects } from "./WebGLEffects";

/**
 * Renders background layers with fixed positioning and z-index hierarchy:
 * BaseGradient (-30) → AuroraBackground (-20) → ParticleOverlay (-10) → Content wrapper (z-10)
 *
 * DISABLED (commented out, not deleted):
 * - WebGLEffects
 */
export function BackgroundSystem() {
  return (
    <>
      <BaseGradient />
      <AuroraBackground />
      <ParticleOverlay />
      {/* <WebGLEffects /> */}
    </>
  );
}

export default BackgroundSystem;
