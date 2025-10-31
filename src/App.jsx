import Navbar from './components/Navbar'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contacts'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'


function App() {
  return (
    <>
      <Navbar /> 
      <AnimatedSection animation="fade-up"> <Header /> </AnimatedSection>
      <Projects />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
