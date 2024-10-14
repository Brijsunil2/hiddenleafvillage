import "../../styles/HomePage.css";
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;
