
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DomainSearch from "./pages/domains/DomainSearch";
import DomainExtension from "./pages/domains/DomainExtension";
import SharedHosting from "./pages/hosting/SharedHosting";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import WebSecurity from "./pages/WebSecurity";
import Email from "./pages/Email";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Whois from "./pages/Whois";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domains/search" element={<DomainSearch />} />
          <Route path="/domains/:extension" element={<DomainExtension />} />
          <Route path="/hosting/shared" element={<SharedHosting />} />
          <Route path="/website-builder" element={<WebsiteBuilder />} />
          <Route path="/security" element={<WebSecurity />} />
          <Route path="/email" element={<Email />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/whois" element={<Whois />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
