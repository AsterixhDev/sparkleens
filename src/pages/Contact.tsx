import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectDetails: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll respond within 24 hours with a detailed quote tailored to your needs.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-section-light py-16">
        <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-3">
          <p className="text-secondary font-semibold bg-secondary/20 w-fit py-3 px-5 rounded-full">Get in touch</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Ready To Get <span className="text-primary">Started?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free quote and let us show you why we're the most trusted cleaning service.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Info Cards */}
            <div className="space-y-6">
              {/* Call Us */}
              <div className="bg-info-cyan border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-secondary mb-2">Call Us</h3>
                    <a href="tel:1-395-638-3941" className="block text-foreground hover:text-secondary transition-colors">
                      1-395-638-3941
                    </a>
                    <a href="tel:1-395-638-3941" className="block text-foreground hover:text-secondary transition-colors">
                      1-395-638-3941
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Us */}
              <div className="bg-info-cyan border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-secondary mb-2">Email Us</h3>
                    <a 
                      href="mailto:Ryan_Quitzon41@gmail.com" 
                      className="text-foreground hover:text-secondary transition-colors break-all"
                    >
                      Ryan_Quitzon41@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Visit Us */}
              <div className="bg-info-cyan border border-secondary/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-secondary mb-2">Visit Us</h3>
                    <p className="text-foreground">
                      1289 Little Gateway, East Leopoldo 24929
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-info-green border border-primary/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2">Working Hours</h3>
                    <p className="text-foreground font-semibold">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Sun: Emergency Service Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input 
                      id="fullName"
                      placeholder="Enter your fullname"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      placeholder="+1 44 xxxx xx"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select onValueChange={(value) => handleChange("serviceType", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Standard Home Cleaning</SelectItem>
                        <SelectItem value="office">Office and Workspace Cleaning</SelectItem>
                        <SelectItem value="deep">Deep Move in/out Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Details *</Label>
                  <Textarea 
                    id="projectDetails"
                    placeholder="Tell us about your cleaning requirements, property size, frequency needed, etc."
                    rows={5}
                    value={formData.projectDetails}
                    onChange={(e) => handleChange("projectDetails", e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
                >
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * We'll respond within 24 hours with a detailed quote tailored to your needs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
