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

const ServicesSection = ({ hasHeadline = true }: { hasHeadline?: boolean }) => {
  const services = [
    {
      title: "Standard Home Cleaning",
      description:
        "Weekly or one-time home cleaning. Enjoy spotless floors, shining surfaces, and fresh, hygienic air every visit.",
      image: "/service-image-1.jpg",
    },
    {
      title: "Office and Workspace Cleaning",
      description:
        "Routine cleaning that keeps your office desks and shared areas fresh and dust-free—improving comfort and reducing downtime.",
      image: "/service-image-2.jpg",
    },
    {
      title: "Deep Move In / Move Out Cleaning",
      description:
        "Intensive cleaning for before moving in or after moving out. Includes deep scrubbing, stain removal, and sanitization.",
      image: "/service-image-3.jpg",
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-sky-50/40 to-blue-50/30
        py-12 sm:py-16 md:py-24 lg:py-28 xl:py-32
        px-4 sm:px-6 md:px-10 lg:px-16
      "
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        {hasHeadline && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
              Cleaning <span className="text-primary">Services</span> You Can Trust
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the service that fits your needs. We’ll tailor your quote for a perfect match.
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="
                group overflow-hidden rounded-2xl border border-gray-100 bg-white
                shadow-sm hover:shadow-2xl transition-all duration-300 ease-in-out
                flex flex-col justify-between
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full h-52 sm:h-56 md:h-60 object-cover object-center
                    transform group-hover:scale-105 transition-transform duration-500
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 gap-2 p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl sm:text-2xl font-semibold text-primary mb-1">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </div>

              {/* Card Footer */}
              <CardFooter className="p-6 pt-0">
                <Link
                  to={`/get-quote?type=${
                    index === 0 ? "home" : index === 1 ? "office" : "deep"
                  }`}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="
                      w-full border-2 border-primary text-primary font-medium
                      hover:bg-primary hover:text-white transition-all duration-300
                      rounded-full shadow-sm hover:shadow-md
                    "
                  >
                    Get a Quote
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ServicesSection;
