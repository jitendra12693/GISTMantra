import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GlobalFocus from "./components/GlobalFocus";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import ManufacturingCapabilities from "./components/ManufacturingCapabilities";
import BrandStatement from "./components/BrandStatement";
import WhyPartner from "./components/WhyPartner";
import HowWeWork from "./components/HowWeWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GlobalFocus />
      <About />
      <Capabilities />
      <ManufacturingCapabilities />
      <BrandStatement />
      <WhyPartner />
      <HowWeWork />
      <Contact />
      <Footer />
    </>
  );
}