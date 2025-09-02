import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Services from "./Components/Services";

export default function App() {
  return (
    <div className="relative">
      <Navbar />

      {/* Sections with IDs for smooth scrolling */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

 <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}
