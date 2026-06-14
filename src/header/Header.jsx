import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="Portfolio-container mt-7 px-4 sm:px-6 md:px-10 lg:px-20">
        <motion.header
          initial={{ opacity: 0, filter: "blur(50px)", y: 250 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="p-5 flex flex-col lg:flex-row justify-between items-center gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 0.9 }}
            className="text-lg sm:text-xl md:text-2xl text-black text-center lg:text-left"
          >
            Mohammad Adil Shaikh
          </motion.h1>

          <nav className="w-full lg:w-auto">
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="flex flex-wrap justify-center lg:justify-end items-centertext-black gap-3 sm:gap-4 md:gap-5"
            >
              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#education" to="/education" className="cursor-pointer">
                  Education
                </a>
              </motion.li>

              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#projects" to="/project" className="cursor-pointer">
                  Projects
                </a>
              </motion.li>

              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#experience" to="/experience" className="cursor-pointer">
                  Experience
                </a>
              </motion.li>

              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href="#certificate"
                  to="/certification"
                  className="cursor-pointer"
                >
                  Certification's
                </a>
              </motion.li>

              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#network" to="/adil-networks" className="cursor-pointer">
                  Network
                </a>
              </motion.li>

              <motion.li
                className="text-black text-xs sm:text-sm md:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#contact" to="/contact" className="cursor-pointer">
                  Contact
                </a>
              </motion.li>
            </motion.ul>
          </nav>
        </motion.header>
      </section>
    </>
  );
};

export default Header;