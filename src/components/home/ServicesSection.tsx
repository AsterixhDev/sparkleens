import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import serviceImage from "@/assets/service-card.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Standard Home Cleaning",
      description: "Weekly or one off cleaning for homes. You get clean floors, clean surfaces, and fresh hygienic air.",
      image: serviceImage,
    },
    {
      title: "Office and Workspace Cleaning",
      description: "Cleaning routine that keeps your office floor, desks, and shared areas hygienically maintained. You reduce dust and reduce sickness downtime.",
      image: serviceImage,
    },
    {
      title: "Deep Move in and Move Out Cleaning",
      description: "Heavy cleaning for spaces before moving in or after moving out. You get detailed scrubbing, stain removal, and intensive sanitation.",
      image: serviceImage,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cleaning <span className="text-primary">services</span> you select with clarity.
          </h2>
          <p className="text-muted-foreground text-lg">
            You choose a service, we quote based on exact need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to="/get-quote" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full"
                  >
                    Get Quote
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
