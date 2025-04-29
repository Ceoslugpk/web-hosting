
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, Check } from "lucide-react";
import { useState } from "react";

interface DomainExtensionInfo {
  extension: string;
  price: string;
  description: string;
  features: string[];
}

const extensionData: Record<string, DomainExtensionInfo> = {
  "com": {
    extension: ".com",
    price: "$14.99/yr",
    description: "The most recognized domain extension for businesses worldwide.",
    features: [
      "Global recognition",
      "Ideal for commercial websites",
      "Great for brand building",
      "Most widely used domain extension"
    ]
  },
  "net": {
    extension: ".net",
    price: "$12.99/yr",
    description: "Perfect for technology, internet infrastructure, and networking companies.",
    features: [
      "Strong technical association",
      "Good alternative if .com is unavailable",
      "Popular for tech companies",
      "Strong internet presence"
    ]
  },
  "org": {
    extension: ".org",
    price: "$11.99/yr",
    description: "Ideal for non-profit organizations, associations, and foundations.",
    features: [
      "Builds trust for organizations",
      "Recognized for non-profit entities",
      "Great for educational resources",
      "Community-focused identity"
    ]
  },
  "io": {
    extension: ".io",
    price: "$39.99/yr",
    description: "Popular for tech startups, SaaS companies, and gaming websites.",
    features: [
      "Tech-savvy perception",
      "Short and memorable",
      "Popular in tech industry",
      "Great for startups"
    ]
  },
  "dev": {
    extension: ".dev",
    price: "$19.99/yr",
    description: "Perfect for developers, programming resources, and tech projects.",
    features: [
      "Built-in HTTPS security",
      "Strong developer association",
      "Great for portfolios",
      "Technical credibility"
    ]
  },
  "app": {
    extension: ".app",
    price: "$17.99/yr",
    description: "Ideal for mobile applications, web apps, and software products.",
    features: [
      "Clear connection to applications",
      "Built-in security",
      "Great for app landing pages",
      "Intuitive for users"
    ]
  },
  "tech": {
    extension: ".tech",
    price: "$24.99/yr",
    description: "Perfect for technology companies, IT services, and tech blogs.",
    features: [
      "Strong technology association",
      "Modern and innovative",
      "Industry-specific branding",
      "Clear tech identity"
    ]
  },
  "ai": {
    extension: ".ai",
    price: "$79.99/yr",
    description: "Ideal for artificial intelligence companies, machine learning projects, and AI tools.",
    features: [
      "Direct AI association",
      "Growing popularity",
      "Premium perception",
      "Industry-specific recognition"
    ]
  }
};

export const ExtensionTemplate = () => {
  const { extension } = useParams<{ extension: string }>();
  const [searchDomain, setSearchDomain] = useState("");
  
  const extensionInfo = extensionData[extension as string] || {
    extension: `.${extension}`,
    price: "Contact for pricing",
    description: "Register your domain with this extension today.",
    features: ["Domain registration", "DNS management", "Domain privacy"]
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would implement domain search functionality here
    console.log(`Searching for ${searchDomain}${extensionInfo.extension}`);
  };

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-12 md:py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0E2954] mb-4 md:mb-6">
                {extensionInfo.extension} Domain Registration
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-6 md:mb-8">
                {extensionInfo.description}
              </p>
              <div className="max-w-3xl mx-auto">
                <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder={`Enter domain name without ${extensionInfo.extension}`}
                      value={searchDomain}
                      onChange={(e) => setSearchDomain(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4FEB] focus:border-transparent"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0E2954] mb-2">
                {extensionInfo.extension}
              </h2>
              <p className="text-[#4E4FEB] text-xl md:text-2xl font-bold mb-4">
                {extensionInfo.price}
              </p>
              <p className="text-gray-600 mb-6">
                Register your perfect domain name with {extensionInfo.extension} extension today.
              </p>
              <button className="bg-[#4E4FEB] text-white px-6 py-2 rounded-lg hover:bg-[#3a3bdc] transition-colors">
                Register Now
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0E2954] mb-4">Features & Benefits</h3>
                <ul className="space-y-3">
                  {extensionInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-[#4E4FEB] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-[#0E2954] mb-4">Why Choose {extensionInfo.extension}?</h3>
                <p className="text-gray-600 mb-4">
                  A {extensionInfo.extension} domain extension gives your website instant recognition and credibility.
                </p>
                <p className="text-gray-600">
                  With our user-friendly domain management tools, you can easily configure DNS settings, set up domain forwarding, and protect your personal information with domain privacy.
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
