
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DomainPricing } from "@/components/sections/DomainPricing";
import { HostingFeatures } from "@/components/sections/HostingFeatures";
import { SecurityFeatures } from "@/components/sections/SecurityFeatures";
import { DataCenters } from "@/components/sections/DataCenters";
import { PricingTable } from "@/components/sections/PricingTable";
import { Reviews } from "@/components/sections/Reviews";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <Hero />
        <DomainPricing />
        <HostingFeatures />
        <SecurityFeatures />
        <DataCenters />
        <PricingTable />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
