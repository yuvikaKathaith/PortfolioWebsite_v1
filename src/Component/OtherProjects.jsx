"use client";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/utils/otherProjects.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const OtherProjects = () => {
  const router = useRouter();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects
    ? projectsData
    : projectsData.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* Heading */}
      <motion.div
        className="p-10 flex flex-col justify-center items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.h1 className="text-[#ccd6f6] text-[20px] md:text-2xl lg:text-3xl font-semibold font-inter">
          Other Noteworthy Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true }}
          className="overflow-x-hidden"
        >
          <div
            onClick={() => router.push("/archive")}
            className="relative text-[#64ffda] font-mono cursor-pointer group"
          >
            view the archive
            <span className="absolute w-full h-[1px] bg-[#64ffda] left-0 bottom-0 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [@media(width:1024px)_and_(max-height:850px)]:grid-cols-2 gap-4 mx-auto md:p-0 p-10 [@media(width:768px)_and_(max-height:1024px)]:group-hover:translate-x-1 [@media(width:768px)_and_(max-height:1024px)]:grid-cols-2"
      >
        {projectsToShow.map((project, index) => (
          <motion.div
            key={project?.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: showAllProjects ? 0.1 * index : 0.2 * index,
              duration: 0.3,
            }}
            viewport={{ once: true }}
            onClick={() => window.open(project?.live, "_blank")}
          >
            <div className="bg-[#112240] rounded-sm p-7 flex flex-col text-[#ccd6f6] hover:-translate-y-2 transition-transform duration-300 md:max-w-[323px] md:h-[330px] cursor-pointer [@media(width:768px)_and_(max-height:1024px)]:w-[280px] [@media(width:768px)_and_(max-height:1024px)]:h-[400px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <Image src="/folder.svg" width={45} height={45} alt="folder" />
                <div className="flex flex-row gap-3">
                  <Link
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/github-outline.svg"
                      alt="github"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <Link
                    href={project?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/externalLink.svg"
                      alt="live project"
                      width={22}
                      height={22}
                    />
                  </Link>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-mono mb-2 hover:text-[#64ffda]">
                {project?.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] text-[#8892b0] mb-5 font-inter">
                {project?.description}
              </p>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-3 text-[13px] font-mono text-[#8892b0]">
                {project.techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Show More/Less Button */}
      <div className="flex justify-center items-center p-10">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="w-33 h-13 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-sm text-sm font-mono hover:bg-[#64ffda]/10"
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "Show Less" : "Show More"}
        </motion.button>
      </div>
    </div>
  );
};

export default OtherProjects;
