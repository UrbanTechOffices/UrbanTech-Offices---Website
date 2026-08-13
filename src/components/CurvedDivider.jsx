// src/components/CurvedDivider.jsx
import React from "react";

/**
 * Single reusable section divider: a thick curved band with a
 * curved TOP edge and a curved BOTTOM edge (two non-crossing waves,
 * offset by a fixed thickness), no solid rectangle, no straight
 * horizontal edges. Positioned absolutely and centered on the
 * boundary between two sections (via translateY(50%)) so it floats
 * over the seam, overlapping both.
 *
 * Usage: place as the LAST child of a `relative` section, at the
 * bottom of that section, so it straddles the boundary with the
 * next section:
 *
 *   <section className="relative ...">
 *     ...content...
 *     <CurvedDivider color="#0b1220" />
 *   </section>
 */
export default function CurvedDivider({ color = "#0b1220", flip = false, className = "" }) {
  return (
    <div
      className={`absolute left-0 bottom-0 w-full overflow-hidden leading-none pointer-events-none z-20 ${className}`}
      style={{ transform: "translateY(50%)" }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-[200px] block"
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          fill={color}
          d="
            M0,80
            C360,160 1080,0 1440,80
            L1440,240
            C1080,320 360,160 0,240
            Z
          "
        />
      </svg>
    </div>
  );
}
