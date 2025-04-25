import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-6 [@media(width:600px)_and_(max-height:1024px)]:px-10 [@media(width:1024px)_and_(max-height:850px)]:px-35 md:px-10 bg-[#0a192f] text-white [@media(width:768px)_and_(max-height:1024px)]:px-20 lg:px-60">
      <div className="flex flex-col lg:flex-row items-start justify-start max-w-6xl w-full mx-auto py-24">
        <div className="w-full lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#64ffda] text-base md:text-lg lg:text-md font-mono"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 1.0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-[#ccd6f6] mt-2 leading-tight"
          >
            Yuvika Kathaith.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1.5 }}
            className="text-4xl sm:text-4xl lg:text-[68px] md:text-5xl font-bold text-[#8892b0] mt-2 leading-tight"
          >
            I build things for the web.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.0, duration: 2.0 }}
            className="text-[#8892b0] mt-6 text-[15px] lg:text-[17px] md:text-base max-w-2xl leading-relaxed"
          >
            I’m a pre-final year Electronics and Communication Engineering student,
            focused on building clean and user-friendly web experiences. I enjoy web
            development and solving DSA problems to sharpen my logic.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.3, duration: 1.5 }}
          >
            <Link to="about" smooth={true} duration={500}>
              <span className="text-md font-semibold lg:text-lg text-[#64ffda] inline-flex relative cursor-pointer h-7 group overflow-x-hidden mt-4">
                Learn more.
                <span className="absolute w-full h-[1px] bg-[#64ffda] left-0 bottom-0 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </Link>
          </motion.p>

          <div className="mt-10">
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.5, duration: 1.5 }}
                className="text-sm md:text-base border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-sm hover:bg-[#64ffda22] transition-transform hover:-translate-y-1 duration-300 font-mono"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
