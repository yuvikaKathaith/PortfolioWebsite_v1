import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="gap-10 font-inter w-5xl mx-auto px-6 py-16 text-[16px] flex flex-col md:flex-row items-start justify-center-safe"
    >
      {/* Text */}
      <motion.div
        className="w-3/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="flex items-center py-10">
          <h2 className="text-[#ccd6f6] text-[28px] font-semibold mr-4">
            <span className="font-normal font-mono text-2xl text-[#64ffda]">01.</span>{" "}
            About Me
          </h2>
          <div className="flex-grow border-t border-[#233554]"></div>
        </div>
        <p className="text-[#8892b0] mb-4">
          Hey! My name is Yuvika, Electronics and Communication Engineering
          undergrad, who happens to be an ambivert and enjoy creating things
          that live on the internet.
        </p>
        <p className="text-[#8892b0] mb-4">
          I’m a{" "}
          <span className="text-[#64ffda] font-semibold">
            MERN stack developer
          </span>{" "}
          passionate about building clean and user-friendly web applications. I
          love working with modern technologies like React, Next.js, Node.js. I
          also enjoy problem solving, especially working with{" "}
          <span className="text-[#64ffda] font-semibold">DSA</span>. There’s
          something super satisfying about breaking down a problem and figuring
          out the most efficient way to solve it.
        </p>
        <p className="text-[#8892b0] mb-4">
          Apart from this, you’ll often find me reading or drawing in my free
          time.
        </p>
        <p className="text-[#8892b0] mb-4">
          Right now, I'm looking for a full-time role or internship where I can
          grow and contribute to a dynamic team.
        </p>
        <p className="text-[#8892b0]">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="text-[#8892b0] font-mono text-[14px] grid grid-cols-3 pt-5">
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> JavaScript (ES6+)
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> TypeScript
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> React
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Next.js
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Node.js
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> MongoDB
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Tailwind
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Vercel & Render
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> WordPress
          </li>
        </ul>
        <p className="text-[#8892b0] mt-6">
          I’ve also picked up a few other tools and skills along the way:
        </p>
        <ul className="text-[#8892b0] font-mono text-[14px] grid grid-cols-3 pt-3"> 
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Git & GitHub
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Postman
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Express.js
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Figma & Canva
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> HTML5 & CSS3
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Firebase (basic)
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> REST APIs
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> GSAP
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Framer Motion
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Python
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> C++
          </li>
          <li className="mb-2">
            <span className="text-[#64ffda]">▹</span> Mysql
          </li>
        </ul>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-1/3 relative group mt-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Outer Frame Border that shifts on hover */}
        <div className="absolute inset-0 top-4 left-4 rounded-md border-2 border-[#64ffda] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 z-10 w-[300px] h-[300px]" />

        {/* Image Container */}
        <div className="relative z-20 rounded-md transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
          <Image
            src="/me.png"
            alt="me"
            width={300}
            height={300}
            className="object-cover rounded-md"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 rounded-md bg-[#64ffda]/40 group-hover:bg-transparent transition duration-300 h-[304px] w-[300px]" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
