// app/page.js
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Certificates from "./Components/Certificates"
import ContactForm from "./Components/ContactForm"
import Footer from "./Components/Footer"
import Projects from "./Components/Projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-purple-900/40 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Explore some of my recent work and creations
          </p>
          <Projects/>
        </div>
      </section>
      <About />
      <Certificates />
      <ContactForm />
      <Footer />
    </>
  )
}