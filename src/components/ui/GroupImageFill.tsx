import React, { useId } from "react";
import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement> & {
  src1: string; // fill for main shape (path)
  src2: string; // fill for left rect
  src3: string; // fill for right rect
  // Flip horizontally (mirror on X axis)
  flipHorizontal?: boolean;
  // Flip vertically (mirror on Y axis)
  flipVertical?: boolean;
  // Rotation: named directions or any degree number
  // 'top' = 0deg, 'right' = 90deg, 'bottom' = 180deg, 'left' = 270deg
  rotate?: "top" | "right" | "bottom" | "left" | number;
  // Optional aspect ratio (width / height). If provided, the component will
  // keep a responsive container with that aspect so the SVG scales without distortion.
  // Default is the SVG's natural ratio (559 / 452).
  aspect?: number;
  // Optional wrapper props for the responsive container
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
};

export default function GroupImageFill({
  src1,
  src2,
  src3,
  className,
  flipHorizontal,
  flipVertical,
  rotate,
  aspect,
  wrapperProps,
  ...svgProps
}: Props) {
  const id = useId();

  const p1 = `group-p1-${id}`;
  const p2 = `group-p2-${id}`;
  const p3 = `group-p3-${id}`;

  // SVG center (viewBox center)
  const cx = 559 / 2;
  const cy = 452 / 2;

  const deg = rotate !== undefined ? (typeof rotate === "number" ? rotate : rotate === "right" ? 90 : rotate === "bottom" ? 180 : rotate === "left" ? 270 : 0) : 0;
  const sx = flipHorizontal ? -1 : 1;
  const sy = flipVertical ? -1 : 1;

  // Build SVG transform: flip about center then rotate about center
  const flipTransform = sx === 1 && sy === 1 ? "" : `translate(${cx} ${cy}) scale(${sx} ${sy}) translate(${-cx} ${-cy})`;
  const rotateTransform = rotate !== undefined ? `rotate(${deg} ${cx} ${cy})` : "";
  const transformAttr = [flipTransform, rotateTransform].filter(Boolean).join(" ") || undefined;

  // determine aspect ratio: width/height
  const naturalAspect = 559 / 452;
  const usedAspect = aspect ?? naturalAspect;
  // padding-top percent to maintain aspect: (height/width) * 100
  const paddingTop = `${(1 / usedAspect) * 100}%`;

  return (
    <div
      {...wrapperProps}
      className={cn("w-full", wrapperProps?.className)}
      style={{ position: "relative", width: "100%", paddingTop, ...(wrapperProps?.style as React.CSSProperties) }}
    >
      <svg
        viewBox="0 0 559 452"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
        {...svgProps}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", ...(svgProps.style as React.CSSProperties) }}
      >
        <defs>
          {/* Patterns use objectBoundingBox so fills follow each object's bbox and transform */}
          <pattern id={p1} patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
            <image href={src1} x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />
          </pattern>

          <pattern id={p2} patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
            <image href={src2} x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />
          </pattern>

          <pattern id={p3} patternUnits="objectBoundingBox" patternContentUnits="objectBoundingBox" width="1" height="1">
            <image href={src3} x="0" y="0" width="1" height="1" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>

        <g transform={transformAttr}>
          <path
            d="M559 22.6C559 10.1184 546.486 0 531.05 0H238.973C223.536 0 211.022 10.1184 211.022 22.6V203.4C211.022 215.882 198.509 226 183.073 226H27.95C12.5137 226 0 236.118 0 248.6V429.4C0 441.882 12.5137 452 27.95 452H297.667C313.104 452 325.617 441.882 325.617 429.4V248.6C325.617 236.118 338.131 226 353.568 226H531.05C546.486 226 559 215.882 559 203.4V22.6Z"
            fill={`url(#${p1})`}
          />

          <rect width="188" height="200" rx="20" transform="matrix(-1 0 0 1 188 0)" fill={`url(#${p2})`} />

          <rect width="216" height="200" rx="20" transform="matrix(-1 0 0 1 559 252)" fill={`url(#${p3})`} />
        </g>
      </svg>
    </div>
  );
}
