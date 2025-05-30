"use client";
import { projectsData } from "@/utils/otherProjects.js";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Navbar from "@/Component/Navbar";
import SidebarLeft from "@/Component/SidebarLeft";
import SidebarRight from "@/Component/SidebarRight";

const ArchivePage = () => {
  return (
    <div className="bg-[#0a192f] min-h-screen overflow-x-hidden">
      <Navbar />
      <SidebarLeft />
      <SidebarRight />

      <div className="text-[#ccd6f6] font-inter px-4 sm:px-6 md:px-10 max-w-[1000px] mx-auto pb-1 lg:px-25">
        {/* Heading */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2"
          >
            Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-[#6cffda] font-mono text-sm sm:text-md"
          >
            A big list of things I’ve worked on
          </motion.p>
        </div>

        {/* Table Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="hidden sm:grid grid-cols-6 gap-3 text-[#8892b0] font-mono font-semibold border-b border-[#8892b0] pb-4 mb-4 text-xs sm:text-sm"
        >
          <span>Year</span>
          <span className="col-span-2">Title</span>
          <span>Built with</span>
          <span>Link</span>
          <span>Github</span>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 sm:grid-cols-6 gap-y-2 sm:gap-3 items-center border-b border-[#1c2b3a] py-4 text-sm"
            >
              <span className="text-[#64ffda] font-mono text-[16px] sm:text-[19px]">{project.year}</span>

              <span className="sm:col-span-2 font-space text-[15px] hover:text-[#6cffda] cursor-pointer">
                {project.title}
              </span>

              <span className="text-[#8892b0] text-[14px]">
                {Array.isArray(project.techs) ? project.techs.join(" · ") : project.techs || "—"}
              </span>

              <span>
                <Link href={project.live} target="_blank">
                  <ExternalLink className="w-5 h-5 text-[#8892b0] hover:text-[#6cffda] transition-all" />
                </Link>
              </span>

              <span>
                <Link href={project.github} target="_blank">
                  <Image
                    src="/github-outline.svg"
                    width={22}
                    height={22}
                    alt="github"
                    className="text-[#8892b0] hover:text-[#6cffda] transition-all"
                  />
                </Link>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ArchivePage;
