import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <motion.div
        className="flex justify-center items-center flex-col gap-5 px-6 py-20 sm:py-28 md:py-32 lg:py-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.0 }}
      >
        <h3 className="font-mono text-[#64ffda] text-[16px] sm:text-[18px]">
          04. What's Next?
        </h3>
        <h1 className="font-inter text-[#ccd6f6] text-[36px] sm:text-[44px] md:text-[52px] font-bold text-center">
          Get In Touch
        </h1>
        <p className="text-[#8892b0] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-center text-[15px] sm:text-[16px] md:text-[17px]">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you! Feel free to mail me
          about any relevant job updates.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=yuvikakathaith03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="transition-transform hover:-translate-y-1 duration-300 px-6 py-3 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-sm text-sm font-mono hover:bg-[#64ffda]/10 text-[14px] mt-3">
            Mail Me
          </button>
        </a>
      </motion.div>
    </Element>
  );
};

export default Contact;
