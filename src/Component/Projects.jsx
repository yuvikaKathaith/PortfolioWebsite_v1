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
            transition={{ delay: 0.3, duration: 0.3 }}
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
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-col md:flex-col lg:flex-row py-10 lg:p-15 px-10 items-center md:items-start"
          >
            <div className="lg:w-[650px] lg:h-[360px] h-[180px] md:h-[370px] sm:w-[550px] [@media(width:1024px)_and_(max-height:850px)]:w-[600px] [@media(width:1024px)_and_(max-height:850px)]:h-[300px] sm:h-[250px] [@media(width:600px)_and_(max-height:1024px)]:h-[250px] w-full relative z-10 group [@media(width:768px)_and_(max-height:1024px)]:w-[600px]">
              <Link href="https://bingebuddy-react.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/project1.png"
                  alt="project1"
                  fill
                  className="md:object-fill cursor-pointer rounded-sm"
                />
                <div className="rounded-sm bg-[#64ffda]/40 w-full h-full absolute z-1 group-hover:bg-transparent transition duration-100" />
              </Link>
            </div>
            <div className="z-20 lg:-ml-44 mt-6 lg:mt-0 md:items-center [@media(width:1024px)_and_(max-height:850px)]:-ml-80 [@media(width:768px)_and_(max-height:1024px)]:ml-20 [@media(width:768px)_and_(max-height:1024px)]:-mt-50">
              <div className="text-right md:text-right p-3 -mr-0 md:-mr-3">
                <p className="text-[#64ffda] text-[12px] lg:text-[16px] font-mono">Featured Project</p>
                <Link
                  href="https://bingebuddy-react.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[20px] md:text-[28px] lg:text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
                >
                  BingeBuddy
                </Link>
              </div>
              <div className="w-full md:w-[500px] text-[#a8b2d1] bg-[#112240] p-4 md:p-6 text-right md:text-right font-inter text-[12px] md:text-[15px] rounded-sm mt-3">
                <p className="mb-4">
                  BingeBuddy is a fun little app to explore movies and TV shows, from trending and new releases to upcoming titles, all in one place. It’s kind of like a Netflix-inspired space that helps decide what to watch next.
                </p>
                <p>
                  You can search based on your mood by typing in the genre or vibe you’re feeling using AI Search, and it gives you suggestions. The search bar also supports multiple languages, so you can explore content your way.
                </p>
              </div>
              <div className="text-[#a8b2d1] font-mono">
                <ul className="flex flex-wrap gap-4 text-[12px] lg:text-[14px] justify-end pt-5">
                  <li>React.js</li>
                  <li>Firebase</li>
                  <li>Redux Toolkit</li>
                  <li>Groq AI API</li>
                  <li>TMDB API</li>
                </ul>
              </div>
              <div className="flex justify-end pt-5 gap-5">
                <Link href="https://github.com/yuvikaKathaith/Bingebuddy-React" target="_blank" rel="noopener noreferrer">
                  <Image src="/github-outline.svg" alt="github" width={22} height={22} />
                </Link>
                <Link href="https://bingebuddy-react.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Image src="/externalLink.svg" alt="live" width={22} height={22} />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Second project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-col lg:flex-row py-10 px-10 md:p-15 items-center md:items-start [@media(width:768px)_and_(max-height:1024px)]:mb-40"
          >
            <div className="z-20 md:-mr-18 lg:-mr-70 mt-6 md:mt-0 order-2 md:order-1 [@media(width:1024px)_and_(max-height:850px)]:-mr-100 [@media(width:1024px)_and_(max-height:850px)]:mt-30 [@media(width:768px)_and_(max-height:1024px)]:mb-7 [@media(width:768px)_and_(max-height:1024px)]:mr-20">
              <div className="text-left p-3 -ml-0 md:-ml-3">
                <p className="text-[#64ffda] text-[12px] font-mono lg:text-[16px]">Featured Project</p>
                <Link
                  href="https://stampick.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[22px] lg:text-[28px] md:text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
                >
                  StamPick
                </Link>
              </div>
              <div className="w-full md:w-[600px] text-[#a8b2d1] bg-[#112240] p-4 md:p-6 text-left font-inter md:text-[15px] text-[12px] rounded-sm mt-3 [@media(width:768px)_and_(max-height:1024px)]:w-[450px]">
                <p className="mb-4">
                  StamPick is a digital platform that connects stamp collectors across India, making it easier to buy, sell, and explore rare stamps from anywhere. It features an AI-powered stamp scanner that instantly identifies stamps and provides details like history, rarity, and estimated value.
                </p>
                <p>
                  The platform also offers 3D virtual exhibitions and educational resources to help both beginners and experienced collectors. With smooth transactions and a strong focus on authenticity, StamPick creates a trusted and engaging space for the philatelic community.
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
                  <Image src="/github-outline.svg" alt="github" width={22} height={22} />
                </Link>
                <Link href="https://stampick.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Image src="/externalLink.svg" alt="live" width={22} height={22} />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[650px] lg:h-[360px] h-[180px] md:w-[700px] md:h-[370px] sm:w-[550px] sm:h-[250px] relative z-10 group order-1 md:order-2 [@media(width:1024px)_and_(max-height:850px)]:w-[600px] [@media(width:1024px)_and_(max-height:850px)]:h-[300px] [@media(width:600px)_and_(max-height:1024px)]:h-[250px] [@media(width:768px)_and_(max-height:1024px)]:w-[500px] [@media(width:768px)_and_(max-height:1024px)]:h-[300px] [@media(width:768px)_and_(max-height:1024px)]:ml-35 [@media(width:768px)_and_(max-height:1024px)]:-mt-120">
              <Link href="https://stampick.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image src="/project2.png" alt="project2" fill className="object-fill cursor-pointer rounded-sm" />
                <div className="rounded-sm bg-[#64ffda]/40 w-full h-full absolute z-1 group-hover:bg-transparent transition duration-100" />
              </Link>
            </div>
          </motion.div>

          {/* Third project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-col lg:flex-row py-10 md:p-15 items-center px-10 md:items-start"
          >
            <div className="w-full lg:w-[650px] lg:h-[360px] h-[180px] md:w-[700px] md:h-[350px] sm:w-[550px] sm:h-[250px] [@media(width:1024px)_and_(max-height:850px)]:w-[600px] [@media(width:1024px)_and_(max-height:850px)]:h-[300px] [@media(width:600px)_and_(max-height:1024px)]:h-[250px] relative z-10 group [@media(width:768px)_and_(max-height:1024px)]:w-[600px]">
              <Link href="https://ems-seven-sepia.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Image src="/project3.png" alt="project3" fill className="object-fill cursor-pointer rounded-sm" />
                <div className="rounded-sm bg-[#64ffda]/20 w-full h-full absolute z-1 group-hover:bg-transparent transition duration-100" />
              </Link>
            </div>
            <div className="z-20 lg:-ml-48 md:-ml-18 mt-6 md:mt-0 [@media(width:1024px)_and_(max-height:850px)]:-ml-80 [@media(width:1024px)_and_(max-height:850px)]:mt-20 [@media(width:768px)_and_(max-height:1024px)]:ml-30 [@media(width:768px)_and_(max-height:1024px)]:-mt-50">
              <div className="text-right p-3 -mr-0 md:-mr-3">
                <p className="text-[rgb(100,255,218)] md:text-sm text-[12px] font-mono lg:text-[14px]">Featured Project</p>
                <Link
                  href="https://ems-seven-sepia.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[22px] md:text-[28px] lg:text-[28px] font-semibold font-inter hover:text-[#64ffda] cursor-pointer"
                >
                  EMS
                </Link>
              </div>
              <div className="w-full md:w-[500px]  text-[#a8b2d1] bg-[#112240] p-4 md:p-6 text-right font-inter text-[12px] rounded-sm mt-3 md:text-[15px]">
                <p className="mb-4">
                  EMS is a compact Employee Management System that lets you manage tasks and track employee progress easily. It includes an Admin Dashboard where tasks can be created, assigned to team members, and monitored with status indicators like new, active, completed, or failed.
                </p>
                <p>It’s designed to give a quick, clear overview of what everyone’s working on and how things are moving.</p>
              </div>
              <div className="text-[#a8b2d1] font-mono">
                <ul className="flex flex-wrap gap-4 md:text-sm justify-end pt-5 text-[12px]">
                  <li>React.js</li>
                  <li>Context API</li>
                  <li>Local Storage</li>
                  <li>Tailwind</li>
                  <li>Vercel</li>
                </ul>
              </div>
              <div className="flex justify-end pt-5 gap-5">
                <Link href="https://github.com/yuvikaKathaith/EMS" target="_blank" rel="noopener noreferrer">
                  <Image src="/github-outline.svg" alt="github" width={22} height={22} />
                </Link>
                <Link href="https://ems-seven-sepia.vercel.app/" target="_blank" rel="noopener noreferrer">
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
