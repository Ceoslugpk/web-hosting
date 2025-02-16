
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                Contact Us
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                We're here to help. Get in touch with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+1 (555) 123-4567"
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "support@gohost.com"
                },
                {
                  icon: MapPin,
                  title: "Address",
                  info: "123 Hosting Street, Cloud City"
                }
              ].map((contact, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center">
                  <contact.icon className="w-12 h-12 text-[#4E4FEB] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#0E2954] mb-2">{contact.title}</h3>
                  <p className="text-[#2D5087]">{contact.info}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0E2954] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0E2954] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0E2954] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0E2954] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4E4FEB]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#4E4FEB] text-white px-6 py-3 rounded-lg hover:bg-[#3a3bdc] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
