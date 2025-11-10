import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServicesSectionProps {
  hasHeadline?: boolean;
}

const ServicesSection = ({ hasHeadline = true }: ServicesSectionProps) => {
  const services = [
    {
      title: "Airbnb Turnover Cleaning",
      description:
        "Fast, reliable resets that keep short-term rentals spotless and guest-ready every time.",
      image: "/images/services/service-image-airbnb.webp",
      quoteType: "airbnb",
    },
    {
      title: "Move-In / Move-Out Cleaning",
      description:
        "Full deep cleaning to refresh spaces completely before moving in or out.",
      image: "/images/services/service-image-inout.webp",
      quoteType: "move-in-out",
    },
    {
      title: "Post-Construction & Renovation Cleaning",
      description:
        "Detailed removal of dust and debris to leave new builds polished and clean.",
      image: "/images/services/service-image-construction.webp",
      quoteType: "construction",
    },
    {
      title: "Estate Cleanouts",
      description:
        "Respectful and complete home cleanouts handled with care, privacy, and attention to detail.",
      image: "/images/services/service-image-estate.jpg",
      quoteType: "estate",
    },
    {
      title: "Small Office Cleaning",
      description:
        "Consistent, professional maintenance that keeps offices organized, hygienic, and presentable daily.",
      image: "/images/services/service-image-office.avif",
      quoteType: "office",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-muted/20 to-background
        px-4 sm:px-6 md:px-10 lg:px-12 py-20
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Header (Optional) */}
        {hasHeadline && (
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              From move-ins to estate cleanouts, we tailor every cleaning
              solution to your space and schedule.
            </p>
          </motion.div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                className={cn(
                  "group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white",
                  "shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between"
                )}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 sm:h-60 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 gap-3 p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl sm:text-2xl font-semibold text-primary">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </div>

                {/* Footer */}
                <CardFooter className="p-6 pt-0">
                  <Link
                    to={`/get-quote?type=${service.quoteType}`}
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary text-primary font-medium
                                 hover:bg-primary hover:text-white transition-all duration-300
                                 rounded-full shadow-sm hover:shadow-md"
                    >
                      Get a Quote
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
