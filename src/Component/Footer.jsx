'use client';
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="w-full py-4 sm:py-6 px-4 sm:px-6 flex justify-center items-center"
    >
      <motion.button
        onClick={scrollToTop}
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ y: -8 }}
        aria-label="Scroll to top"
        className="p-2 sm:p-3 text-[#64ffda] rounded-full hover:bg-[#64ffda]/20 transition-colors"
      >
        <ChevronUp size={24} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;