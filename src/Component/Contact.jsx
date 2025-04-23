import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <>
      <Element name="contact">
        <motion.div
          className="flex justify-center items-center flex-col gap-5 p-10 md:p-20 lg:p-40 pt-20 md:pt-30 lg:pt-60"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.0 }}
        >
          <h3 className="font-mono text-[#64ffda] text-[16px] md:text-[18px]">
            04. What's Next?
          </h3>
          <h1 className="font-inter text-[#ccd6f6] text-[32px] md:text-[44px] lg:text-[52px] font-bold text-center">
            Get In Touch
          </h1>
          <p className="text-[#8892b0] w-3/5 md:w-3/4 lg:w-1/2 text-center text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed">
            My inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you! Feel free to mail me
            about any relevant job updates.
          </p>
          <a
            href="https://mail.google.com/mail/?view=cm&to=yuvikakathaith03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5"
          >
            <button className="transition-transform hover:-translate-y-1 duration-300 w-32 md:w-36 lg:w-33 h-12 md:h-14 lg:h-13 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-sm text-xs md:text-sm font-mono hover:bg-[#64ffda]/10 text-[12px] md:text-[14px]">
              Mail Me
            </button>
          </a>
        </motion.div>
      </Element>
    </>
  );
};

export default Contact;