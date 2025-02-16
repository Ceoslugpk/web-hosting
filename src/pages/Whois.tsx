
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, FileSearch } from "lucide-react";

const Whois = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                WHOIS Lookup
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Find detailed information about any domain name.
              </p>

              <div className="max-w-2xl mx-auto">
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter domain name..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-8">
                <FileSearch className="w-16 h-16 text-[#4E4FEB] mx-auto mb-4" />
                <p className="text-[#2D5087]">
                  Enter a domain name above to see its WHOIS information
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Whois;
