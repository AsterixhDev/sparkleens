import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import BlobBackground from "@/components/ui/blob-background";
import { formatContactMessage } from "@/lib/formatMail/contact";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Lightweight UX: show toast and reset form. Real submission can be wired later.

    const message = formatContactMessage(formData);
    const sentMail = await import("@/lib/sendMail").then((mod) =>
      mod.sendMail({
        subject: `New Contact Message from ${formData.fullName}`,
        html: message,
        mailTo: formData.email,
      })
    );

    if (!sentMail.ok) {
      toast.error("There was an issue sending your message. Please try again later.")
    } else {
      toast.success("Message sent! We'll get back to you within 24 hours.")
    }
    // setFormData({ fullName: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-section-light">
        <BlobBackground />
        <div className="container relative mx-auto px-4 text-center flex flex-col items-center justify-center gap-3">
          <div className="rounded-full bg-blue-500/20 px-6 py-2.5 text-sm font-semibold text-blue-500">
            Get in touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ready To Get{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Started?
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Contact us today for a free quote and let us show you why we're the
            most trusted cleaning service.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-primary bg-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <a
                      href="tel:+14702271318"
                      className="block text-foreground mt-1"
                    >
                      (470) 227-1318
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-primary bg-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a
                      href="mailto:broomeservicesolutions@gmail.com"
                      className="block text-foreground mt-1 break-all"
                    >
                      broomeservicesolutions@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-accent bg-accent/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-foreground mt-1 font-semibold">
                      Mon–Sat: 8 AM – 7 PM
                    </p>
                    <p className="text-muted-foreground">Sun: 10 AM — 6 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Small Contact Form + CTA */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Send us a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    placeholder="(470) 227-1318"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
                  >
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    className="border border-secondary bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full"
                    onClick={() => navigate("/get-quote")}
                  >
                    Request Quote
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
