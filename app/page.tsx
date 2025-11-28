import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16">
        <Navbar />
        <section id="home" className="pt-24 md:pt-32">
          <Hero />
        </section>

        <section id="skills" className="pt-24">
          <Skills />
        </section>

        <section id="projects" className="pt-24">
          <Projects />
        </section>

        <section id="about" className="pt-24">
          <About />
        </section>

        <section id="contact" className="pt-24">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}
