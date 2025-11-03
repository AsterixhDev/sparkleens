import processImage1 from "@/assets/process-1.jpg";
import processImage2 from "@/assets/process-2.jpg";
import processImage3 from "@/assets/process-3.jpg";
import processImage4 from "@/assets/process-4.jpg";

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
      description: "We schedule your preferred time and complete the cleaning professionally",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get amazing cleaning in <span className="text-primary">3 simple steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            You get transparent steps and fast results you understand and control.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Images */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={processImage1} 
              alt="Step 1: Cleaning professional consulting with client"
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
            <img 
              src={processImage2} 
              alt="Step 2: Reviewing cleaning plan"
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
            <img 
              src={processImage3} 
              alt="Step 3: Professional cleaning supplies ready"
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
            <img 
              src={processImage4} 
              alt="Cleaning team at work in home"
              className="w-full h-48 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* Right: Steps */}
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">
                    Step {step.number}: {step.title}
                  </h3>
                  <p className="text-muted-foreground">
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
