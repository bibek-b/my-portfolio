"use client";

import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionStore } from "@/stores/activeSectionsStore";

export default function HomePage() {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.6 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.6 });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.6,
  });
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.6,
  });

  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection
  );
  useEffect(() => {
   const timeout = setTimeout(() => {
     if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
   }, 100);
   return () => clearTimeout(timeout);
  }, [homeInView, aboutInView, projectsInView, contactInView]);
  return (
    <>
      <section id="home" ref={homeRef} className="min-h-screen">
        <Hero />
      </section>
      <section id="about" ref={aboutRef} className="min-h-screen">
        <About />
      </section>
      <br />
      <br />
      <br />
      <section id="projects" ref={projectsRef} className="min-h-screen">
        <Projects />
      </section>
      <br />
      <br />
      <br />
      <section id="contact" ref={contactRef} className="min-h-screen">
        <Contact />
      </section>
    </>
  );
}
