
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import AboutSection from "@/components/AboutSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <AboutSection />
      <OfferSection />
      <ContactSection />
    </div>
  );
};

export default Index;
