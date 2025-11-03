import { cn } from "@/lib/utils";
import React from "react";

type MaskSource = {
  // URL or path to the mask/shape image (used as the CSS mask-image)
  shape: string;
  // URL or path to the background image that will be masked
  image: string;
};

type Props = {
  // Provide both mask shape and image together: { shape, image }
  maskSource: MaskSource;
  // Optional explicit mask position (CSS mask-position value). Examples:
  // "center bottom", "bottom center", "left center", "right center", "center"
  // If not provided, the component will attempt to infer position from the shape filename.
  maskPosition?: string;
  // Optional slot props to customize/wrap the outer container
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  // Optional slot props for the mask wrapper (where mask CSS vars are applied)
  maskProps?: React.HTMLAttributes<HTMLDivElement>;
  // Optional slot props for the inner <img /> element
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
};

export default function BgMask({
  maskSource,
  containerProps,
  maskProps,
  imgProps,
  maskPosition,
}: Props) {
  // Resolve mask position. Priority:
  // 1) explicit prop `maskPosition`
  // 2) infer from filename: looks for 'bottom'|'top'|'right'|'left' in the shape path
  // 3) fallback to 'left center'
  const resolvedMaskPosition =
    maskPosition ?? (() => {
      const s = (maskSource?.shape ?? "").toLowerCase();
      if (s.includes("bottom")) return "center bottom";
      if (s.includes("top")) return "center top";
      if (s.includes("right")) return "right center";
      if (s.includes("left")) return "left center";
      return "left center";
    })();

  return (
    <div
      {...containerProps}
      className={cn(
        "w-full h-[100dvh] left-0 -z-1 sticky top-0",
        containerProps?.className
      )}
      style={
        ({
          // Default: no mask on mobile (overridden at md: via Tailwind inline styles below)
          WebkitMaskImage: "none",
          maskImage: "none",
          ...(containerProps?.style as React.CSSProperties),
        } as React.CSSProperties)
      }
    >
      {/* Use Tailwind to apply mask from md: and up. CSS vars let callers pass arbitrary mask URLs. */}
      <div
        {...maskProps}
        style={
          ({
            "--image-url": `url('${maskSource.shape}')`,
            "--mask-position": resolvedMaskPosition,
            ...(maskProps?.style as React.CSSProperties),
          } as React.CSSProperties)
        }
        className={cn(
          "size-full",
          "[mask-image:var(--image-url)]",
          "[mask-repeat:no-repeat]",
          "[mask-size:cover]",
          "[mask-position:var(--mask-position)]",
          "[-webkit-mask-image:var(--image-url)]",
          "[-webkit-mask-repeat:no-repeat]",
          "[-webkit-mask-size:cover]",
          "[-webkit-mask-position:var(--mask-position)]",
          maskProps?.className
        )}
      >
        <img
          {...imgProps}
          src={maskSource.image}
          alt={imgProps?.alt ?? "image"}
          loading={imgProps?.loading ?? "lazy"}
          width={imgProps?.width ?? 1024}
          height={imgProps?.height ?? 720}
          className={cn(
            "size-full object-cover object-center brightness-30 md:brightness-100",
            imgProps?.className
          )}
        />
      </div>
    </div>
  );
}