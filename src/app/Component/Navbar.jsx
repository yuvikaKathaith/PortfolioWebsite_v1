import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const handleLogoClick = () => {
    window.open('https://github.com/yuvikaKathaith/PortfolioWebsite_v1', '_blank')
  }
  
  return (
    <>
      <nav className="flex justify-between font-mono cursor-pointer sticky top-0 h-22 bg-[#0a192f]/70 backdrop-blur-md z-50">
        {/* Image */}
        <motion.div
          onClick={handleLogoClick}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="p-7 ml-5"
        >
          <Image src="/logo.png" alt="logo" height={43} width={43} />
        </motion.div>

        {/* List */}
        <div className="p-10">
          <ul className="flex flex-row text-[#ccd6f6] text-[14px] gap-8">
            <motion.div
              initial={{ opacity: 0, y:-20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay:0.1, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <li>
                <span className="text-[#64ffda]">01.</span> About
              </li>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <li>
                <span className="text-[#64ffda]">02.</span> Experience
              </li>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <li>
                <span className="text-[#64ffda]">03.</span> Work
              </li>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <li>
                <span className="text-[#64ffda]">04.</span> Contact
              </li>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.3 }}
            >
              <button className="border w-20 h-10 rounded-sm text-[#64ffda] -mt-5 hover:bg-[#64ffda]/10">
                Resume
              </button>
            </motion.div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
