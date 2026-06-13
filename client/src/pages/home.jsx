import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Platforms from "../components/Platforms";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Platforms />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;