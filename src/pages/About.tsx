import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import GroupImageFill from "@/components/ui/GroupImageFill";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import img1 from "@/assets/hero-1.jpg";
import img2 from "@/assets/hero-2.jpg";
import img3 from "@/assets/hero-3.jpg";
import ProcessSection from "@/components/home/ProcessSection";
import BlobBackground from "@/components/ui/blob-background";

const About = () => {
  useEffect(() => {
    document.title = "Who We Are — Broome Service Solutions";

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
      "Broome Service Solutions is a trusted Georgia-based cleaning company known for reliable, detailed, and quality-driven service."
    );

    setMeta(
      "keywords",
      "Atlanta cleaning company, reliable cleaners in McDonough, professional cleaning business, estate cleaning Georgia"
    );
  }, []);

  return (
    <Layout>
      <section className="relative bg-section-light py-16 overflow-hidden">
        <BlobBackground />{" "}
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Who <b className="text-accent">We</b> Are
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Broome Service Solutions began with a simple idea: clean spaces
            create better impressions. We’re a locally owned cleaning company
            built on reliability, trust, and results.
          </p>
        </div>
      </section>

      <main className="py-16 max-w-5xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            {/* Content side */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                About Broome Service Solutions
              </h2>
              <p className="text-muted-foreground mb-6">
                We specialize in Airbnb turnovers, move-in/move-out cleanings,
                post-construction detail work, and estate cleanouts. We’re known
                for showing up on time, communicating clearly, and leaving no
                surface untouched.
              </p>

              <h3 className="font-semibold mb-2">Core Values</h3>
              <ul className="flex flex-wrap gap-3 mb-6">
                {["Reliability", "Quality", "Professionalism", "Integrity"].map(
                  (v) => (
                    <li
                      key={v}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/5 text-primary font-medium"
                    >
                      {v}
                    </li>
                  )
                )}
              </ul>

              <p className="text-muted-foreground mb-6">
                Our team is focused on measurable results and exceptional
                customer service. Whether it’s preparing a home for guests or
                performing a deep estate clean, we deliver consistent,
                high-quality outcomes.
              </p>

              <div className="flex gap-4">
                <Link to="/get-quote">
                  <Button className="bg-accent hover:bg-accent/90 text-white">
                    Get a Quote
                  </Button>
                </Link>
                <Link to="/contact" className="inline-flex items-center">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
            {/* Image side - use GroupImageFill for the 3-circle blended mask look */}
            <div className="w-full max-w-lg mx-auto">
              <GroupImageFill
                src1={img1}
                src2={img2}
                src3={img3}
                aspect={4 / 3}
                flipHorizontal
              />
            </div>
          </div>
        </div>
      </main>

      <section className="w-full bg-primary/10">
        <ProcessSection />
      </section>
    </Layout>
  );
};

export default About;
