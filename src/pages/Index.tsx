import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
