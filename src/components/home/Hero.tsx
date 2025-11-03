import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GroupImageFill from "../ui/GroupImageFill";

const Hero = () => {
  return (
    <section className="bg-hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
          {/* Left: Content */}
          <div className="w-full md:w-2/3 lg:w-7/12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional <span className="text-primary">Cleaning</span>
              <br />
              Done <span className="text-secondary">Right</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl md:max-w-lg">
              You get fast, reliable cleaning that follows strict procedures and
              gives repeatable results every visit.
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
          <div className="w-full max-w-md">
            <GroupImageFill
              src1="/hero-2.jpg"
              src2="/hero-3.jpg"
              src3="/hero-4.jpg"
              // keep natural aspect and make it responsive to the container
              wrapperProps={{
                className: "w-full rounded-xl overflow-hidden",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
