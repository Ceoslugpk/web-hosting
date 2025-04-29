
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MobileSubMenu {
  title: string;
  items: {
    section: string;
    links: {
      title: string;
      url: string;
    }[];
  }[];
}

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleSubMenu = (menuName: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const domainMenu: MobileSubMenu = {
    title: "Domains",
    items: [
      {
        section: "Popular Domains",
        links: [
          { title: ".com Domains", url: "/domains/com" },
          { title: ".net Domains", url: "/domains/net" },
          { title: ".org Domains", url: "/domains/org" },
          { title: ".io Domains", url: "/domains/io" },
        ]
      },
      {
        section: "Domain Services",
        links: [
          { title: "Domain Transfer", url: "/domains/transfer" },
          { title: "Domain Protection", url: "/domains/protection" },
          { title: "DNS Management", url: "/domains/dns" },
          { title: "Domain Reseller", url: "/domains/reseller" },
        ]
      },
      {
        section: "New Extensions",
        links: [
          { title: ".dev Domains", url: "/domains/dev" },
          { title: ".app Domains", url: "/domains/app" },
          { title: ".tech Domains", url: "/domains/tech" },
          { title: ".ai Domains", url: "/domains/ai" },
        ]
      }
    ]
  };

  const hostingMenu: MobileSubMenu = {
    title: "Hosting",
    items: [
      {
        section: "Web Hosting",
        links: [
          { title: "Shared Hosting", url: "/hosting/shared" },
          { title: "VPS Hosting", url: "/hosting/vps" },
          { title: "Dedicated Servers", url: "/hosting/dedicated" },
          { title: "WordPress Hosting", url: "/hosting/wordpress" },
        ]
      },
      {
        section: "Specialized Solutions",
        links: [
          { title: "Business Hosting", url: "/hosting/business" },
          { title: "Cloud Hosting", url: "/hosting/cloud" },
          { title: "Reseller Hosting", url: "/hosting/reseller" },
          { title: "Managed Hosting", url: "/hosting/managed" },
        ]
      }
    ]
  };

  const otherMenu: MobileSubMenu = {
    title: "Other",
    items: [
      {
        section: "Additional Services",
        links: [
          { title: "SSL Certificates", url: "/ssl" },
          { title: "Site Backup", url: "/backup" },
          { title: "CDN Service", url: "/cdn" },
          { title: "Migration Service", url: "/migration" },
        ]
      }
    ]
  };

  const renderSubMenu = (menu: MobileSubMenu) => {
    const isExpanded = expandedMenus[menu.title];
    
    return (
      <div key={menu.title} className="border-b border-gray-200">
        <button 
          onClick={() => toggleSubMenu(menu.title)}
          className="flex items-center justify-between w-full py-3 px-4"
        >
          <span>{menu.title}</span>
          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
        
        {isExpanded && (
          <div className="pl-6 pb-3">
            {menu.items.map((section, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold text-sm text-[#4E4FEB] mb-2">{section.section}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link 
                        to={link.url} 
                        className="block text-gray-700 hover:text-[#4E4FEB]"
                        onClick={toggleMenu}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button 
        onClick={toggleMenu} 
        className="md:hidden fixed top-4 right-4 z-50 bg-white p-2 rounded-full shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 overflow-y-auto pt-16 pb-8">
          <nav className="container mx-auto">
            <div className="space-y-4">
              <Link to="/" className="block py-2 px-4 hover:text-[#4E4FEB]" onClick={toggleMenu}>
                Home
              </Link>
              
              {renderSubMenu(domainMenu)}
              {renderSubMenu(hostingMenu)}
              
              <Link to="/website-builder" className="block py-2 px-4 border-b border-gray-200 hover:text-[#4E4FEB]" onClick={toggleMenu}>
                Website Builder
              </Link>
              
              <Link to="/security" className="block py-2 px-4 border-b border-gray-200 hover:text-[#4E4FEB]" onClick={toggleMenu}>
                Web Security
              </Link>
              
              <Link to="/email" className="block py-2 px-4 border-b border-gray-200 hover:text-[#4E4FEB]" onClick={toggleMenu}>
                Email
              </Link>
              
              {renderSubMenu(otherMenu)}
              
              <Link to="/whois" className="block py-2 px-4 border-b border-gray-200 hover:text-[#4E4FEB]" onClick={toggleMenu}>
                Whois Lookup
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
