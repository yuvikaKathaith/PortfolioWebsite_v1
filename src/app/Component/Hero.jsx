import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex items-center justify-center px-8 bg-[#0a192f] text-white">
      <div className="flex justify-between">
      </div>
      <div className="px-55 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-[#64ffda] text-lg font-mono"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 1.0 }}
          className="text-7xl font-bold text-[#ccd6f6] mt-2"
        >
          Yuvika Kathaith.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="text-7xl font-bold text-[#8892b0] mt-2"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 2.0 }}
          className="text-[#8892b0] mt-6 text-base w-3/5 py-3"
        >
          I’m a pre-final year Electronics and Communication Engineering
          student, focused on building clean and user-friendly web experiences.
          Passionate about web development and always eager to learn new
          technologies. I also enjoy solving DSA problems and improving my
          logic.
        </motion.p>
        <motion.a href=""
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.0, duration: 2.0 }}
        >
          <span className="font-inter font-semibold text-[#64ffda] inline-flex relative cursor-pointer h-7 group overflow-x-hidden">
            Learn more.
            <span className="absolute w-full h-[1px] bg-[#64ffda] left-0 bottom-0 translate-x-[-110%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </motion.a>

        <div className="mt-10">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.0, duration: 2.0 }}
            href="mailto:yuvikakathaith03@email.com"
            className="inline-block border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded-sm hover:bg-[#64ffda22] transition duration-300 font-mono"
          >
            Get In Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
