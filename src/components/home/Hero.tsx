import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";
import useScrollPercent from "@/hooks/useScrollPercent";
import { useMemo } from "react";

const Hero = () => {
  const { scrollLength } = useScrollPercent();
  const scrollRatio = Math.min(scrollLength.relativeToScreenHeight / 100, 1);

  // 🌀 Curve motion
  const curveHeight = useMemo(() => (scrollRatio - 0.5) * 120, [scrollRatio]);

  const dynamicPath = useMemo(() => {
    const controlY = 60 + curveHeight;
    return `M0 60 Q450 ${controlY} 900 60 L900 100 L0 100Z`;
  }, [curveHeight]);

  return (
    <section
      className="
        relative isolate flex items-center justify-center
        min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh]
        text-white text-center overflow-hidden
        bg-cover bg-bottom bg-no-repeat py-24 sm:py-24 md:py-28
      "
      style={{
        backgroundImage:
          'linear-gradient(180deg, rgba(0,0,0,0.75) 10%, rgba(0,0,0,0.8) 90%), url("/images/hero/hero-bg.jpg")',
      }}
    >
      {/* 🌊 Dynamic wave at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 transition-all duration-500 ease-out pointer-events-none"
        viewBox="0 0 900 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={dynamicPath}
          fill="hsl(var(--background) / var(--tw-bg-opacity, 1))"
        />
      </svg>

      {/* ✳️ Main Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-5 sm:space-y-6"
        >
          {/* 🏅 Badge Indicator */}
          <motion.div
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md text-accent text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1.5 rounded-full font-medium tracking-tight shadow-md"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ShieldCheck className="w-4 h-4" />
            Trusted by 300+ Happy Clients
          </motion.div>

          {/* 🧹 Headline */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold leading-tight tracking-tight
              px-2 sm:px-0
            "
          >
            Cleaning & Turnover{" "}
            <span className="text-accent">Services That Deliver</span>
          </h1>

          {/* 💬 Supporting Text */}
          <p
            className="
              text-base sm:text-lg md:text-xl text-gray-200
              max-w-md sm:max-w-xl md:max-w-2xl mx-auto
            "
          >
            Expert cleaning for homes, offices, and rental spaces. Consistent
            quality. Transparent pricing. Guaranteed satisfaction.
          </p>

          {/* 🔘 CTAs */}
          <div
            className="
              flex flex-col sm:flex-row justify-center
              gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto
            "
          >
            <Link to="/get-quote" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="
                  bg-accent hover:bg-accent/90 text-white rounded-full
                  px-8 sm:px-10 w-full sm:w-auto
                  shadow-lg shadow-accent/30 hover:scale-105 transition-transform
                "
              >
                Get a Free Quote
              </Button>
            </Link>

            <Link to="/services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="
                  border-2 rounded-full px-8 sm:px-10
                  bg-transparent hover:bg-white/10 w-full sm:w-auto
                "
              >
                View Services
              </Button>
            </Link>
          </div>

          {/* ⚡️ Membership / Urgency Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="
    flex items-center justify-center
    whitespace-nowrap
    gap-2 text-xs sm:text-sm md:text-base text-gray-300 mt-2
  "
          >
            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
            <span>
              Join our{" "}
              <span className="text-white font-semibold">BSS Membership</span>{" "}
              save up to <span className="text-accent font-semibold">20%</span>{" "}
              on recurring cleanings
            </span>
          </motion.div>
          {/* LICENSED AND INSURED Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="
    flex items-center justify-center
    gap-2 text-xs sm:text-sm md:text-base text-gray-200 mt-3
  "
          >
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="font-semibold text-white">
              Licensed and Fully Insured
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
