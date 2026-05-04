import { useEffect, useLayoutEffect, useState } from "react";
import { scheduleIdleTask } from "../../utils/scheduleIdleTask.js";
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
  const [isMobile, setIsMobile] = useState(false);
  const [particlesOn, setParticlesOn] = useState(false);

  useEffect(() => {
    return scheduleIdleTask(() => setParticlesOn(true), { timeout: 2600 });
  }, []);

  useLayoutEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  const shouldRenderWebGL = !isMobile && false;

  return (
    <>
      <BaseGradient />
      <AuroraBackground opacity={isMobile ? 0.4 : 1} />
      {/* Per-frame canvas work is too heavy on phones; skip entirely on narrow viewports */}
      {particlesOn && !isMobile ? <ParticleOverlay densityMultiplier={0.42} /> : null}
      {shouldRenderWebGL ? <WebGLEffects /> : null}
    </>
  );
}

export default BackgroundSystem;
