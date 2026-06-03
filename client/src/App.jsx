import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Blog from "./components/Blog";
import Platforms from './components/Platforms';
import Clients from './components/Clients';
import WhyChoose from './components/WhyChoose';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Blog />
      <Platforms />
      <Clients />
      <WhyChoose />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;