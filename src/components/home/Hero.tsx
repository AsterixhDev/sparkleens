import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";
import heroImage4 from "@/assets/hero-4.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-section-light via-background to-section-light-green py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-primary">Cleaning</span>
              <br />
              Done <span className="text-secondary">Right</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              You get fast, reliable cleaning that follows strict procedures and gives repeatable results every visit.
            </p>
            <Link to="/get-quote">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-8 text-base"
              >
                Get a free quote now
              </Button>
            </Link>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={heroImage1} 
                alt="Professional cleaning team at work"
                className="w-full h-48 object-cover rounded-3xl shadow-lg"
              />
              <img 
                src={heroImage2} 
                alt="Cleaning supplies and equipment"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={heroImage3} 
                alt="Modern cleaning tools and products"
                className="w-full h-64 object-cover rounded-3xl shadow-lg"
              />
              <img 
                src={heroImage4} 
                alt="Clean and organized living room"
                className="w-full h-48 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
