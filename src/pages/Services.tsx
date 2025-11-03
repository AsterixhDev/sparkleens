import React, { useEffect } from "react";
import ServicesSection from "@/components/home/ServicesSection";
import Layout from "@/components/Layout";
import BlobBackground from "@/components/ui/blob-background";

const Services = () => {
  useEffect(() => {
    // SEO meta updates
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta(
      "description",
      "Professional cleaning for Airbnb hosts, homeowners, and contractors. From turnovers to estate cleanouts, BSS handles it all."
    );
    setMeta(
      "keywords",
      "post-construction cleaners Atlanta, Airbnb cleaning Georgia, move-out cleaning Henry County, estate cleaning Atlanta"
    );
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-section-light py-16 overflow-hidden">
        <BlobBackground />{" "}
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <b className="text-accent">Cleaning</b> Services
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              We offer tailored cleaning solutions for every space - whether
              you're preparing for new tenants, resetting a short-term rental,
              or managing a renovation cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Core Services
            </h2>
            <div className="grid gap-8">
              {[
                {
                  title: "Airbnb Turnover Cleaning",
                  description: "5-star resets for short-term rentals.",
                },
                {
                  title: "Move-In / Move-Out Cleaning",
                  description: "Full deep cleans to restore every corner.",
                },
                {
                  title: "Post-Construction & Renovation Cleaning",
                  description:
                    "Remove dust, debris, and residue for a final polish.",
                },
                {
                  title: "Estate Cleanouts",
                  description:
                    "Compassionate, complete property cleanouts handled with care.",
                },
                {
                  title: "Small Office Cleaning",
                  description: "Reliable, recurring office maintenance.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Add-On Services */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Add-On Services</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Ozone Treatments",
                  "Appliance Cleaning",
                  "Interior Windows",
                  "Floor Polishing",
                  "Vent Cleaning",
                ].map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <ServicesSection hasHeadline={false} />
    </Layout>
  );
};

export default Services;
