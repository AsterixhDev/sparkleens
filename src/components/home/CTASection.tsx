import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ctaImage from "@/assets/cta-background.jpg";

const CTASection = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ctaImage})`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to get your <span className="text-primary">Quote</span> today?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Your space deserves clean air and clean floors.
        </p>
        <Link to="/get-quote">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8"
          >
            Get a free quote now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
