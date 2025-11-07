import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const IndicatorAirBnB = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          For Airbnb Hosts Who Value{" "}
          <span className="text-accent">Consistency</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Our monthly cleaning subscriptions keep your listings spotless and
          5-star ready — without you lifting a finger.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
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
          ].map((f, i) => (
            <div key={i} className="p-6 rounded-2xl bg-muted/40 border">
              <h3 className="font-semibold text-lg mb-2 text-accent">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="mt-10 rounded-full">
          <Link to="/airbnb-subscriptions">View Subscription Packages</Link>
        </Button>
      </div>
    </section>
  );
};

export default IndicatorAirBnB;
