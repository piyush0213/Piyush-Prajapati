import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <InteractiveTerminal />
      <Services />
      <Projects />
      <TechStack />
      <Certifications />
      <Achievements />
      <Footer />
    </>
  );
}
