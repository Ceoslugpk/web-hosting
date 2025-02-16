
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Bell, CheckCircle } from "lucide-react";

const WebSecurity = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                Enterprise-Grade Security Solutions
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Protect your website with advanced security features and continuous monitoring.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "DDoS Protection",
                  description: "Advanced protection against attacks"
                },
                {
                  icon: Lock,
                  title: "SSL Certificates",
                  description: "Secure data encryption"
                },
                {
                  icon: Bell,
                  title: "24/7 Monitoring",
                  description: "Continuous security checks"
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

export default WebSecurity;
