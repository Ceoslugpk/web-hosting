import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DomainPricing } from "@/components/sections/DomainPricing";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <DomainPricing />
        {/* Additional sections will be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
