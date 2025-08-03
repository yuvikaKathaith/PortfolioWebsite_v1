import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    if (pathname === "/") {
      scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between font-mono cursor-pointer sticky top-0 h-22 bg-[#0a192f]/70 backdrop-blur-md z-50">
        {/* Image */}
        <motion.div
          onClick={handleLogoClick}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -4 }}
          className="md:p-7 p-5 pl-6 md:pl-12"
        >
          <Image src="/logo.png" alt="logo" height={43} width={43} />
        </motion.div>

        {/* Desktop List */}
        <div className="p-10 hidden md:block">
          <ul className="flex flex-row text-[#ccd6f6] text-[14px] gap-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <Link to="about" smooth={true} duration={500}>
                <span className="text-[#64ffda]">01.</span> About
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <Link to="experience" smooth={true} duration={500}>
                <span className="text-[#64ffda]">02.</span> Experience
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <Link to="work" smooth={true} duration={500}>
                <span className="text-[#64ffda]">03.</span> Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="flex flex-row gap-1 hover:text-[#64ffda]"
            >
              <Link to="contact" smooth={true} duration={500}>
                <span className="text-[#64ffda]">04.</span> Contact
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.3 }}
            >
              <a
                href="https://drive.google.com/file/d/1wu9a5rEQanLjNbcAN9d48lhaaymrsQyD/view?usp=drive_link"
                target="_blank"
              >
                <button className="transition-transform hover:-translate-y-1 duration-300 border w-20 h-10 rounded-sm text-[#64ffda] -mt-5 hover:bg-[#64ffda]/10">
                  Resume
                </button>
              </a>
            </motion.div>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center p-4">
          {isOpen ? (
            <X
              onClick={toggleMenu}
              className="text-[#64ffda] w-7 h-7 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={toggleMenu}
              className="text-[#64ffda] w-7 h-7 cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-40 flex items-center justify-center">
          <div className="bg-[#0a192f] text-[#ccd6f6] text-sm rounded-md shadow-lg w-[80%] max-w-xs p-6 flex flex-col items-center gap-6 animate-fade-in">
            <Link to="about" smooth duration={500} onClick={toggleMenu}>
              <span className="flex gap-1 hover:text-[#64ffda] cursor-pointer">
                <span className="text-[#64ffda]">01.</span> About
              </span>
            </Link>

            <Link to="experience" smooth duration={500} onClick={toggleMenu}>
              <span className="flex gap-1 hover:text-[#64ffda] cursor-pointer">
                <span className="text-[#64ffda]">02.</span> Experience
              </span>
            </Link>

            <Link to="work" smooth duration={500} onClick={toggleMenu}>
              <span className="flex gap-1 hover:text-[#64ffda] cursor-pointer">
                <span className="text-[#64ffda]">03.</span> Work
              </span>
            </Link>

            <Link to="contact" smooth duration={500} onClick={toggleMenu}>
              <span className="flex gap-1 hover:text-[#64ffda] cursor-pointer">
                <span className="text-[#64ffda]">04.</span> Contact
              </span>
            </Link>

            <a
              href="https://drive.google.com/file/d/12kzSWBdNIbXQnXJVOV1kOlTCW60dQ5WY/view?usp=drive_link"
              target="_blank"
            >
              <button className="border w-24 h-10 rounded-sm text-[#64ffda] hover:bg-[#64ffda]/10 transition-transform hover:-translate-y-1 duration-300">
                Resume
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
