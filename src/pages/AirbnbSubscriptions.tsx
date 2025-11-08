import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import BlobBackground from "@/components/ui/blob-background";
import { motion, Variants } from "framer-motion";
import setMeta from "@/lib/setMeta";

const AirbnbSubscriptions = () => {
  useEffect(() => {
    setMeta(
      "description",
      "Airbnb turnover subscriptions by Broome Service Solutions - fast, consistent, and 5-star ready. Ideal for busy hosts in Metro Atlanta."
    );
    setMeta(
      "keywords",
      "Airbnb cleaning Atlanta, Airbnb turnover service, short-term rental cleaners GA, vacation rental cleaning service"
    );
  }, []);

  const packages = [
    {
      title: "Host Starter",
      description: "Perfect for new hosts or single properties",
      features: [
        "Up to 4 turnovers/month",
        "Linen reset",
        "Basic restock check",
        "15% off first month",
      ],
      highlight: false,
    },
    {
      title: "Superhost Pro",
      description: "Ideal for active hosts with consistent bookings",
      features: [
        "8 turnovers/month",
        "Linen + restock service",
        "Deep clean every 4th turnover",
        "Priority scheduling",
      ],
      highlight: true,
    },
    {
      title: "Elite Host",
      description: "Maximum support for high-volume properties",
      features: [
        "Unlimited turnover support",
        "Deep clean biweekly",
        "Restock + inspection reports",
        "24/7 emergency callout",
      ],
      highlight: false,
    },
  ];

  // ✅ Safe typed Framer Motion variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <motion.section
          className="relative bg-section-light py-24 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <BlobBackground />
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <b className="text-accent">Airbnb Turnover</b> Subscription
                Packages
              </h1>
              <p className="text-lg max-w-2xl mx-auto">
                Keep your listings spotless and 5-star ready, every guest, every
                time. Our Airbnb cleaning subscriptions are designed for hosts
                who value reliability, speed, and consistency.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Packages Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {packages.map((pkg, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <Card
                    className={`flex flex-col transition-transform duration-300 hover:-translate-y-2 ${
                      pkg.highlight
                        ? "border-primary shadow-lg md:scale-105"
                        : "hover:shadow-md"
                    }`}
                  >
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-secondary">
                        {pkg.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{pkg.description}</p>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-4">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full rounded-full"
                        variant={pkg.highlight ? "default" : "outline"}
                      >
                        Subscribe Today
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Banner */}
            <motion.div
              className="relative overflow-hidden isolate mt-16 text-center bg-primary/10 p-8 rounded-lg max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <h3 className="text-2xl font-bold mb-4 relative">
                Subscribe Today & Get 20% Off Your First Month
              </h3>
              <Button size="lg" className="rounded-full relative">
                Get Started Now
              </Button>

              <svg
                className="absolute -z-10 left-0 bottom-0 w-full h-28 pointer-events-none"
                viewBox="0 0 900 600"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0 234L21.5 230.2C43 226.3 86 218.7 128.8 229.3C171.7 240 214.3 269 257.2 298.3C300 327.7 343 357.3 385.8 349.7C428.7 342 471.3 297 514.2 266.3C557 235.7 600 219.3 642.8 210.8C685.7 202.3 728.3 201.7 771.2 212C814 222.3 857 243.7 878.5 254.3L900 265L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
                  fill="#1A4B73"
                  fillOpacity="0.5"
                />
              </svg>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AirbnbSubscriptions;
