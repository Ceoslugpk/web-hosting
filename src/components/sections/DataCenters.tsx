
import { Globe } from "lucide-react";

export const DataCenters = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Global Network</h2>
          <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
            Strategic Data Center Locations
          </h3>
          <p className="text-[#2D5087] max-w-2xl mx-auto">
            Our data centers are strategically located worldwide to ensure fast loading times for your visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-[#F8F9FA] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#0E2954] mb-2">North America</h4>
              <p className="text-[#2D5087]">New York, San Francisco, Toronto</p>
            </div>
            <div className="bg-[#F8F9FA] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#0E2954] mb-2">Europe</h4>
              <p className="text-[#2D5087]">London, Amsterdam, Frankfurt</p>
            </div>
            <div className="bg-[#F8F9FA] p-6 rounded-lg">
              <h4 className="text-lg font-bold text-[#0E2954] mb-2">Asia Pacific</h4>
              <p className="text-[#2D5087]">Singapore, Tokyo, Sydney</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Globe className="w-64 h-64 text-[#4E4FEB]" />
          </div>
        </div>
      </div>
    </section>
  );
};
