import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import TrustedLogos from "../components/TrustedLogos";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import CaseStudy from "../components/CaseStudy";
import Services from "../components/Services";
{/*import Platforms from "../components/Platforms";
import WhyChoose from "../components/WhyChoose"; */}
import Process from "../components/Process";
import Footer from "../components/Footer";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("home-no-scroll");
    return () => {
      document.body.classList.remove("home-no-scroll");
    };
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  useEffect(() => {
    document.documentElement.classList.add("no-scroll-page");
    document.body.classList.add("no-scroll-page");
    return () => {
      document.documentElement.classList.remove("no-scroll-page");
      document.body.classList.remove("no-scroll-page");
    };
  }, []);
  return (
    <>
      <div className="snap-container">
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section">
          <TrustedLogos />
          <Stats />
        </div>
        <div className="snap-section">
          <Services />
        </div>
        {/* <Platforms />
        <WhyChoose /> */}
        <div className="snap-section">
          <Process />
        </div>
        <div className="snap-section">
          <CaseStudy />
        </div>
        <div className="snap-section">
          <CTA />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
