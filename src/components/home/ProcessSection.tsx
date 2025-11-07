import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import GroupImageFill from "../ui/GroupImageFill";

const ProcessSection = ({ hasHeadline = true }: { hasHeadline?: boolean }) => {
  const steps = [
    {
      number: 1,
      title: "Request a Quote",
      description: "Tell us your cleaning needs online.",
    },
    {
      number: 2,
      title: "Receive a Custom Estimate",
      description: "Get your tailored quote within 24 hours.",
    },
    {
      number: 3,
      title: "Book Your Clean",
      description: "Confirm your date and service.",
    },
    {
      number: 4,
      title: "Relax & Review",
      description: "Enjoy a spotless result every time.",
    },
  ];

  useEffect(() => {
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Discover how Broome Service Solutions delivers smooth, reliable cleaning from quote to completion."
    );
    setMeta(
      "keywords",
      "cleaning process, how cleaning services work, booking cleaning online, Atlanta cleaners"
    );
  }, []);

  // ✅ Framer Motion variants with correct easing
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const stepContainer: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const stepItem: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.section
      id="how-we-work"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30
        py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14
        px-4 sm:px-6 md:px-10 lg:px-12
      "
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        {hasHeadline && (
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
              Simple. Streamlined.{" "}
              <span className="text-primary">Stress-Free.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              You get transparent steps and fast results you understand and control.
            </p>
          </motion.div>
        )}

        {/* Process Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Image Section */}
          <motion.div
            className="w-full md:w-1/2 max-w-lg mx-auto relative"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl overflow-hidden h-fit shadow-md shadow-primary/20">
              <GroupImageFill
                src1="/hero-1.jpg"
                src2="/process-2.jpg"
                src3="/process-3.jpg"
                flipHorizontal
                wrapperProps={{
                  className: "w-full h-auto rounded-3xl overflow-hidden",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            className="relative w-full md:w-1/2 max-w-xl mx-auto md:mx-0 mt-10 md:mt-0 flex flex-col gap-8"
            variants={stepContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-[48px] w-0.5 h-[calc(100%-72px)] bg-gradient-to-b from-primary/40 to-accent/40 z-0" />

            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepItem}
                className="flex gap-6 items-start relative z-10 hover:translate-x-1 transition-transform"
              >
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-[spin_10s_linear_infinite]" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-transparent flex items-center justify-center shadow-md">
                      <span className="font-bold text-xl sm:text-2xl bg-gradient-to-br from-accent to-primary bg-clip-text text-transparent drop-shadow-[0_0_0.4em_rgba(59,175,218,0.2)]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
