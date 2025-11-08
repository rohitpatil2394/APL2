 import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import Academics from "@/components/Academics";
import Admissions from "@/components/Admissions";
import Placements from "@/components/Placements";
import Research from "@/components/Research";
import CampusLife from "@/components/CampusLife";
import EOffice from "@/components/EOffice";
import Career from "@/components/Career";
import NewsSection from "@/components/NewsSection";
import AdmissionModal from "@/components/AdmissionModal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutUs />
      <Academics />
      <Admissions />
      <Placements />
      <Research />
      <CampusLife />
      <EOffice />
      <Career />
      <NewsSection />
      <AdmissionModal />
      <Footer />
    </div>
  );
};

export default Index;
