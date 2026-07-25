import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import ManufacturingCapabilities from "./components/ManufacturingCapabilities";
import GlobalFocus from "./components/GlobalFocus";
import WhyPartner from "./components/WhyPartner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <ManufacturingCapabilities />
      <GlobalFocus />
      <WhyPartner />
      <Contact />
      <Footer />
    </>
  );
}