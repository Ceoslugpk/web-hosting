
const FeatureCard = ({ image, title, description }: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4 rounded-lg overflow-hidden h-40">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-[#0E2954] mb-2">{title}</h3>
      <p className="text-[#2D5087]">{description}</p>
    </div>
  );
};

export const HostingFeatures = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "99.9% Uptime",
      description: "We guarantee your website will be available 99.9% of the time or better.",
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Enhanced Security",
      description: "Advanced security features to protect your website from threats.",
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "Lightning Fast",
      description: "Optimized servers ensure your website loads quickly for visitors.",
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      title: "24/7 Support",
      description: "Our expert support team is available around the clock to help you.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Web Hosting</h2>
          <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
            Why Choose Our Hosting Service?
          </h3>
          <p className="text-[#2D5087] max-w-2xl mx-auto">
            Experience premium web hosting with features designed to give your website
            the platform it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
