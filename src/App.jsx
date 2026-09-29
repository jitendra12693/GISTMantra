import useReveal from "./hooks/useReveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Advantages from "./components/Advantages";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Solutions />
        <Industries />
        <Advantages />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
