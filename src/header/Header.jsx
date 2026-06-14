import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <section className="w-full absolute top-0 left-0 z-50 px-4 sm:px-6 md:px-10 lg:px-20">
        <motion.header
          initial={{ opacity: 0, filter: "blur(15px)", y: -20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-5 flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 tracking-tight text-center lg:text-left selection:bg-neutral-200"
          >
            Mohammad Adil Shaikh
          </motion.h1>

          <nav className="w-full lg:w-auto">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-end items-center text-black gap-4 sm:gap-6 md:gap-8"
            >
              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#education" className="cursor-pointer py-1 block">
                  Education
                </a>
              </motion.li>

              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#projects" className="cursor-pointer py-1 block">
                  Projects
                </a>
              </motion.li>

              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#experience" className="cursor-pointer py-1 block">
                  Experience
                </a>
              </motion.li>

              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#certificate" className="cursor-pointer py-1 block">
                  Certifications
                </a>
              </motion.li>

              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#network" className="cursor-pointer py-1 block">
                  Network
                </a>
              </motion.li>

              <motion.li
                className="text-neutral-800 font-medium text-xs sm:text-sm md:text-base hover:text-black transition-colors"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contact" className="cursor-pointer py-1 block">
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