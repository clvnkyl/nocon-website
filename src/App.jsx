import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'
import { useEffect } from "react";


function App() {

   useEffect(() => {

    const sections = document.querySelectorAll("section[data-title]");

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const title = entry.target.dataset.title;
              document.title = `${title} - Portfolio`;
            }
          });
        },
        { threshold: 0.5 } // Adjust sensitivity (0.5 = half visible)
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();

   }, []);

  return (
    <>
      <Navbar /> 

      <section id="home" data-title="Home">
        <AnimatedSection animation="fade-up">
          <Header />
        </AnimatedSection>
      </section>

      <section id="projects" data-title="Projects">
        <Projects />
      </section>

      <section id="certificates" data-title="Certificates">
        <Certificates />
      </section>

      <section id="skills" data-title="Skills">
        <Skills />
      </section>

      <section id="contact" data-title="Contacts">
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App
