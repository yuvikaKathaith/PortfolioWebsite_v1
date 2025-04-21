"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <>
      <Element name='work'>
      <section className="py-30 px-10 flex justify-center items-center flex-col">
        <motion.div
          className="flex flex-row w-3/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex items-center">
            <h1 className="text-[#ccd6f6] text-[28px] font-semibold mr-4">
              <span className="mr-2 font-normal font-mono text-2xl text-[#64ffda]">
                03.
              </span>
              Some Things I’ve Built
            </h1>
          </div>
          <div className="flex-grow border-t text-[#233554] mt-5" />
        </motion.div>

        {/* first project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.3 }}
          className="flex flex-row p-15"
        >
          <div className="w-[700px] h-[370px] relative z-10 group">
            <Link
              href="https://bingebuddy-react.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/project1.png"
                alt="project1"
                fill
                className="object-fill cursor-pointer rounded-sm"
              ></Image>
              <div className="rounded-sm bg-[#64ffda]/40 w-[700px] h-[370px] absolute z-1 group-hover:bg-transparent transition duration-100" />
            </Link>
          </div>
          <div className="z-20 -ml-14 -mt-4">
            <div className="text-right p-3 -mr-3">
              <p className="text-[#64ffda] text-[15px] font-mono">
                Featured Project
              </p>
              <Link
                href="https://bingebuddy-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
              >
                BingeBuddy
              </Link>
            </div>
            <div className="w-[500px] h-[240px] text-[#a8b2d1] bg-[#112240] p-6 text-right font-inter text-[15px] rounded-sm">
              <p className="mb-4">
                BingeBuddy is a fun little app to explore movies and TV shows,
                from trending and new releases to upcoming titles, all in one
                place. It’s kind of like a Netflix-inspired space that helps
                decide what to watch next.
              </p>
              <p>
                You can search based on your mood by typing in the genre or vibe
                you’re feeling using AI Search, and it gives you suggestions.
                The search bar also supports multiple languages, so you can
                explore content your way.
              </p>
            </div>
            <div className="text-[#a8b2d1] font-mono">
              <ul className="flex flex-row gap-4 text-sm justify-end pt-5">
                <li>React.js</li>
                <li>Firebase</li>
                <li>Redux Toolkit</li>
                <li>Groq AI API</li>
                <li>TMDB API</li>
              </ul>
            </div>
            <div className="flex justify-end pt-5 flex-row gap-5">
              <Link
                href="https://github.com/yuvikaKathaith/Bingebuddy-React"
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
                href="https://bingebuddy-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/externalLink.svg" alt="live" width={22} height={22} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* second project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.3 }}
          className="flex flex-row p-15"
        >
          <div className="z-20 -mr-18 -mt-4">
            <div className="text-left p-3 -ml-3">
              <p className="text-[#64ffda] text-[15px] font-mono">
                Featured Project
              </p>
              <Link
                href="https://stampick.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
              >
                StamPick
              </Link>
            </div>
            <div className="w-[600px] h-[270px] text-[#a8b2d1] bg-[#112240] pt-5 p-4 text-left font-inter text-[15px] rounded-sm">
              <p className="mb-4">
                StamPick is a digital platform that connects stamp collectors across India, making it easier to buy, sell, and explore rare stamps from anywhere. It features an AI-powered stamp scanner that instantly identifies stamps and provides details like history, rarity, and estimated value. Users can take part in secure online auctions, backed by verified ownership. 
              </p>
              <p>
                The platform also offers an immersive experience through 3D virtual exhibitions and includes educational resources to help both beginners and experienced collectors grow their knowledge. With smooth transactions and a strong focus on authenticity, StamPick creates a trusted and engaging space for the philatelic community. 
              </p>
            </div>
            <div className="text-[#a8b2d1] font-mono">
              <ul className="flex flex-row gap-4 text-sm justify-start pt-5">
                <li>Next.js</li>
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Three.js</li>
                <li>GSAP</li>
              </ul>
            </div>
            <div className="flex justify-start pt-5 flex-row gap-5">
              <Link
                href="#"
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
                href="https://stampick.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/externalLink.svg" alt="live" width={22} height={22} />
              </Link>
            </div>
          </div>
          <div className="w-[720px] h-[370px] relative z-10 group">
            <Link
              href="https://stampick.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/project2.png"
                alt="project2"
                fill
                className="object-fill cursor-pointer rounded-sm"
              ></Image>
              <div className="rounded-sm bg-[#64ffda]/40 w-[720px] h-[370px] absolute z-1 group-hover:bg-transparent transition duration-100" />
            </Link>
          </div>
        </motion.div>

        {/* third project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="flex flex-row p-15"
        >
          <div className="w-[650px] h-[320px] relative z-10 group">
            <Link
              href="https://ems-seven-sepia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/project3.png"
                alt="project3"
                fill
                className="object-fill cursor-pointer rounded-sm"
              ></Image>
              <div className="rounded-sm bg-[#64ffda]/20 w-[650px] h-[320px] absolute z-1 group-hover:bg-transparent transition duration-100" />
            </Link>
          </div>
          <div className="z-20 -ml-18 -mt-4">
            <div className="text-right p-3 -mr-3">
              <p className="text-[#64ffda] text-[15px] font-mono">
                Featured Project
              </p>
              <Link
                href="https://ems-seven-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
              >
                EMS
              </Link>
            </div>
            <div className="w-[500px] h-[210px] text-[#a8b2d1] bg-[#112240] pt-5 p-4 text-right font-inter text-[15px] rounded-sm">
              <p className="mb-4">
                EMS is a compact Employee Management System that lets you manage tasks and track employee progress with ease. It includes an Admin Dashboard where tasks can be created, assigned to team members, and monitored with clear status indicators like new, active, completed, or failed. 
              </p>
              <p>
                It’s designed to give a quick, clear overview of what everyone’s working on and how things are moving.
              </p>
            </div>
            <div className="text-[#a8b2d1] font-mono">
              <ul className="flex flex-row gap-4 text-sm justify-end pt-5">
                <li>React.js</li>
                <li>Context API</li>
                <li>Local Storage</li>
                <li>Tailwind</li>
                <li>Vercel</li>
              </ul>
            </div>
            <div className="flex justify-end pt-5 flex-row gap-5">
              <Link
                href="https://github.com/yuvikaKathaith/EMS"
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
                href="https://ems-seven-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/externalLink.svg" alt="live" width={22} height={22} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      </Element>
    </>
  );
};

export default Projects;
