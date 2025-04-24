import Image from "next/image";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <section className="gap-10 lg:gap-20 font-inter md:px-10 [@media(width:1024px)_and_(max-height:850px)]:px-30 lg:flex w-full mx-auto px-6 sm:px-8 py-10 lg:py-20 text-[16px] flex flex-col md:flex-col lg:flex-row items-start md:items-center justify-center max-w-screen-lg [@media(width:600px)_and_(max-height:1024px)]:px-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex items-center py-8">
            <h2 className="text-[#ccd6f6] text-[20px] lg:text-3xl md:text-[24px] font-semibold mr-4">
              <span className="font-normal font-mono text-lg lg:text-2xl md:text-2xl text-[#64ffda]">
                01.
              </span>{" "}
              About Me
            </h2>
            <div className="flex-grow border-t border-[#233554]" />
          </div>

          <p className="text-[#8892b0] mb-4 text-[14px] md:text-base">
            Hey! I'm Yuvika, an Electronics and Communication Engineering
            undergrad who enjoys creating things that live on the internet.
            I’m a{" "}
            <span className="text-[#64ffda] font-semibold">
              MERN stack developer
            </span>{" "}
            passionate about building clean, user-friendly web applications.
            I also enjoy problem-solving, particularly in{" "}
            <span className="text-[#64ffda] font-semibold">DSA</span>.
            In my free time, you'll find me reading or drawing.
          </p>
          <p className="text-[#8892b0] mb-4 text-[14px] md:text-base">
            I’m currently looking for a full-time role or internship to grow and
            contribute to a dynamic team.
          </p>

          <p className="text-[#8892b0] text-[14px] md:text-base">
            Technologies I work with:
          </p>

          <ul className="text-[#8892b0] font-mono text-[14px] grid lg:grid-cols-3 grid-cols-2 pt-5 lg:text-[14px]">
            {[
              "JavaScript (ES6+)",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
              "Tailwind",
              "Vercel & Render",
              "WordPress",
            ].map((tech, index) => (
              <li key={index} className="mb-2">
                <span className="text-[#64ffda]">▹</span> {tech}
              </li>
            ))}
          </ul>

          <p className="text-[#8892b0] text-[14px] md:text-base mt-2">
            Other tools and skills:
          </p>

          <ul className="text-[#8892b0] font-mono text-[14px] grid lg:grid-cols-3 grid-cols-2 pt-5 lg:text-[14px]">
            {[
              "Git & GitHub",
              "Postman",
              "Express.js",
              "Figma & Canva",
              "HTML5 & CSS3",
              "Firebase (basic)",
              "REST APIs",
              "GSAP",
              "Framer Motion",
              "Python",
              "C++",
              "MySQL",
            ].map((tool, index) => (
              <li key={index} className="mb-2">
                <span className="text-[#64ffda]">▹</span> {tool}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full max-w-[300px] relative group mt-10 md:mt-0 flex justify-center [@media(width:600px)_and_(max-height:1024px)]:mx-auto mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 1.0 }}
        >
          {/* Frame Border */}
          <div className="absolute top-4 left-8 sm:left-4 rounded-md border-2 border-[#64ffda] transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1 z-10 w-[200px] h-[204px] sm:w-[250px] sm:h-[254px] md:w-[300px] md:h-[304px] [@media(width:600px)_and_(max-height:1024px)]:group-hover:-translate-x-1 [@media(width:600px)_and_(max-height:1024px)]:group-hover:-translate-y-1" />

          {/* Image Container */}
          <div className="relative z-20 rounded-md transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 [@media(width:768px)_and_(max-height:1024px)]:group-hover:translate-x-1 [@media(width:600px)_and_(max-height:1024px)]:group-hover:-translate-y-1 w-[200px] h-[204px] sm:w-[250px] sm:h-[254px] md:w-[300px] md:h-[304px]">
            <Image
              src="/me.png"
              alt="me"
              width={300}
              height={300}
              className="object-cover rounded-md w-full h-full"
            />
            <div className="absolute inset-0 rounded-md bg-[#64ffda]/40 group-hover:bg-transparent transition duration-300" />
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default About;
