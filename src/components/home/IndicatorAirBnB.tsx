import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion, Variants } from "framer-motion"

const IndicatorAirBnB = () => {
  const features = [
    {
      title: "Reliable Turnovers",
      desc: "Never miss a check-in again — we track your calendar and handle every clean.",
    },
    {
      title: "Predictable Costs",
      desc: "Flat monthly rate, no surprises. Perfect for busy hosts and property managers.",
    },
    {
      title: "5-Star Standards",
      desc: "Our teams follow strict Airbnb checklists to guarantee guest satisfaction.",
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut", // ✅ allowed easing preset
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier easing
      },
    },
  }

  return (
    <motion.section
      className="py-20 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={cardVariants}
        >
          For Airbnb Hosts Who Value{" "}
          <span className="text-accent">Consistency</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
          variants={cardVariants}
        >
          Our monthly cleaning subscriptions keep your listings spotless and
          5-star ready — without you lifting a finger.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-muted/40 border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg mb-2 text-accent">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={cardVariants}>
          <Button asChild size="lg" className="mt-10 rounded-full">
            <Link to="/airbnb-subscriptions">View Subscription Packages</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default IndicatorAirBnB
