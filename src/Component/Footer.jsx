'use client'
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
      className="w-full py-6 flex justify-center items-center">
      <motion.button
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ y: -8 }}
        onClick={scrollToTop}
        className="p-3 text-[#64ffda] rounded-full hover:bg-[#64ffda]/20 hover:rounded-full transition-colors"
      >
        <ChevronUp size={30} />
      </motion.button>
    </motion.footer>
  );
};

export default Footer;
