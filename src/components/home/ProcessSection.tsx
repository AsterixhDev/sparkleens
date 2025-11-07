import React, { useEffect } from "react";
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

  return (
    <section
      id="how-we-work"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30
        py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14
        px-4 sm:px-6 md:px-10 lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        {hasHeadline && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900">
              Simple. Streamlined. <span className="text-primary">Stress-Free.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              You get transparent steps and fast results you understand and control.
            </p>
          </div>
        )}

        {/* Process Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Image Section */}
          <div className="w-full md:w-1/2 max-w-lg mx-auto relative">
            <div className="relative rounded-3xl overflow-hidden h-fit drop-shadow-md drop-shadow-primary">
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
          </div>

          {/* Right: Steps */}
          <div className="relative w-full md:w-1/2 max-w-xl mx-auto md:mx-0 mt-10 md:mt-0 flex flex-col gap-8">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-[48px] w-0.5 h-[calc(100%-72px)] bg-gradient-to-b from-primary/40 to-accent/40 z-0" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 items-start relative z-10"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
