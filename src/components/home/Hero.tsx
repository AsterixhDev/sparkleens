import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GroupImageFill from "../ui/GroupImageFill";

const Hero = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-sky-50 via-white to-blue-50
        py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32
        px-4 sm:px-6 md:px-10 lg:px-16
      "
    >
      {/* Soft decorative gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 sm:gap-12 md:gap-16">
          {/* Left Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              Spotless <span className="text-primary">Cleaning</span>,
              <br />
              <span className="text-accent">Exceptional Care</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              We make your home or office shine with eco-friendly cleaning,
              reliable service, and a personal touch that makes all the
              difference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-3">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 sm:px-10 shadow-lg shadow-primary/20 transition-all hover:scale-105"
                >
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 rounded-full px-8 sm:px-10 !text-primary hover:bg-primary/10"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Area */}
          <motion.div
            className="w-full md:w-1/2 max-w-md mx-auto md:mx-0 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="absolute -inset-4 bg-white/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden drop-shadow-md drop-shadow-primary">
              <GroupImageFill
                src1="/hero-1.jpg"
                src2="/hero-2.jpg"
                src3="/hero-3.jpg"
                wrapperProps={{
                  className: "w-full h-auto rounded-3xl overflow-hidden",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
