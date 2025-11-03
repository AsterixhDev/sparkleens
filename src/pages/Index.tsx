import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProcessSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
