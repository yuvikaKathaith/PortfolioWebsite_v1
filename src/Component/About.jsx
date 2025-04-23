import Image from "next/image";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <section className="gap-10 font-inter w-full mx-auto px-4 py-10 lg:py-16 text-[16px] flex flex-col md:flex-row items-start justify-center max-w-screen-xl">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center py-8">
            <h2 className="text-[#ccd6f6] text-[24px] font-semibold mr-4">
              <span className="font-normal font-mono text-2xl text-[#64ffda]">
                01.
              </span>{" "}
              About Me
            </h2>
            <div className="flex-grow border-t border-[#233554]" />
          </div>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            Hey! I'm Yuvika, an Electronics and Communication Engineering
            undergrad who enjoys creating things that live on the internet.
          </p>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            I’m a{" "}
            <span className="text-[#64ffda] font-semibold">MERN stack developer</span>{" "}
            passionate about building clean, user-friendly web applications.
          </p>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            I also enjoy problem-solving, particularly in{" "}
            <span className="text-[#64ffda] font-semibold">DSA</span>.
          </p>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            In my free time, you'll find me reading or drawing.
          </p>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            I’m currently looking for a full-time role or internship to grow
            and contribute to a dynamic team.
          </p>

          <p className="text-[#8892b0] mb-4 text-sm md:text-base">
            Technologies I work with:
          </p>

          <ul className="text-[#8892b0] font-mono text-[14px] grid lg:grid-cols-3 grid-cols-2 pt-5">
            {[
              "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js",
              "MongoDB", "Tailwind", "Vercel & Render", "WordPress"
            ].map((tech, index) => (
              <li key={index} className="mb-2">
                <span className="text-[#64ffda]">▹</span> {tech}
              </li>
            ))}
          </ul>

          <p className="text-[#8892b0] mt-6 text-sm md:text-base">
            Other tools and skills:
          </p>

          <ul className="text-[#8892b0] font-mono text-[14px] grid lg:grid-cols-3 grid-cols-2 pt-5">
            {[
              "Git & GitHub", "Postman", "Express.js", "Figma & Canva",
              "HTML5 & CSS3", "Firebase (basic)", "REST APIs", "GSAP",
              "Framer Motion", "Python", "C++", "MySQL"
            ].map((tool, index) => (
              <li key={index} className="mb-2">
                <span className="text-[#64ffda]">▹</span> {tool}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/3 relative group mt-10 md:mt-0"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 1.0 }}
        >
          {/* Frame Border */}
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
            <div className="absolute inset-0 rounded-md bg-[#64ffda]/40 group-hover:bg-transparent transition duration-300" />
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;