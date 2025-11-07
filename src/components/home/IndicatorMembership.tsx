import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

const IndicatorMembership = () => {
  return (
    <section
      className="
        relative isolate overflow-hidden text-center py-16 md:py-20
        bg-gradient-to-r from-primary/30 via-accent/20 to-primary/20
        text-white
      "
    >
      {/* 🌈 Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/50 opacity-40"
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* 🌀 Decorative light orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* 🌊 Top and bottom curved separators */}
      <svg
        className="absolute top-0 left-0 w-full h-12 rotate-180 text-[hsl(var(--background))] -translate-y-px"
        viewBox="0 0 900 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40C150 120 300 0 450 40C600 80 750 0 900 40V120H0Z"
          fill="hsl(var(--background))"
        />
      </svg>

      {/* ✳️ Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-accent/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-5"
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-medium tracking-tight">
            Trusted by 300+ Happy Clients
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-primary sm:text-4xl md:text-5xl font-extrabold mb-4"
        >
          Save More with a{" "}
          <span className="text-accent">BSS Membership</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-foreground max-w-2xl mx-auto mb-8"
        >
          Join our cleaning plan and enjoy exclusive discounts, flexible
          scheduling, and priority service — designed for busy homeowners and
          Airbnb hosts.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="
              rounded-full bg-white text-primary font-semibold
              hover:bg-gray-100 hover:scale-105 transition-all duration-300
              px-8 sm:px-10 shadow-lg shadow-white/20
            "
          >
            <a href="/memberships">
              <Sparkles className="w-4 h-4 mr-2" />
              Explore Memberships
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-12"
        viewBox="0 0 900 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40C150 120 300 0 450 40C600 80 750 0 900 40V120H0Z"
          fill="hsl(var(--background))"
        />
      </svg>
    </section>
  );
};

export default IndicatorMembership;
