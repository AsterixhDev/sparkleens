import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlobBackground from "../ui/blob-background";

const CTASection = () => {
  return (
    <section 
      className="relative overflow-hidden isolate py-16 flex flex-col items-center justify-center gap-3 bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/cta-bg.WEBP")'
      }}
    >
      <svg
        className="absolute -z-10 left-0 bottom-0 w-full h-10 pointer-events-none"
        viewBox="0 0 900 600"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 400L21.5 380C43 360 86 320 128.8 290C171.7 260 214.3 240 257.2 180C300 120 343 80 385.8 60C428.7 40 471.3 40 514.2 60C557 80 600 120 642.8 180C685.7 240 728.3 260 771.2 290C814 320 857 360 878.5 380L900 400L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="hsl(var(--primary) / var(--tw-bg-opacity, 1))"
          fillOpacity="1"
        />
      </svg>
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
