
import React from "react";

export const SecurityFeatures = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1614064548237-096d9c61bb3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "DDoS Protection",
      description: "Advanced protection against DDoS attacks to keep your website safe and running.",
    },
    {
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "SSL Certificates",
      description: "Free SSL certificates to encrypt data and build trust with your visitors.",
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      title: "24/7 Monitoring",
      description: "Continuous monitoring of your hosting environment for optimal security.",
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Security First</h2>
          <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
            Enterprise-Grade Security Features
          </h3>
          <p className="text-[#2D5087] max-w-2xl mx-auto">
            Keep your website secure with our comprehensive security solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6 h-48 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-[#0E2954] mb-4">{feature.title}</h4>
              <p className="text-[#2D5087]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
