
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Search, FileSearch, Loader2, Globe, Building2, Server, Shield, Calendar, User, Mail, Phone, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      console.log('Invoking whois-lookup function...');
      const { data, error } = await supabase.functions.invoke('whois-lookup', {
        body: { domain }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('WHOIS data received:', data);
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
                <form onSubmit={handleSubmit} className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Enter domain name..."
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                    />
                    <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-[#4E4FEB] text-white px-8 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin" />
                        Searching...
                      </>
                    ) : (
                      'Search'
                    )}
                  </button>
                </form>
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
                    {/* Domain Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-[#4E4FEB]" />
                          Domain Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p><span className="font-medium">Domain Name:</span> {getValueOrDash(whoisData.WhoisRecord.domainName)}</p>
                        <p><span className="font-medium">Status:</span> {getValueOrDash(whoisData.WhoisRecord.status)}</p>
                        <p><span className="font-medium">Created:</span> {formatDate(whoisData.WhoisRecord.createdDate)}</p>
                        <p><span className="font-medium">Updated:</span> {formatDate(whoisData.WhoisRecord.updatedDate)}</p>
                        <p><span className="font-medium">Expires:</span> {formatDate(whoisData.WhoisRecord.expiresDate)}</p>
                        <p><span className="font-medium">Domain Age:</span> {getValueOrDash(whoisData.WhoisRecord.domain_age)}</p>
                        <p><span className="font-medium">Grace Period:</span> {getValueOrDash(whoisData.WhoisRecord.domain_grace_period)}</p>
                      </CardContent>
                    </Card>

                    {/* Registrar Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="w-5 h-5 text-[#4E4FEB]" />
                          Registrar Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p><span className="font-medium">Registrar:</span> {getValueOrDash(whoisData.WhoisRecord.registrar?.name)}</p>
                        <p><span className="font-medium">IANA ID:</span> {getValueOrDash(whoisData.WhoisRecord.registrar?.ianaId)}</p>
                        <p><span className="font-medium">URL:</span> {getValueOrDash(whoisData.WhoisRecord.registrar?.url)}</p>
                        <p><span className="font-medium">Email:</span> {getValueOrDash(whoisData.WhoisRecord.registrar?.email)}</p>
                        <p><span className="font-medium">Phone:</span> {getValueOrDash(whoisData.WhoisRecord.registrar?.phone)}</p>
                      </CardContent>
                    </Card>

                    {/* Name Servers */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Server className="w-5 h-5 text-[#4E4FEB]" />
                          Name Servers
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {whoisData.WhoisRecord.registryData?.nameServers?.hostNames?.filter(Boolean).map((ns: string, index: number) => (
                            <li key={index} className="text-[#2D5087]">{ns}</li>
                          )) || <li>-</li>}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Administrative Contact */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5 text-[#4E4FEB]" />
                          Administrative Contact
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {whoisData.WhoisRecord.administrativeContact && (
                          Object.keys(whoisData.WhoisRecord.administrativeContact).length > 0 ? (
                            <>
                              <p><span className="font-medium">Organization:</span> {getValueOrDash(whoisData.WhoisRecord.administrativeContact.organization)}</p>
                              <p><span className="font-medium">State/Province:</span> {getValueOrDash(whoisData.WhoisRecord.administrativeContact.state)}</p>
                              <p><span className="font-medium">Country:</span> {getValueOrDash(whoisData.WhoisRecord.administrativeContact.country)}</p>
                              <p><span className="font-medium">Email:</span> {getValueOrDash(whoisData.WhoisRecord.administrativeContact.email)}</p>
                              <p><span className="font-medium">Phone:</span> {getValueOrDash(whoisData.WhoisRecord.administrativeContact.phone)}</p>
                            </>
                          ) : (
                            <p className="text-gray-500">Contact information is private</p>
                          )
                        )}
                      </CardContent>
                    </Card>

                    {/* Technical Contact */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Phone className="w-5 h-5 text-[#4E4FEB]" />
                          Technical Contact
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {whoisData.WhoisRecord.technicalContact && (
                          Object.keys(whoisData.WhoisRecord.technicalContact).length > 0 ? (
                            <>
                              <p><span className="font-medium">Organization:</span> {getValueOrDash(whoisData.WhoisRecord.technicalContact.organization)}</p>
                              <p><span className="font-medium">Email:</span> {getValueOrDash(whoisData.WhoisRecord.technicalContact.email)}</p>
                              <p><span className="font-medium">Phone:</span> {getValueOrDash(whoisData.WhoisRecord.technicalContact.phone)}</p>
                            </>
                          ) : (
                            <p className="text-gray-500">Technical contact information is private</p>
                          )
                        )}
                      </CardContent>
                    </Card>

                    {/* Registrant Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Mail className="w-5 h-5 text-[#4E4FEB]" />
                          Registrant Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        {whoisData.WhoisRecord.registrant && (
                          Object.keys(whoisData.WhoisRecord.registrant).length > 0 ? (
                            <>
                              <p><span className="font-medium">Organization:</span> {getValueOrDash(whoisData.WhoisRecord.registrant.organization)}</p>
                              <p><span className="font-medium">Country:</span> {getValueOrDash(whoisData.WhoisRecord.registrant.country)}</p>
                              <p><span className="font-medium">State/Province:</span> {getValueOrDash(whoisData.WhoisRecord.registrant.state)}</p>
                              <p><span className="font-medium">Email:</span> {getValueOrDash(whoisData.WhoisRecord.registrant.email)}</p>
                            </>
                          ) : (
                            <p className="text-gray-500">Registrant information is private</p>
                          )
                        )}
                      </CardContent>
                    </Card>

                    {/* DNSSEC Information */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lock className="w-5 h-5 text-[#4E4FEB]" />
                          DNSSEC Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p><span className="font-medium">DNSSEC:</span> {getValueOrDash(whoisData.WhoisRecord.dnssec)}</p>
                      </CardContent>
                    </Card>
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
