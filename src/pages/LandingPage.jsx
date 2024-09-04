import Main from "../components/LandingPage/Main";
import Features from "../components/LandingPage/Features";
import Testimonials from "../components/LandingPage/Testimonials";
import Highlights from "../components/LandingPage/Highlights";
import Pricing from "../components/LandingPage/Pricing";
import FAQ from "../components/LandingPage/FAQ";
import Footer from "../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen font-[Helvetica] tracking-wide flex flex-col items-center">
      <Main />
      <Features />
      <Testimonials />
      <Highlights />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
