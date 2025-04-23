'use client';
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { socialLinks } from "@/utils/socialLinks";
import Link from "next/link";
import Image from "next/image";

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
      className="w-full py-6 px-4 flex flex-col items-center gap-4 md:hidden"
    >
      {/* Social links - shown only on small screens */}
      <div className="flex gap-6 mt-10 mb-5">
        {socialLinks.map((social) => (
          <Link key={social.id} href={social.url} target="_blank">
            <Image
              src={social.icon}
              alt="social"
              width={22}
              height={22}
              className="hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ y: -8 }}
        aria-label="Scroll to top"
        className="p-2 text-[#64ffda] rounded-full hover:bg-[#64ffda]/20 transition-colors"
      >
        <ChevronUp size={24} />
      </motion.button>

      
    </motion.footer>
  );
};

export default Footer;
