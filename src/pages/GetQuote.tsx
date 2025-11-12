import Layout from "@/components/Layout";
import BlobBackground from "@/components/ui/blob-background";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useQueryParams } from "@/hooks/useQueryParams";
import { formatQuoteMessage } from "@/lib/formatMail/getquote";
import { toastClassnames } from "@/lib/toastClassnames";
import {
  BadgeDollarSign,
  ClipboardCheck,
  Clock,
  Hourglass,
  Phone,
  Stars,
} from "lucide-react";
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const GetQuote = () => {
  const queries = useQueryParams<{property:(string|number)[]}>({
    property(value) {
      if (!value) return [];
      return value.split(",").map((v) => isNaN(Number(v)) ? v : Number(v) );
    },
  })
  console.log(queries)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    size: "",
    desiredDate: "",
    notes: "",
  });

 

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const message = formatQuoteMessage(formData);
      const sendMessage = await import("@/lib/sendMail").then((mod) =>
        mod.sendMail({
          subject: `New Quote Request from ${formData.name}`,
          html: message,
          mailTo: formData.email,
        })
      );

      if (!sendMessage.ok) {
        toast.error(
          "There was an issue sending your quote request. Please try again later.",
          { classNames: toastClassnames }
        );
      } else {
        toast.success(
          "Quote request sent! We'll get back to you within 24 hours.",
          { classNames: toastClassnames }
        );
        setSuccess(true);
      }
    } catch {
      toast.error("There was an unexpected error. Please try again later.", {
        classNames: toastClassnames,
      });
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        size: "",
        desiredDate: "",
        notes: "",
      });
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-section-light py-24 overflow-hidden">
        <BlobBackground />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your <span className="text-primary">Free Quote</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Tell us about your cleaning needs and we'll provide a customized
            quote within 24 hours
          </p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Get Your Free Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      placeholder="(470) 227-1318"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="propertyType">Property Type *</Label>
                  <Select
                    value={formData.propertyType}
                    onValueChange={(value) =>
                      handleChange("propertyType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential">Residential</SelectItem>
                      <SelectItem value="Airbnb">Airbnb</SelectItem>
                      <SelectItem value="Commercial">Commercial</SelectItem>
                      <SelectItem value="Post-Construction">
                        Post-Construction
                      </SelectItem>
                      <SelectItem value="Estate">Estate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="size">Square Footage or Room Count</Label>
                    <Input
                      id="size"
                      placeholder="e.g. 1500 sq ft or 3 beds"
                      value={formData.size}
                      onChange={(e) => handleChange("size", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="desiredDate">Desired Date</Label>
                    <Input
                      id="desiredDate"
                      type="date"
                      value={formData.desiredDate}
                      onChange={(e) =>
                        handleChange("desiredDate", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notes or Special Requests</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    placeholder="Any special instructions or requests"
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full rounded-full ${
                    loading
                      ? "bg-primary/70 cursor-wait"
                      : success
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-primary hover:bg-primary-hover text-primary-foreground"
                  } flex items-center justify-center gap-2`}
                  disabled={loading || success}
                >
                  {loading && <Hourglass className="w-5 h-5 animate-spin" />}
                  {success ? "Sent!" : loading ? "Sending..." : "Request Quote"}
                </Button>
              </form>
            </div>

            {/* Right: Info panel */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border bg-primary/20">
                <h3 className="font-bold text-lg mb-3">
                  Why choose{" "}
                  <b className="text-primary">Broome Service Solutions</b>?
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-2">
                    <BadgeDollarSign className="w-5 h-5 text-primary" /> Free,
                    no-obligation quote
                  </li>
                  <li className="flex items-center gap-2">
                    <Stars className="w-5 h-5 text-primary" /> Experienced,
                    vetted cleaners
                  </li>
                  <li className="flex items-center gap-2">
                    <ClipboardCheck className="w-5 h-5 text-primary" />{" "}
                    Customized cleaning plans
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border bg-accent/30">
                <h3 className="font-bold text-lg mb-3">Contact & Hours</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <a href="tel:+14702271318" className="font-semibold">
                    (470) 227-1318
                  </a>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Mon–Sat: 8 AM – 7 PM</p>
                    <p className="text-sm">Sun: 10 AM — 6 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetQuote;
