
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Shield, Cloud, Users } from "lucide-react";

const Email = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                Professional Email Solutions
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Get secure, reliable email hosting for your business.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Business Email",
                  description: "Professional email hosting"
                },
                {
                  icon: Shield,
                  title: "Anti-spam",
                  description: "Advanced filtering"
                },
                {
                  icon: Cloud,
                  title: "Cloud Storage",
                  description: "50GB storage included"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Team features"
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

export default Email;
