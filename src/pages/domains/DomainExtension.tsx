
import { useParams } from "react-router-dom";
import { ExtensionTemplate } from "@/components/domains/ExtensionTemplate";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const extensionImages: Record<string, string> = {
  "com": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "net": "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "org": "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "io": "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "default": "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
};

const DomainExtension = () => {
  const { extension } = useParams<{ extension: string }>();
  const extensionImage = extensionImages[extension || ""] || extensionImages.default;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-[#F6F9FD] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0E2954] mb-4">
                .{extension} Domain Registration
              </h1>
              <p className="text-[#2D5087] mb-6">
                Secure your .{extension} domain today and build your online presence.
              </p>
              <a 
                href="#register" 
                className="bg-[#4E4FEB] text-white px-6 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors inline-block"
              >
                Register Now
              </a>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={extensionImage} 
                alt={`.${extension} domain`} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <ExtensionTemplate />
      <Footer />
    </div>
  );
};

export default DomainExtension;
