
import { Check } from "lucide-react";
import { useState } from "react";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PlanFeature[];
  isPopular?: boolean;
}

const linuxPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 2.99,
    annualPrice: 29.90,
    features: [
      { name: "1 Website", included: true },
      { name: "10 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Weekly Backups", included: true },
      { name: "24/7 Support", included: true },
      { name: "Free Domain", included: false },
      { name: "CDN Service", included: false },
      { name: "DDoS Protection", included: false },
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 5.99,
    annualPrice: 59.90,
    isPopular: true,
    features: [
      { name: "Unlimited Websites", included: true },
      { name: "50 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Daily Backups", included: true },
      { name: "24/7 Priority Support", included: true },
      { name: "Free Domain", included: true },
      { name: "CDN Service", included: true },
      { name: "DDoS Protection", included: false },
    ],
  },
  {
    name: "Business",
    monthlyPrice: 9.99,
    annualPrice: 99.90,
    features: [
      { name: "Unlimited Websites", included: true },
      { name: "100 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Daily Backups", included: true },
      { name: "24/7 Premium Support", included: true },
      { name: "Free Domain", included: true },
      { name: "CDN Service", included: true },
      { name: "DDoS Protection", included: true },
    ],
  },
];

const windowsPlans: PricingPlan[] = [
  {
    name: "Windows Starter",
    monthlyPrice: 4.99,
    annualPrice: 49.90,
    features: [
      { name: "1 Website", included: true },
      { name: "15 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Weekly Backups", included: true },
      { name: "24/7 Support", included: true },
      { name: "Free Domain", included: false },
      { name: "CDN Service", included: false },
      { name: "DDoS Protection", included: false },
    ],
  },
  {
    name: "Windows Pro",
    monthlyPrice: 7.99,
    annualPrice: 79.90,
    isPopular: true,
    features: [
      { name: "Unlimited Websites", included: true },
      { name: "75 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Daily Backups", included: true },
      { name: "24/7 Priority Support", included: true },
      { name: "Free Domain", included: true },
      { name: "CDN Service", included: true },
      { name: "DDoS Protection", included: false },
    ],
  },
  {
    name: "Windows Business",
    monthlyPrice: 12.99,
    annualPrice: 129.90,
    features: [
      { name: "Unlimited Websites", included: true },
      { name: "150 GB SSD Storage", included: true },
      { name: "Free SSL Certificate", included: true },
      { name: "Daily Backups", included: true },
      { name: "24/7 Premium Support", included: true },
      { name: "Free Domain", included: true },
      { name: "CDN Service", included: true },
      { name: "DDoS Protection", included: true },
    ],
  },
];

export const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isLinux, setIsLinux] = useState(true);
  const plans = isLinux ? linuxPlans : windowsPlans;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Pricing Plans</h2>
          <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
            Choose Your Hosting Plan
          </h3>
          <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
            Select the perfect hosting plan for your needs. All plans include our
            award-winning 24/7 support.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  isLinux
                    ? "bg-white shadow-sm text-[#4E4FEB]"
                    : "text-gray-600"
                }`}
                onClick={() => setIsLinux(true)}
              >
                Linux Hosting
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  !isLinux
                    ? "bg-white shadow-sm text-[#4E4FEB]"
                    : "text-gray-600"
                }`}
                onClick={() => setIsLinux(false)}
              >
                Windows Hosting
              </button>
            </div>

            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  !isAnnual
                    ? "bg-white shadow-sm text-[#4E4FEB]"
                    : "text-gray-600"
                }`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  isAnnual
                    ? "bg-white shadow-sm text-[#4E4FEB]"
                    : "text-gray-600"
                }`}
                onClick={() => setIsAnnual(true)}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg p-8 animate-fade-in ${
                plan.isPopular
                  ? "border-2 border-[#4E4FEB] transform scale-105"
                  : "border border-gray-200"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#4E4FEB] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-[#0E2954] mb-4">
                  {plan.name}
                </h4>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-[#4E4FEB]">
                    ${isAnnual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                  </span>
                  <span className="text-gray-500">/{isAnnual ? 'year' : 'month'}</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mt-2">Save 20% with annual billing</p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-[#2D5087]"
                  >
                    <Check
                      className={`w-5 h-5 ${
                        feature.included ? "text-[#4E4FEB]" : "text-gray-300"
                      }`}
                    />
                    <span className={feature.included ? "" : "text-gray-400"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded py-3 px-4 font-semibold transition-all ${
                  plan.isPopular
                    ? "bg-[#4E4FEB] text-white hover:bg-[#3a3bdc]"
                    : "bg-white text-[#4E4FEB] border-2 border-[#4E4FEB] hover:bg-[#4E4FEB] hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
