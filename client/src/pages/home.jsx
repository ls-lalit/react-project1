import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import TrustedLogos from "../components/TrustedLogos";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
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
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const mql = window.matchMedia("(max-width: 768px)");
    let pendingReset = false;

    const applyScrollLock = (isMobile) => {
      if (isMobile) {
        document.documentElement.classList.remove("no-scroll-page");
        document.body.classList.remove("no-scroll-page");
        pendingReset = true;
      } else {
        document.documentElement.classList.add("no-scroll-page");
        document.body.classList.add("no-scroll-page");
      }
    };

    applyScrollLock(mql.matches);

    const handleChange = (e) => applyScrollLock(e.matches);
    mql.addEventListener("change", handleChange);

    const resizeObserver = new ResizeObserver(() => {
      if (pendingReset && !mql.matches) {
        window.scrollTo(0, 0);
        container.scrollTop = 0;
        pendingReset = false;
      }
    });
    resizeObserver.observe(container);

    return () => {
      mql.removeEventListener("change", handleChange);
      resizeObserver.disconnect();
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
        <div className="snap-section snap-section-center">
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
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
