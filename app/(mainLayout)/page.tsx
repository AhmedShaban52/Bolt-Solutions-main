import Hero from "../../components/Hero";
import About from "../../components/About";
import Team from "../../components/Team";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <> 
      <Hero />
      <About />
      <Team/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}
