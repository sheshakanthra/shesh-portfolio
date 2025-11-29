import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Background from "../components/Background";
import BentoGrid from "../components/BentoGrid";
import Divider from "../components/Divider";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16">
        <Navbar />

        {/* HOME SECTION */}
        <section id="home" className="pt-10 md:pt-16 pb-6">
          <Hero />
        </section>

        {/* BENTO GRID WIDGETS */}
        <BentoGrid />

        {/* ⬇️ NEW DIVIDER ADDED HERE */}
        <Divider />

        {/* SKILLS SECTION */}
        <section id="skills" className="pt-10 pb-10">
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="pt-8">
          <Projects />
        </section>

        {/* ABOUT SECTION (optional) */}
        <section id="about" className="pt-12">
          <About />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="pt-12">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  );
}
