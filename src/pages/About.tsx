
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Building, Trophy, Target, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#F6F9FD]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#0E2954] mb-6">
                About GoHost
              </h1>
              <p className="text-[#2D5087] max-w-2xl mx-auto mb-8">
                Leading the way in web hosting solutions since 2010. We're committed to providing reliable, secure, and innovative hosting services.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Our Mission</h2>
              <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
                Empowering Your Digital Success
              </h3>
              <p className="text-[#2D5087] max-w-2xl mx-auto">
                We strive to make web hosting accessible, reliable, and hassle-free for businesses of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "50k+", label: "Customers" },
                { number: "99.9%", label: "Uptime" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-[#4E4FEB] mb-2">{stat.number}</div>
                  <div className="text-[#2D5087]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Our Team</h2>
              <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
                Meet the Experts Behind GoHost
              </h3>
              <p className="text-[#2D5087] max-w-2xl mx-auto">
                Our team of dedicated professionals works tirelessly to ensure your success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "CEO & Founder",
                  image: "https://placehold.co/300x300",
                },
                {
                  name: "Sarah Johnson",
                  role: "Technical Director",
                  image: "https://placehold.co/300x300",
                },
                {
                  name: "Michael Chen",
                  role: "Customer Success Manager",
                  image: "https://placehold.co/300x300",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#0E2954] mb-2">{member.name}</h4>
                  <p className="text-[#2D5087]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-[#4E4FEB] text-lg font-bold mb-4">Our Values</h2>
              <h3 className="text-4xl font-bold text-[#0E2954] mb-6">
                What Drives Us
              </h3>
              <p className="text-[#2D5087] max-w-2xl mx-auto">
                Our core values shape everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Customer First",
                  description: "Your success is our priority",
                },
                {
                  icon: Building,
                  title: "Innovation",
                  description: "Always pushing boundaries",
                },
                {
                  icon: Trophy,
                  title: "Excellence",
                  description: "Delivering the best always",
                },
                {
                  icon: Target,
                  title: "Reliability",
                  description: "You can count on us",
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg text-center">
                  <value.icon className="w-12 h-12 text-[#4E4FEB] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-[#0E2954] mb-2">{value.title}</h4>
                  <p className="text-[#2D5087]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
