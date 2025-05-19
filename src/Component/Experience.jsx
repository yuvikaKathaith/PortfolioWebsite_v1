"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { experienceData } from "@/utils/experience.js";
import { Element } from "react-scroll";
import Link from "next/link"

const Experience = () => {
  const [experience, setExperience] = useState("intern");

  return (
    <>
      <Element name="experience">
        <section className="py-10 px-10 lg:py-30 md:px-10 flex justify-center items-center flex-col">
          <motion.div
            className="flex flex-row sm:flex-row w-full md:w-4/5 lg:w-3/5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="flex items-center sm:mb-0">
              <h1 className="text-[#ccd6f6] text-[20px] md:text-[27px] lg:text-3xl font-semibold mr-4">
                <span className="mr-2 font-normal font-mono text-[18px] lg:text-2xl md:text-2xl text-[#64ffda]">
                  02.
                </span>
                Where I've Worked
              </h1>
            </div>
            <div className="flex-grow border-t border-[#233554] mt-4 sm:mt-5" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col md:flex-row gap-6 md:gap-15 lg:gap-20 w-full md:w-4/5 lg:w-3/5 pt-10 md:text-left lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            {/* Slider (Tabs) */}
            <div className="flex md:flex-col md:min-w-[200px] overflow-x-auto md:overflow-visible gap-2 md:gap-0 scrollbar-thin scrollbar-thumb-[#64ffda]/50 scrollbar-track-[#233554]/20 pb-2 md:pb-0">
              {experienceData.map((item) => (
                <button
                  key={item.id}
                  className={`flex-shrink-0 px-4 py-3 text-sm md:text-base border-l-2 text-start whitespace-nowrap ${
                    experience === item.id
                      ? "bg-[#64ffda]/10 text-[#64ffda] border-[#64ffda]"
                      : "hover:bg-[#64ffda]/5 hover:text-[#64ffda] text-[#8892b0] border-[#233554]"
                  }`}
                  onClick={() => {
                    setExperience(item.id);
                  }}
                >
                  {item.button}
                </button>
              ))}
            </div>

            {/* Right Side - Details */}
            <div className="flex-grow">
              {experienceData.map(
                (item) =>
                  experience === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      key={item.id}
                      className="flex flex-col gap-3 text-[#ccd6f6]"
                    >
                      <h1 className="text-xl md:text-2xl font-semibold">
                        {item.title}{" "}
                        <span className="text-[#64ffda]">{item.company}</span>
                      </h1>
                      <p className="text-sm md:text-md text-[#8892b0] font-mono">
                        {item.duration}
                      </p>
                      <ul className="list-none space-y-2 text-[#8892b0] font-inter text-sm">
                        {item.points.map((point, id) => (
                          <li key={id}>
                            <span className="text-[#64ffda] mr-2">▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      {item.certificateUrl &&
                        item.certificateUrl.length > 0 && (
                          <div className="mt-4 space-y-1">
                            <h3 className="text-[#ccd6f6] text-md font-semibold">
                              Certificates:
                            </h3>
                            <ul className="pl-5 list-none text-[#64ffda] text-md">
                              {item.certificateUrl.map((cert, idx) => (
                                <li key={idx}>
                                  <Link
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#52e0c4]"
                                  >
                                    ▹ {cert.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </motion.div>
                  )
              )}
            </div>
          </motion.div>
        </section>
      </Element>
    </>
  );
};

export default Experience;
