import GroupImageFill from "../ui/GroupImageFill";

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Share your cleaning needs",
      description: "Tell us your space type, size and frequency needs.",
    },
    {
      number: 2,
      title: "We review and match a plan",
      description: "We use your details to match the right cleaning package.",
    },
    {
      number: 3,
      title: "Cleaning team gets to work",
      description:
        "We schedule your preferred time and complete the cleaning professionally",
    },
  ];

  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get amazing cleaning in{" "}
            <span className="text-primary">3 simple steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            You get transparent steps and fast results you understand and
            control.
          </p>
        </div>

        {/* Process Grid */}
        {/* Layout: row on wide screens, stack column on small screens (<=498px) */}
        <div className="flex items-center justify-center flex-col sm:flex-row sm:items-center">
          {/* Left: Images */}
          <div className="w-[80%] sm:w-full">
            <GroupImageFill
              src1="/process-1.jpg"
              src2="/process-2.jpg"
              src3="/process-3.jpg"
              flipHorizontal
            />
          </div>

          {/* Right: Steps */}
          <div className="relative space-y-8 w-fit sm:max-w-[60%] md:max-w-[50%] sm:ml-12 mt-12 sm:mt-0 shrink-0">
            {/* Vertical line connector */}
            <div className="absolute left-[23px] top-[48px] w-0.5 h-[calc(100%-72px)] bg-gradient-to-b from-secondary/50 to-primary/50 z-0" />
            
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    {/* Outer ring with gradient border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary via-primary to-secondary animate-[spin_8s_linear_infinite]" />
                    {/* Inner circle with background */}
                    <div className="relative w-12 h-12 rounded-full bg-background border-2 border-transparent flex items-center justify-center">
                      {/* Number with glowing effect */}
                      <span className="font-bold text-xl bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent drop-shadow-[0_0_0.3em_rgba(59,175,218,0.3)]">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
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
