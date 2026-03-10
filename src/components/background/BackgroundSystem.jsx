import { BaseGradient } from "./BaseGradient";
import { AuroraBackground } from "./AuroraBackground";
import { ParticleOverlay } from "./ParticleOverlay";
import { WebGLEffects } from "./WebGLEffects";

/**
 * Renders background layers with fixed positioning and z-index hierarchy:
 * BaseGradient (-30) → AuroraBackground (-20) → ParticleOverlay (-10) → Content wrapper (z-10)
 *
 * DISABLED (commented out, not deleted):
 * - WebGLEffects
 */
export function BackgroundSystem() {
  const isMobile = window.innerWidth < 768;
  const shouldRenderWebGL = !isMobile && false;

  return (
    <>
      <BaseGradient />
      <AuroraBackground opacity={isMobile ? 0.4 : 1} />
      <ParticleOverlay densityMultiplier={isMobile ? 0.3 : 1} />
      {shouldRenderWebGL ? <WebGLEffects /> : null}
    </>
  );
}

export default BackgroundSystem;
