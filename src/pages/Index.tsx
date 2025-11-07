import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import CTASection from "@/components/home/CTASection";
import IndicatorMembership from "@/components/home/IndicatorMembership";
import IndicatorAirBnB from "@/components/home/IndicatorAirBnB";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <IndicatorMembership/>
      <IndicatorAirBnB/>
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
