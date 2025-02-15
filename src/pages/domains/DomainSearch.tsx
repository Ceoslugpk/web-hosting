
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, Check } from "lucide-react";

const DomainSearch = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                Find Your Perfect Domain Name
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Search for available domains and secure your online presence today.
              </p>
              <div className="max-w-3xl mx-auto">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter your domain name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4FEB] focus:border-transparent"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['.com', '.net', '.org', '.io'].map((extension) => (
                <div key={extension} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#0E2954] mb-2">{extension}</h3>
                  <p className="text-[#4E4FEB] text-2xl font-bold">$14.99/yr</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#0E2954] mb-6">
                Why Choose Our Domain Service?
              </h2>
              <p className="text-[#2D5087] max-w-2xl mx-auto">
                We provide comprehensive domain services to help you establish and protect your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Free DNS Management',
                  description: 'Configure your domain settings with our easy-to-use DNS management tools.'
                },
                {
                  title: 'Domain Privacy',
                  description: 'Protect your personal information with our domain privacy service.'
                },
                {
                  title: 'Auto-Renewal',
                  description: 'Never worry about losing your domain with automatic renewal service.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-[#F8F9FA] p-8 rounded-lg">
                  <Check className="w-12 h-12 text-[#4E4FEB] mb-4" />
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

export default DomainSearch;
