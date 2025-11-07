import { motion } from "framer-motion";
import { useMemo } from "react";
import useScrollPercent from "@/hooks/useScrollPercent";

const DynamicWave = () => {
  const { scrollLength } = useScrollPercent();
  const scrollRatio = Math.min(scrollLength.relativeToScreenHeight / 100, 1);

  // Smooth rotation (0° → 180°)
  const rotation = useMemo(() => scrollRatio * 180, [scrollRatio]);

  // Optionally add a little vertical shift to keep it in frame as it rotates
  const yOffset = useMemo(() => Math.sin((rotation * Math.PI) / 180) * 50, [rotation]);

  const dynamicPath = `
    M0 400L21.5 380C43 360 86 320 128.8 290C171.7 260 214.3 240 257.2 180C300 120 343 80 385.8 60C428.7 40 471.3 40 514.2 60C557 80 600 120 642.8 180C685.7 240 728.3 260 771.2 290C814 320 857 360 878.5 380L900 400L900 601L0 601Z
  `;

  return (
    <svg
      className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
      viewBox="0 0 900 601"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <motion.path
        d={dynamicPath}
        fill="hsl(var(--background) / var(--tw-bg-opacity, 1))"
        style={{
          transformOrigin: "center center",
        }}
        animate={{
          rotate: rotation,
          y: yOffset,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      />
    </svg>
  );
};

export default DynamicWave;
