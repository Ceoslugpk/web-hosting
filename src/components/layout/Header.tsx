import { Link } from "react-router-dom";
import { MegaMenu } from "../navigation/MegaMenu";
import { Globe, Server, Settings, Search } from "lucide-react";
const domainMenuItems = [{
  section: "Popular Domains",
  links: [{
    title: ".com Domains",
    url: "/domains/com"
  }, {
    title: ".net Domains",
    url: "/domains/net"
  }, {
    title: ".org Domains",
    url: "/domains/org"
  }, {
    title: ".io Domains",
    url: "/domains/io"
  }]
}, {
  section: "Domain Services",
  links: [{
    title: "Domain Transfer",
    url: "/domains/transfer"
  }, {
    title: "Domain Protection",
    url: "/domains/protection"
  }, {
    title: "DNS Management",
    url: "/domains/dns"
  }, {
    title: "Domain Reseller",
    url: "/domains/reseller"
  }]
}, {
  section: "New Extensions",
  links: [{
    title: ".dev Domains",
    url: "/domains/dev"
  }, {
    title: ".app Domains",
    url: "/domains/app"
  }, {
    title: ".tech Domains",
    url: "/domains/tech"
  }, {
    title: ".ai Domains",
    url: "/domains/ai"
  }]
}];
const hostingMenuItems = [{
  section: "Web Hosting",
  links: [{
    title: "Shared Hosting",
    url: "/hosting/shared"
  }, {
    title: "VPS Hosting",
    url: "/hosting/vps"
  }, {
    title: "Dedicated Servers",
    url: "/hosting/dedicated"
  }, {
    title: "WordPress Hosting",
    url: "/hosting/wordpress"
  }]
}, {
  section: "Specialized Solutions",
  links: [{
    title: "Business Hosting",
    url: "/hosting/business"
  }, {
    title: "Cloud Hosting",
    url: "/hosting/cloud"
  }, {
    title: "Reseller Hosting",
    url: "/hosting/reseller"
  }, {
    title: "Managed Hosting",
    url: "/hosting/managed"
  }]
}, {
  section: "Enterprise Hosting",
  links: [{
    title: "High Performance",
    url: "/hosting/enterprise"
  }, {
    title: "Custom Solutions",
    url: "/hosting/custom"
  }, {
    title: "Database Hosting",
    url: "/hosting/database"
  }, {
    title: "Email Hosting",
    url: "/hosting/email"
  }]
}];
const otherMenuItems = [{
  section: "Additional Services",
  links: [{
    title: "SSL Certificates",
    url: "/ssl"
  }, {
    title: "Site Backup",
    url: "/backup"
  }, {
    title: "CDN Service",
    url: "/cdn"
  }, {
    title: "Migration Service",
    url: "/migration"
  }]
}, {
  section: "Tools & Resources",
  links: [{
    title: "Website Analytics",
    url: "/analytics"
  }, {
    title: "Marketing Tools",
    url: "/marketing"
  }, {
    title: "Developer Tools",
    url: "/developer"
  }, {
    title: "API Access",
    url: "/api"
  }]
}, {
  section: "Support & Help",
  links: [{
    title: "Knowledge Base",
    url: "/support/kb"
  }, {
    title: "Video Tutorials",
    url: "/support/tutorials"
  }, {
    title: "Community Forum",
    url: "/support/forum"
  }, {
    title: "Contact Support",
    url: "/support/contact"
  }]
}];
export const Header = () => {
  return <header className="flex flex-col items-stretch animate-fade-in">
      <div className="flex flex-col w-full items-center max-md:max-w-full">
        <div className="max-w-[1920px] w-full bg-[#4E4FEB] min-h-[43px] flex items-center justify-between text-white text-sm leading-[21px] px-4 sm:px-6 lg:px-8 xl:px-[250px] py-2 border-y border-[rgba(20,19,19,0.07)]">
          <div className="flex items-center gap-2.5 font-medium">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/69b895529e24bf63369a6f1bd52e7cdcba90f0cc78cba1f99879f757cd256e70" className="aspect-square object-contain w-5" alt="" />
            <span className="whitespace-nowrap">50 GB plan with free matching domain.</span>
          </div>
          
          <nav className="hidden sm:flex items-center space-x-6 font-semibold">
            <Link to="/about" className="hover:text-opacity-80 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-opacity-80 transition-colors">Contact</Link>
            <Link to="/sitemap" className="hover:text-opacity-80 transition-colors">Sitemap</Link>
          </nav>
        </div>

        <div className="max-w-[1920px] bg-white flex w-full flex-col items-center justify-center px-[70px] py-5 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1415px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
            <Link to="/" className="flex flex-col items-stretch justify-center">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/2a2325cca4c2bc859d40fdad368f115019782c5a1b2e1aed92c3aea24f7e9bad" className="aspect-[3.42] object-contain w-[171px] max-w-full" alt="GoHost Logo" />
            </Link>

            <div className="flex items-stretch gap-[40px_49px] flex-wrap max-md:max-w-full">
              <div className="flex items-stretch gap-[18px] text-sm text-[#0E2954] font-semibold capitalize leading-[21px] grow shrink basis-auto">
                <div className="flex flex-col overflow-hidden items-stretch justify-center my-auto">
                  <div className="flex min-h-[21px] items-center justify-center">
                    <div className="self-stretch flex items-center gap-2.5 my-auto">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/a67d4ee98ae74409993f1da3b110b2f6/e4824367bfd961e09779873d9eab05f6cdfe3c9c766a12ee816a9e40b960d7f7" className="aspect-square object-contain w-[18px] self-stretch shrink-0 my-auto" alt="" />
                      <div className="self-stretch my-auto">
                        (20) 123 456 7890
                      </div>
                    </div>
                  </div>
                </div>

                <button className="rounded bg-white shadow-[-4px_4px_0px_rgba(237,237,253,1)] border flex flex-col items-stretch justify-center px-[22px] py-[13px] border-[rgba(25,24,24,0.17)]">
                  View Cart (0)
                </button>

                <button className="rounded bg-[#4E4FEB] shadow-[-4px_4px_0px_rgba(237,237,253,1)] border flex flex-col items-stretch text-white justify-center px-[22px] py-[13px] border-[rgba(227,233,237,1)]">
                  Sign In
                </button>
              </div>

              <div className="flex items-stretch gap-[7px] whitespace-nowrap my-auto">
                <div className="text-[#0E2954] text-[15px] font-semibold leading-[22.5px]">
                  English
                </div>
                <div className="text-[#666] text-[8px] font-bold leading-3 my-auto">
                  ▼
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="max-w-[1920px] justify-between items-center bg-white w-full border-y border-[rgba(20,19,19,0.07)] max-md:max-w-full mx-0 py-[5px] px-[132px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
              <Link to="/" className="hover:text-[#4E4FEB] transition-colors px-4 py-2">
                Home
              </Link>

              <MegaMenu title="Domains" icon={<Globe className="mr-2" />} items={domainMenuItems} />
              <MegaMenu title="Hosting" icon={<Server className="mr-2" />} items={hostingMenuItems} />

              <Link to="/website-builder" className="hover:text-[#4E4FEB] transition-colors px-4 py-2">
                Website Builder
              </Link>

              <Link to="/security" className="hover:text-[#4E4FEB] transition-colors px-4 py-2">
                Web Security
              </Link>

              <Link to="/email" className="hover:text-[#4E4FEB] transition-colors px-4 py-2">
                Email
              </Link>

              <MegaMenu title="Other" icon={<Settings className="mr-2" />} items={otherMenuItems} />
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-[18px] h-[18px] text-[#0E2954]" />
              <span className="text-[#0E2954] hover:text-[#4E4FEB] transition-colors cursor-pointer">
                Register a New Domain
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>;
};