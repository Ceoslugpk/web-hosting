
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DomainPricing } from "@/components/sections/DomainPricing";
import { HostingFeatures } from "@/components/sections/HostingFeatures";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <Hero />
        <DomainPricing />
        <HostingFeatures />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
