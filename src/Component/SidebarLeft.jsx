import { socialLinks } from "@/utils/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SidebarLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 2.8, duration: 0.5 }}
      className="fixed bottom-0 left-0 z-50 flex flex-col items-center"
    >
      <div className="flex flex-col items-center py-4 px-2 sm:px-4">
        {socialLinks.map((social) => (
          <Link key={social.id} href={social.url} target="_blank">
            <Image
              src={social.icon}
              alt="social"
              width={23}
              height={23}
              className="mb-4 sm:mb-5 hover:-translate-y-1 transition-transform duration-300"
            />
          </Link>
        ))}
      </div>
      {/* vertical line */}
      <div className="w-px h-20 sm:h-32 md:h-60 bg-[#8892b0]" />
    </motion.div>
  );
};

export default SidebarLeft;
