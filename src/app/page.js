'use client'
import About from "./Component/About";
import Experience from "./Component/Experience";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import { motion } from "framer-motion"
import Projects from "./Component/Projects";
import OtherProjects from "./Component/OtherProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
    </>
  );

}
