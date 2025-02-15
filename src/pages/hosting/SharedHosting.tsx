
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Server, Shield, Gauge, Clock } from "lucide-react";

const SharedHosting = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                Powerful Shared Hosting Solutions
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Fast, secure, and reliable hosting for your website with 24/7 support.
              </p>
              <button className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Server,
                  title: "99.9% Uptime",
                  description: "Guaranteed server uptime for your website"
                },
                {
                  icon: Shield,
                  title: "Enhanced Security",
                  description: "Advanced security features included"
                },
                {
                  icon: Gauge,
                  title: "Lightning Fast",
                  description: "Optimized for maximum performance"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Expert support team always available"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#F8F9FA] p-8 rounded-lg">
                  <feature.icon className="w-12 h-12 text-[#4E4FEB] mb-4" />
                  <h3 className="text-xl font-bold text-[#0E2954] mb-4">{feature.title}</h3>
                  <p className="text-[#2D5087]">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SharedHosting;
