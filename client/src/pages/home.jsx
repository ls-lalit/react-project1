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
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Stats />
      <Services />
      {/* <Platforms />
      <WhyChoose /> */}
      <Process />
      <CaseStudy />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
