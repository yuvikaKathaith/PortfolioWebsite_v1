"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <>
      <Element name="work">
        <section className="py-10 sm:px-6 md:px-10 flex flex-col items-center lg:py-30">
          {/* Header */}
          <motion.div
            className="flex flex-row md:flex-row w-full px-10 md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-[#ccd6f6] text-[20px] md:text-[27px] lg:text-3xl font-semibold mr-0 md:mr-4">
                <span className="mr-2 font-normal font-mono text-[18px] lg:text-2xl md:text-2xl text-[#64ffda]">
                  03.
                </span>
                Some Things I’ve Built
              </h1>
            </div>
            <div className="flex-grow border-t text-[#233554] mt-4 ml-3 md:mt-5" />
          </motion.div>

          {/* First project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="flex flex-col lg:flex-row py-10 lg:p-15 px-10 items-center lg:items-start gap-6"
          >
            <div className="relative w-full h-[180px] sm:w-[550px] sm:h-[250px] md:w-[700px] md:h-[370px] [@media(width:768px)_and_(height:1024px)]:w-[650px] [@media(width:768px)_and_(height:1024px)]:h-[300px] group">
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
                />
                <div className="absolute inset-0 bg-[#64ffda]/40 group-hover:bg-transparent transition duration-100 rounded-sm z-10" />
              </Link>
            </div>

            <div className="z-20 text-right [@media(width:768px)_and_(height:1024px)]:-ml-10">
              <p className="text-[#64ffda] text-[12px] lg:text-[16px] font-mono">
                Featured Project
              </p>
              <Link
                href="https://bingebuddy-react.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[20px] md:text-[28px] font-semibold hover:text-[#64ffda]"
              >
                BingeBuddy
              </Link>

              <div className="w-full md:w-[500px] bg-[#112240] text-[#a8b2d1] p-4 md:p-6 mt-3 text-[12px] md:text-[15px] rounded-sm">
                <p className="mb-4">
                  BingeBuddy is a fun little app to explore movies and TV shows,
                  from trending and new releases to upcoming titles, all in one
                  place.
                </p>
                <p>
                  Search by mood or genre using AI Search. It supports multiple
                  languages and gives suggestions based on what you're feeling.
                </p>
              </div>

              <ul className="flex flex-wrap gap-4 text-[12px] lg:text-[14px] justify-end pt-5 font-mono text-[#a8b2d1]">
                <li>React.js</li>
                <li>Firebase</li>
                <li>Redux Toolkit</li>
                <li>Groq AI API</li>
                <li>TMDB API</li>
              </ul>

              <div className="flex justify-end pt-5 gap-5">
                <Link
                  href="https://github.com/yuvikaKathaith/Bingebuddy-React"
                  target="_blank"
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
                >
                  <Image
                    src="/externalLink.svg"
                    alt="live"
                    width={22}
                    height={22}
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Second project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="flex flex-col md:flex-col lg:flex-row py-10 px-10 md:p-15 items-center md:items-start"
          >
            <div className="z-20 md:-mr-18 mt-6 md:mt-0 order-2 md:order-1 [@media(width:768px)_and_(height:1024px)]:-mr-80 [@media(width:768px)_and_(height:1024px)]:mt-20 [@media(width:768px)_and_(height:1024px)]:mb-10">
              <div className="text-left p-3 -ml-0 md:-ml-3">
                <p className="text-[#64ffda] text-[12px] font-mono lg:text-[16px]">
                  Featured Project
                </p>
                <Link
                  href="https://stampick.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[22px] lg:text-[28px] md:text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
                >
                  StamPick
                </Link>
              </div>
              <div className="w-full md:w-[600px] text-[#a8b2d1] bg-[#112240] p-4 md:p-6 text-left font-inter md:text-[15px] text-[12px] rounded-sm mt-3">
                <p className="mb-4">
                  StamPick is a digital platform that connects stamp collectors
                  across India, making it easier to buy, sell, and explore rare
                  stamps from anywhere. It features an AI-powered stamp scanner
                  that instantly identifies stamps and provides details like
                  history, rarity, and estimated value.
                </p>
                <p>
                  The platform also offers 3D virtual exhibitions and
                  educational resources to help both beginners and experienced
                  collectors. With smooth transactions and a strong focus on
                  authenticity, StamPick creates a trusted and engaging space
                  for the philatelic community.
                </p>
              </div>
              <div className="text-[#a8b2d1] font-mono">
                <ul className="flex flex-wrap gap-4 text-[12px] justify-start pt-5 lg:text-[14px]">
                  <li>Next.js</li>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Three.js</li>
                  <li>GSAP</li>
                </ul>
              </div>
              <div className="flex justify-start pt-5 gap-5">
                <Link href="#">
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
                  <Image
                    src="/externalLink.svg"
                    alt="live"
                    width={22}
                    height={22}
                  />
                </Link>
              </div>
            </div>
            <div className="w-full h-[180px] md:w-[700px] md:h-[370px] sm:w-[550px] sm:h-[250px] relative z-10 group order-1 md:order-2 [@media(width:768px)_and_(height:1024px)]:w-[600px] [@media(width:768px)_and_(height:1024px)]:h-[300px]">
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
                />
                <div className="rounded-sm bg-[#64ffda]/40 w-full h-full absolute z-1 group-hover:bg-transparent transition duration-100" />
              </Link>
            </div>
          </motion.div>

          {/* Third project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="flex flex-col lg:flex-row py-10 px-10 md:p-15 items-center gap-6"
          >
            <div className="relative w-full h-[180px] sm:w-[550px] sm:h-[250px] md:w-[700px] md:h-[350px] [@media(width:768px)_and_(height:1024px)]:w-[650px] [@media(width:768px)_and_(height:1024px)]:h-[300px] group">
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
                />
                <div className="absolute inset-0 bg-[#64ffda]/20 group-hover:bg-transparent transition duration-100 rounded-sm z-10" />
              </Link>
            </div>

            <div className="z-20 text-right [@media(width:768px)_and_(height:1024px)]:-ml-10">
              <p className="text-[#64ffda] text-[12px] lg:text-[16px] font-mono">
                Featured Project
              </p>
              <Link
                href="https://ems-seven-sepia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-[20px] md:text-[28px] font-semibold hover:text-[#64ffda]"
              >
                EMS
              </Link>

              <div className="w-full md:w-[500px] bg-[#112240] text-[#a8b2d1] p-4 md:p-6 mt-3 text-[12px] md:text-[15px] rounded-sm">
                <p className="mb-4">
                  EMS is a compact Employee Management System that lets you
                  manage tasks and track employee progress easily. It includes
                  an Admin Dashboard to create and assign tasks.
                </p>
                <p>
                  Status updates like new, active, completed, or failed help
                  keep things organized and transparent.
                </p>
              </div>

              <ul className="flex flex-wrap gap-4 text-[12px] lg:text-[14px] justify-end pt-5 font-mono text-[#a8b2d1]">
                <li>React.js</li>
                <li>Context API</li>
                <li>Local Storage</li>
                <li>Tailwind</li>
                <li>Vercel</li>
              </ul>

              <div className="flex justify-end pt-5 gap-5">
                <Link
                  href="https://github.com/yuvikaKathaith/EMS"
                  target="_blank"
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
                >
                  <Image
                    src="/externalLink.svg"
                    alt="live"
                    width={22}
                    height={22}
                  />
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
