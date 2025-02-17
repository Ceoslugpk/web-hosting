
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileSearch, User, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { SearchForm } from "@/components/whois/SearchForm";
import { DomainInfoCard } from "@/components/whois/DomainInfoCard";
import { RegistrarInfoCard } from "@/components/whois/RegistrarInfoCard";
import { NameServersCard } from "@/components/whois/NameServersCard";
import { ContactCard } from "@/components/whois/ContactCard";
import { DnssecCard } from "@/components/whois/DnssecCard";

const Whois = () => {
  const [domain, setDomain] = useState("");
  const [whoisData, setWhoisData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) {
      toast.error("Please enter a domain name");
      return;
    }

    setLoading(true);
    setWhoisData(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('whois-lookup', {
        body: { domain }
      });

      if (error) {
        throw error;
      }

      setWhoisData(data);
      toast.success("WHOIS information retrieved successfully");
    } catch (error: any) {
      console.error('Error fetching WHOIS data:', error);
      toast.error(error.message || "Failed to fetch WHOIS information");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '-';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return '-';
    }
  };

  const getValueOrDash = (value: any): string => {
    if (value === null || value === undefined || value === '') {
      return '-';
    }
    return String(value);
  };

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                WHOIS Lookup
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Find detailed information about any domain name.
              </p>

              <div className="max-w-2xl mx-auto">
                <SearchForm
                  domain={domain}
                  loading={loading}
                  onDomainChange={setDomain}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              {!whoisData ? (
                <div className="text-center mb-8">
                  <FileSearch className="w-16 h-16 text-[#4E4FEB] mx-auto mb-4" />
                  <p className="text-[#2D5087]">
                    Enter a domain name above to see its WHOIS information
                  </p>
                </div>
              ) : (
                <div className="grid gap-6">
                  <h2 className="text-2xl font-semibold text-[#0E2954] mb-4">WHOIS Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <DomainInfoCard
                      domainInfo={whoisData.WhoisRecord}
                      formatDate={formatDate}
                      getValueOrDash={getValueOrDash}
                    />

                    <RegistrarInfoCard
                      registrar={whoisData.WhoisRecord.registrar}
                      getValueOrDash={getValueOrDash}
                    />

                    <NameServersCard
                      nameServers={whoisData.WhoisRecord.registryData?.nameServers}
                    />

                    <ContactCard
                      title="Administrative Contact"
                      icon={User}
                      contact={whoisData.WhoisRecord.administrativeContact}
                      getValueOrDash={getValueOrDash}
                    />

                    <ContactCard
                      title="Technical Contact"
                      icon={Phone}
                      contact={whoisData.WhoisRecord.technicalContact}
                      getValueOrDash={getValueOrDash}
                      showState={false}
                    />

                    <ContactCard
                      title="Registrant Information"
                      icon={Mail}
                      contact={whoisData.WhoisRecord.registrant}
                      getValueOrDash={getValueOrDash}
                    />

                    <DnssecCard
                      dnssec={whoisData.WhoisRecord.dnssec}
                      getValueOrDash={getValueOrDash}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Whois;
