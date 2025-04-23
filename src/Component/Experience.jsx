"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { experienceData } from "@/utils/experience.js";
import { Element } from "react-scroll";

const Experience = () => {
  const [experience, setExperience] = useState("intern");

  return (
    <Element name="experience">
      <section className="py-20 px-6 sm:px-10 flex justify-center items-center flex-col">
        <motion.div
          className="flex flex-col sm:flex-row w-full max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center">
            <h1 className="text-[#ccd6f6] text-2xl sm:text-[28px] font-semibold mr-0 sm:mr-4">
              <span className="mr-2 font-normal font-mono text-xl sm:text-2xl text-[#64ffda]">
                02.
              </span>
              Where I've Worked
            </h1>
          </div>
          <div className="hidden sm:flex flex-grow border-t text-[#233554] mt-5" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="gap-10 flex flex-col sm:flex-row w-full max-w-4xl pt-10 text-justify"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.0 }}
        >
          {/* Left Tabs */}
          <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible gap-2 sm:gap-0">
            {experienceData.map((item) => (
              <button
                key={item.id}
                className={`min-w-fit sm:w-48 h-10 border-l-2 text-start pl-4 py-1 transition-all duration-200 ${
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

          {/* Right Content */}
          {experienceData.map(
            (item) =>
              experience === item.id && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1.0 }}
                  className="flex flex-col gap-3 text-[#ccd6f6]"
                >
                  <h1 className="text-xl sm:text-2xl font-semibold">
                    {item.title}{" "}
                    <span className="text-[#64ffda]">{item.company}</span>
                  </h1>
                  <p className="text-sm sm:text-md text-[#8892b0] font-mono">
                    {item.duration}
                  </p>
                  <ul className="list-none space-y-2 text-[#8892b0] font-mono text-sm sm:text-[15px]">
                    {item.points.map((point, id) => (
                      <li key={id}>
                        <span className="text-[#64ffda] mr-2">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
          )}
        </motion.div>
      </section>
    </Element>
  );
};

export default Experience;
