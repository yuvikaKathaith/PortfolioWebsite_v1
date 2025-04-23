import { socialLinks } from "@/utils/socialLinks";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SidebarLeft = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="hidden md:flex fixed bottom-0 z-50 pl-2 flex-col items-center"
      >
        <div className="p-10 -ml-5">
          {socialLinks.map((social) => (
            <Link key={social.id} href={social.url} target="_blank">
              <Image
                src={social.icon}
                alt="social"
                width={23}
                height={23}
                className="mb-7 hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
        <div className="-mt-7 flex border-l-2 border-[#8892b0] h-60 p-10 ml-16"></div>
      </motion.div>
    </>
  );
};

export default SidebarLeft;
