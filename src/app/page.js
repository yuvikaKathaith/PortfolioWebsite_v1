"use client";
import About from "../Component/About";
import Experience from "@/Component/Experience";
import Hero from "@/Component/Hero";
import Navbar from "@/Component/Navbar";
import Projects from "@/Component/Projects";
import OtherProjects from "@/Component/OtherProjects";
import Contact from "@/Component/Contact";
import Footer from "@/Component/Footer";
import SidebarLeft from "@/Component/SidebarLeft";
import SidebarRight from "@/Component/SidebarRight";
import Head from "next/head";

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
