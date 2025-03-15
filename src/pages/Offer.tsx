
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfferSection from "@/components/OfferSection";

const Offer = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        <OfferSection />
      </div>
      <Footer />
    </div>
  );
};

export default Offer;
