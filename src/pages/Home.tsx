
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import SuccessStories from "@/components/SuccessStories";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <JourneySection />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default Home;
