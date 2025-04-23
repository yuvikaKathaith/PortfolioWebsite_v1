import Link from "next/link";
import { motion } from "framer-motion";

const SidebarRight = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="hidden md:flex max-w-40 right-0 bottom-0 fixed flex-col items-end z-50 gap-50"
      >
        <div className="rotate-90 cursor-pointer text-lg max-w-28 transition-transform hover:-translate-y-2 duration-300">
          <a href="https://mail.google.com/mail/?view=cm&to=yuvikakathaith03@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="text-[#8892b0] font-mono hover:text-[#6cffda]">
              yuvikakathaith03@gmail.com
            </div>
          </a>
        </div>
        <div className="border-l-2 border-[#8892b0] h-36 p-7"></div>
      </motion.div>
    </>
  );
};

export default SidebarRight;
