
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, Check } from "lucide-react";
import { Link } from "react-router-dom";

const DomainSearch = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-10 md:py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0E2954] mb-4 md:mb-6">
                Find Your Perfect Domain Name
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-6 md:mb-8">
                Search for available domains and secure your online presence today.
              </p>
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {[
                {extension: '.com', price: '$14.99/yr', path: '/domains/com'},
                {extension: '.net', price: '$12.99/yr', path: '/domains/net'},
                {extension: '.org', price: '$11.99/yr', path: '/domains/org'},
                {extension: '.io', price: '$39.99/yr', path: '/domains/io'}
              ].map((domain) => (
                <Link to={domain.path} key={domain.extension} className="block">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-[#0E2954] mb-2">{domain.extension}</h3>
                    <p className="text-[#4E4FEB] text-lg md:text-2xl font-bold">{domain.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                {extension: '.dev', price: '$19.99/yr', path: '/domains/dev'},
                {extension: '.app', price: '$17.99/yr', path: '/domains/app'},
                {extension: '.tech', price: '$24.99/yr', path: '/domains/tech'},
                {extension: '.ai', price: '$79.99/yr', path: '/domains/ai'}
              ].map((domain) => (
                <Link to={domain.path} key={domain.extension} className="block">
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-[#0E2954] mb-2">{domain.extension}</h3>
                    <p className="text-[#4E4FEB] text-lg md:text-2xl font-bold">{domain.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2954] mb-4 md:mb-6">
                Why Choose Our Domain Service?
              </h2>
              <p className="text-[#2D5087] max-w-2xl mx-auto">
                We provide comprehensive domain services to help you establish and protect your online presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                <div key={index} className="bg-[#F8F9FA] p-6 md:p-8 rounded-lg">
                  <Check className="w-10 h-10 text-[#4E4FEB] mb-4" />
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
