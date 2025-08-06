import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Languages from "./components/languages/Languages";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="bg-[#0d182e]">
    <Hero />
    <Skills />
    <Experience />
    <Languages />
    <Projects />
    <Contact />
    <Footer />
    </main>
  )
}