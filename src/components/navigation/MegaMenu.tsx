
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Globe, Server, Settings } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
}

interface MegaMenuProps {
  title: string;
  icon?: React.ReactNode;
  items: {
    section: string;
    links: MenuItem[];
  }[];
}

export const MegaMenu = ({ title, icon, items }: MegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 px-4 py-2 hover:text-[#4E4FEB] transition-colors whitespace-nowrap">
        {icon && <span className="w-4 h-4">{icon}</span>}
        {title}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 w-[600px] bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-8 animate-fade-in">
          {items.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-sm font-semibold text-[#4E4FEB]">
                {section.section}
              </h3>
              <ul className="space-y-2">
                {section.links.map((item, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={item.url}
                      className="block text-sm text-gray-600 hover:text-[#4E4FEB] transition-colors"
                    >
                      {item.title}
                      {item.description && (
                        <p className="text-xs text-gray-400">{item.description}</p>
                      )}
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
