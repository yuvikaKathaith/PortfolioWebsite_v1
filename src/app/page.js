"use client";
import About from "./Component/About";
import Experience from "@/app/Component/Experience";
import Hero from "@/app/Component/Hero";
import Navbar from "@/app/Component/Navbar";
import Projects from "@/app/Component/Projects";
import OtherProjects from "@/app/Component/OtherProjects";
import Contact from "@/app/Component/Contact";
import Footer from "@/app/Component/Footer";
import SidebarLeft from "@/app/Component/SidebarLeft";
import SidebarRight from "@/app/Component/SidebarRight";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
      <SidebarLeft />
      <SidebarRight />
    </>
  );
}
