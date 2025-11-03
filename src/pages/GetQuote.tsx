import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BadgeDollarSign, Stars, ClipboardCheck, Clock, Phone, Hourglass } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const GetQuote = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    propertyType: "",
    squareFootage: "",
    frequency: "",
    details: "",
  });

  // Auto-fill service type based on URL parameter
  useEffect(() => {
    const type = searchParams.get('type');
    if (type) {
      setFormData(prev => ({ ...prev, serviceType: type }));
      
      // Auto-select suggested property type based on service
      if (type === 'office') {
        setFormData(prev => ({ ...prev, propertyType: 'office' }));
      } else if (type === 'home') {
        setFormData(prev => ({ ...prev, propertyType: 'house' }));
      }
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with a customized quote.",
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your <span className="text-primary">Free Quote</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your cleaning needs and we'll provide a customized quote within 24 hours
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-secondary mb-6">Request Quote</h2>
              
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
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input 
                      id="company"
                      placeholder=""
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select 
                      value={formData.serviceType}
                      onValueChange={(value) => handleChange("serviceType", value)}
                    >
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
                  <div>
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select 
                      value={formData.propertyType}
                      onValueChange={(value) => handleChange("propertyType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="commercial">Commercial Space</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="squareFootage">Approximate Square Footage</Label>
                    <Input 
                      id="squareFootage"
                      placeholder="e.g 2000 sq ft"
                      value={formData.squareFootage}
                      onChange={(e) => handleChange("squareFootage", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="frequency">Cleaning Frequency</Label>
                    <Select onValueChange={(value) => handleChange("frequency", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One-time</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="details">Additional Details *</Label>
                  <Textarea 
                    id="details"
                    placeholder="Please describe any specific requirements, areas of focus, or questions you have..."
                    rows={5}
                    value={formData.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
                >
                  Get Free Quote
                </Button>
              </form>
            </div>

            {/* Right: Info Boxes */}
            <div className="space-y-6">
              {/* Why Choose Our Quote Process */}
              <div className="bg-info-cyan border border-secondary/20 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">
                  Why Choose Our <span className="text-secondary">Quote Process?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: BadgeDollarSign,
                      text: "Free, no-obligation quote"
                    },
                    {
                      icon: Stars,
                      text: "Expert consultation included"
                    },
                    {
                      icon: ClipboardCheck,
                      text: "Customized service plans"
                    },
                    {
                      icon: Hourglass,
                      text: "Response within 24 hours"
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      {React.createElement(item.icon, {
                        className: "w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                      })}
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Immediate Assistance */}
              <div className="bg-info-green border border-primary/20 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-4">
                  Need Immediate <span className="text-primary">Assistance?</span>
                </h3>
                <p className="text-sm mb-4">
                  Call us directly for urgent cleaning needs or to speak with our team immediately.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <a href="tel:1-275-915-4200" className="font-semibold relative nav-link transition-colors">
                      1-275-915-4200
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full"
                  asChild
                >
                  <a href="tel:1-275-915-4200">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;
