import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import BlobBackground from "@/components/ui/blob-background";
import ServicesSection from "@/components/home/ServicesSection";

const Services = () => {
  useEffect(() => {
    // ✅ SEO setup
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
      {/* 🌟 Hero Section */}
      <section className="relative bg-section-light py-24 overflow-hidden">
        <BlobBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <b className="text-accent">Cleaning</b> Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            We offer tailored cleaning solutions for every space — whether
            you're preparing for new tenants, resetting a short-term rental,
            or managing a renovation cleanup.
          </p>
        </div>
      </section>

      {/* 💼 Core Services */}
      <ServicesSection hasHeadline={true} />

      {/* 💎 Add-On Services */}
      <section className="py-16 md:py-24 bg-muted/40 text-center">
        <div className="container mx-auto px-4">
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
      </section>
    </Layout>
  );
};

export default Services;
