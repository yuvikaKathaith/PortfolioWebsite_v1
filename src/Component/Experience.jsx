"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { experienceData } from "@/utils/experience.js";
import { Element } from "react-scroll";

const Experience = () => {
  const [experience, setExperience] = useState("intern");

  return (
    <>
      <Element name="experience">
        <section className="py-40 px-10 flex justify-center items-center flex-col">
          <motion.div
            className="flex flex-row w-3/5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Header */}
            <div className="flex items-center">
              <h1 className="text-[#ccd6f6] text-[28px] font-semibold mr-4">
                <span className="mr-2 font-normal font-mono text-2xl text-[#64ffda]">
                  02.
                </span>
                Where I've Worked
              </h1>
            </div>
            <div className="flex-grow border-t text-[#233554] mt-5" />
          </motion.div>
          {/* Left Content */}
          <motion.div
            className="gap-10 flex flex-rowp-10 w-3/5 pt-10 text-justify"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            <div className="flex flex-col">
              {experienceData.map((item) => (
                <button
                  key={item.id}
                  className={`w-70 h-12 border-l-2 text-start pl-5 ${
                    experience === item.id
                      ? "w-70 h-12 border-l-2 text-start pl-5 bg-[#64ffda]/4 text-[#64ffda] border-[#64ffda]"
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

            {/* Right - Content */}
            {experienceData.map(
              (item) =>
                experience === item.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.0 }}
                    key={item.id}
                    className="flex flex-col gap-3 text-[#ccd6f6]"
                  >
                    <h1 className="text-2xl font-semibold">
                      {item.title}{" "}
                      <span className="text-[#64ffda]">{item.company}</span>
                    </h1>
                    <p className="text-md text-[#8892b0] font-mono">
                      {item.duration}
                    </p>
                    <ul className="list-none space-y-2 text-[#8892b0] font-mono text-sm">
                      {item.points.map((point, id) => {
                        return (
                          <li key={id}>
                            <span className="text-[#64ffda] mr-2">▹</span>
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )
            )}
          </motion.div>
        </section>
      </Element>
    </>
  );
};

export default Experience;
