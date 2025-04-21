import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-col gap-5  p-40 pt-60"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.0 }}
      >
        <h3 className="font-mono text-[#64ffda] text-[18px]">
          04. What's Next?
        </h3>
        <h1 className="font-inter text-[#ccd6f6] text-[52px] font-bold">
          Get In Touch
        </h1>
        <p className="text-[#8892b0] w-1/2 text-center text-[17px]">
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you! Feel free to mail me
          about any relevant job updates.
        </p>
        <a
          href="mailto:@yuvikakathaith03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-33 h-13 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-sm text-sm font-mono hover:bg-[#64ffda]/10 text-[14px] mt-3">
            Mail Me
          </button>
        </a>
      </motion.div>
    </>
  );
};

export default Contact;
