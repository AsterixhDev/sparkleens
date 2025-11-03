import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BgMask from "../ui/bg-mask";

const CTASection = () => {
  return (
  <section className="relative isolate py-16 bg-primary flex flex-col items-center justify-center gap-3">
      <BgMask
        maskSource={{
          // mask shape - place this file under public/shapes or adjust path as needed
          shape: "/bottomcut.png",
          // use the imported image so bundler includes it
          image: '/cta-bg.WEBP',
        }}
        // place the mask absolutely to cover the section
        containerProps={{
          className:
            "!absolute z-0 inset-x-0 bottom-0 h-full md:h-80 pointer-events-none",
        }}
        imgProps={{
          style:{
            filter: "brightness(0.5)",
          }
        }}
        // align the mask as a bottom cut
        maskPosition="center bottom"
        // make the mask wrapper fill the container
        maskProps={{ className: "w-full h-full" }}
      />
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to get your <span className="text-accent">Quote</span> today?
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Your space deserves clean air and clean floors.
        </p>
        <Link to="/get-quote">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-8"
          >
            Get a free quote now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
