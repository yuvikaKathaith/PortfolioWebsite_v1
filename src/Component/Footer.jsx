"use client";
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
      className="w-full pb-5 px-4 flex flex-col gap-4 items-center 
        [@media(width:768px)_and_(height:1024px)]:flex 
        [@media(width:768px)_and_(height:1024px)]:items-center 
        [@media(width:768px)_and_(height:1024px)]:justify-center"
    >
      {/* Social links */}
      <div className="flex gap-6 mt-10 mb-5 lg:hidden">
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

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ y: -8 }}
        aria-label="Scroll to top"
        className="p-4 text-[#64ffda] rounded-full hover:bg-[#64ffda]/20 transition-colors"
      >
        <ChevronUp size={26} />
      </motion.button>

      <div className='flex items-center font-mono text text-[11px]'>
        <p className='text-[#b4b3b7]'>Design Inspiration @Brittany Chiang</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
