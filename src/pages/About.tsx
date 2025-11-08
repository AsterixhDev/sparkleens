import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import GroupImageFill from "@/components/ui/GroupImageFill";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProcessSection from "@/components/home/ProcessSection";
import BlobBackground from "@/components/ui/blob-background";
import setMeta from "@/lib/setMeta";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Broome Service Solutions";


    setMeta(
      "description",
      "Learn about Broome Service Solutions — Georgia’s trusted cleaning experts delivering reliable, detailed, and high-quality results for homes, rentals, and post-construction projects."
    );
    setMeta(
      "keywords",
      "Atlanta cleaning company, Georgia cleaners, professional cleaning, Airbnb turnover, move-out cleaning, post-construction cleaning"
    );
  }, []);

  return (
    <Layout>
      {/* Page wrapper for entrance animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Hero */}
        <section className="relative bg-section-light py-24 overflow-hidden">
          <BlobBackground />
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Meet <b className="text-accent">Broome Service Solutions</b>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
            >
              We’re more than a cleaning company — we’re your partner in creating
              spotless, stress-free spaces that leave lasting impressions.
            </motion.p>
          </div>
        </section>

        {/* Main About Section */}
        <main className="px-4 sm:px-6 md:px-10 lg:px-12 py-16 max-w-6xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Clean Spaces. Clear Mind.
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Broome Service Solutions, we believe a clean space inspires
                  confidence. Our mission is simple — to deliver consistent,
                  professional cleaning that you never have to worry about twice.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  From Airbnb turnovers to deep move-out cleanings and
                  post-construction projects, our team handles every detail with
                  precision and care — because your reputation (and ours) depends
                  on it.
                </p>

                <h3 className="font-semibold mb-2">Our Core Values</h3>
                <ul className="flex flex-wrap gap-3 mb-6">
                  {["Reliability", "Quality", "Professionalism", "Integrity"].map(
                    (v, i) => (
                      <motion.li
                        key={v}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/5 text-primary font-medium"
                      >
                        {v}
                      </motion.li>
                    )
                  )}
                </ul>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-muted-foreground mb-8"
                >
                  Each clean reflects our promise: to show up on time, treat your
                  property like our own, and leave every surface shining.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/get-quote">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                      Get Your Free Quote
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" size="lg">
                      Talk to Our Team
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-lg mx-auto"
              >
                <GroupImageFill
                  src1={"/images/hero/hero-bg.avif"}
                  src2={"/images/services/service-image-estate.jpg"}
                  src3={"/images/services/service-image-construction.webp"}
                  aspect={4 / 3}
                />
              </motion.div>
            </div>
          </div>
        </main>

        {/* Process / Trust Section */}
        <section className="w-full py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Our Proven Cleaning Process</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Every project follows a structured process that guarantees quality
              results — from the first walkthrough to the final polish.
            </p>
          </motion.div>
          <ProcessSection hasHeadline={false} />
        </section>
      </motion.div>
    </Layout>
  );
};

export default About;
