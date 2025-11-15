import React, { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import BlobBackground from "@/components/ui/blob-background";
import setMeta from "@/lib/setMeta";

// ✅ Define smooth framer variants with correct types
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Memberships = () => {
  useEffect(() => {
    setMeta(
      "description",
      "Save more with Broome Service Solutions memberships. Choose weekly, bi-weekly, or custom cleaning plans and enjoy exclusive discounts."
    );
    setMeta(
      "keywords",
      "cleaning memberships Atlanta, recurring cleaning plans, professional house cleaning subscriptions"
    );
  }, []);

  const membershipTiers = [
    {
      title: "Silver Membership",
      description:
        "Entry-level plan for light upkeep and maintenance. Works for smaller homes, apartments, or office spaces. Includes two general cleanings each month covering kitchens, bathrooms, floors, and high-touch areas.",
      features: [
        "Two cleanings each month",
        "Covers kitchens, bathrooms, floors, high-touch areas",
        "Starting at 160 dollars per month for up to two bedrooms",
        "Month to month, cancel with seven days notice",
        "Options include 1 to 2 bedroom at 160 dollars for two hours",
        "Option for 3 bedrooms at 200 dollars for two hours thirty minutes",
      ],
      highlight: false,
      reference:
        "https://book.squareup.com/appointments/kc9k92jp0fullx/location/L8ED2XJBBMFV0/services/JVYI7FAIHTLY2HJPLHZDVHRD",
    },
    {
      title: "Gold Membership",
      description:
        "Balanced plan for consistency and deeper care. Includes four cleanings each month with a light deep clean on every fourth visit. Works for homes or offices that see regular use.",
      features: [
        "Four cleanings each month",
        "Light deep clean every fourth visit",
        "Starting at 320 dollars per month for up to two bedrooms",
        "Month to month, cancel with seven days notice",
        "Options include 1 to 2 bedroom at 320 dollars for two hours thirty minutes",
        "Option for 3 bedrooms at 380 dollars for three hours thirty minutes",
      ],
      highlight: true,
      reference:
        "https://book.squareup.com/appointments/kc9k92jp0fullx/location/L8ED2XJBBMFV0/services/JVS3IG3ZY5NNZ5T676NOD67F",
    },
    {
      title: "Platinum Membership",
      description:
        "Premium plan for clients who want convenience and detail. Includes weekly cleanings, priority scheduling, and a supply restock service. Works for families, professionals, or office suites that need constant upkeep.",
      features: [
        "Weekly cleanings",
        "Priority scheduling",
        "Supply restock service",
        "Starting at 450 dollars per month for up to two bedrooms",
        "Month to month, cancel with fourteen days notice",
        "Options include 1 to 2 bedroom at 450 dollars for two hours thirty minutes",
        "Option for 3 bedrooms at 520 dollars for three hours thirty minutes",
        "Members receive fifteen percent off specialty add-ons",
      ],
      highlight: false,
      reference:
        "https://book.squareup.com/appointments/kc9k92jp0fullx/location/L8ED2XJBBMFV0/services/MEZPBBFDEZ5DJIB4KT4CETEC",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-section-light py-24 overflow-hidden">
        <BlobBackground />
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <b className="text-accent">BSS</b> Memberships
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Join our membership program for consistent cleaning and exclusive
            perks. Designed for homeowners, busy professionals, and frequent
            clients who want peace of mind all year long.
          </p>
        </motion.div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-16 md:py-24 bg-background">
        <motion.div
          className="container mx-auto px-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className={`flex flex-col ${
                    tier.highlight
                      ? "border-primary shadow-lg md:scale-105"
                      : ""
                  }`}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-secondary">
                      {tier.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to={tier.reference}>
                      <Button
                        className="w-full rounded-full"
                        variant={tier.highlight ? "default" : "outline"}
                      >
                        Join Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center bg-primary/10 p-8 rounded-lg max-w-3xl mx-auto relative isolate overflow-hidden"
            variants={fadeUp}
          >
            <h3 className="text-2xl font-bold mb-2 relative">
              {" "}
              Start saving on every clean{" "}
            </h3>{" "}
            <p className="text-muted-foreground mb-6 relative">
              {" "}
              Join the Gold Membership for four cleanings each month and a light
              deep clean on every fourth visit. You get consistent results and
              strong monthly value.{" "}
            </p>{" "}
            <Link to="https://book.squareup.com/appointments/kc9k92jp0fullx/location/L8ED2XJBBMFV0/services/JVS3IG3ZY5NNZ5T676NOD67F">
              <Button size="lg" className="rounded-full relative">
                {" "}
                Join Gold Membership{" "}
              </Button>
            </Link>
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
        </motion.div>
      </section>
    </Layout>
  );
};

export default Memberships;
