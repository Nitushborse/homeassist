import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import FooterCTA from "../components/FooterCTA";
import Navbar from "../components/Navbar";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="pt-20"></div>
      <Hero />
      <HowItWorks />
      <Services />
      <FooterCTA />
    </div>
  );
}
