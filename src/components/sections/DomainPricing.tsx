
interface DomainCardProps {
  icon: string;
  domain: string;
  description: string;
  price: string;
}

const DomainCard = ({ icon, domain, description, price }: DomainCardProps) => {
  return (
    <div className="border shadow-[-4px_4px_0px_0px_#EDEDFD] hover:shadow-[-2px_2px_0px_0px_#EDEDFD] transition-all bg-white w-full mx-auto p-[39px] rounded-lg border-[#E3E9ED] max-md:mt-5 max-md:px-5 hover:transform hover:scale-105">
      <div className="flex items-stretch gap-2 text-[28px] text-[#0E2954] font-black whitespace-nowrap leading-[42px]">
        <img
          loading="lazy"
          src={icon}
          className="aspect-square object-contain w-2.5 shrink-0 mt-[5px]"
          alt=""
        />
        <div>{domain}</div>
      </div>
      <p className="text-[#2D5087] text-sm font-semibold leading-[21px] mt-[31px]">
        {description}
      </p>
      <div className="flex items-stretch gap-[7px] text-center capitalize mt-[63px] max-md:mt-10">
        <div className="text-[#4E4FEB] text-2xl font-bold leading-6 grow">
          {price}
        </div>
        <div className="text-[#070B18] text-sm font-semibold leading-[14px]">
          /year
        </div>
      </div>
      <button className="w-full rounded bg-[#4E4FEB] hover:bg-[#3a3bdc] transition-all shadow-[-4px_4px_0px_rgba(237,237,253,1)] hover:shadow-[-2px_2px_0px_rgba(237,237,253,1)] border text-sm text-white font-semibold text-center leading-[14px] mt-[27px] py-[15px] border-[rgba(227,233,237,1)]">
        Register Domain
      </button>
    </div>
  );
};

export const DomainPricing = () => {
  const domains = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/dd3b7a364b921c6e27d3a1b98d577b9702e0f2112a77f5ce8d23f9b5df06f743",
      domain: "com",
      description: "Establish trust with the most recognized domain names.",
      price: "$ 13.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/49085dd86501b3df172568efd6f5fe372f2f52372a0b81520067dc99d6001bc6",
      domain: "cloud",
      description: "Highlight your technology project with a .cloud domain.",
      price: "$ 19.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/6dfac49067348243f582d270cfa36fbd83b9cfa87614e78c916557fc4ccd3100",
      domain: "net",
      description: "It's a fantastic alternative to .com – both generic and universal.",
      price: "$ 14.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/04f21ae0ad5f4b1341d23a57f2a0a62e488292daade3303b4e130dd0b35232cb",
      domain: "online",
      description: "It's an excellent alternative to .com – versatile and widely accepted.",
      price: "$ 49.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/04f21ae0ad5f4b1341d23a57f2a0a62e488292daade3303b4e130dd0b35232cb",
      domain: "org",
      description: "Perfect for organizations and non-profits.",
      price: "$ 15.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/04f21ae0ad5f4b1341d23a57f2a0a62e488292daade3303b4e130dd0b35232cb",
      domain: "io",
      description: "Popular choice for tech startups and developers.",
      price: "$ 39.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/04f21ae0ad5f4b1341d23a57f2a0a62e488292daade3303b4e130dd0b35232cb",
      domain: "dev",
      description: "Showcase your developer identity with a .dev domain.",
      price: "$ 29.99",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/04f21ae0ad5f4b1341d23a57f2a0a62e488292daade3303b4e130dd0b35232cb",
      domain: "app",
      description: "Perfect for mobile and web applications.",
      price: "$ 24.99",
    },
  ];

  return (
    <section className="bg-[#F6F9FD] flex w-full flex-col items-center justify-center px-20 py-[83px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1440px] flex-col items-center max-md:max-w-full animate-fade-in">
        <h2 className="text-[#4E4FEB] text-lg font-bold leading-[18px] capitalize hover:scale-105 transition-transform">
          Domain Register
        </h2>
        <h3 className="text-4xl text-[#0E2954] font-bold text-center capitalize leading-9 mt-[18px] px-[65px] max-md:max-w-full max-md:px-5 hover:scale-105 transition-transform">
          Why you need to register a<br />
          domain name.
        </h3>
        <p className="text-[#2D5087] text-center text-base font-normal leading-6 mt-[26px] max-md:max-w-full">
          The ideal domain instantly conveys your online purpose and uniqueness. Use our
          <br />
          domain search tool to find the perfect match and attract more visitors today.
        </p>

        <div className="grid grid-cols-4 gap-5 w-full mt-[57px] max-md:grid-cols-1 max-md:mt-10">
          {domains.map((domain, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <DomainCard {...domain} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
