import { motion } from "motion/react";
import { body, filter } from "motion/react-client";
import { useState} from "react";
import { Link } from "react-router-dom";
import portfolioTheme from "../assets/portfolio-theme.mp3";

const Header = () => {
  return (
    <>
      <section className="Portfolio-container mt-7 ml-20 mr-20 ">
        <motion.header
          initial={{ opacity: 0, filter: "blur(50px)", y: 250 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{once:false,amount:0.3}}
          transition={{ duration: 2 }}
          className="p-5 text-center sm:px-4 md:px-6 lg:px-8 text-left flex flex-row justify-between items-center sm:text-1xl flex flex-col items-left md:text-1xl flex-row items-left lg:flex-row gap-5"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ scale: 0.9 }}
            className=" text-2xl linear-gradient playwrite  text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-white ">
            Mohammad Adil Shaikh
          </motion.h1>
          <nav className="text-1xl">
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="flex flex-row items-center text-white gap-5 font-100 "
            >
           
              <motion.li
                className=" linear-gradient bg-clip-text text-transparent bg-gradient-to-r from-white bg-blue-500 flex flex-row gap-5 text-sm 
            sm: text-0xl md:text-1xl lg:text-1xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/education">Education</Link>
              </motion.li>
              
             
                 <motion.li
                 className=" linear-gradient bg-clip-text text-transparent bg-gradient-to-r from-white bg-blue-500 flex flex-row gap-5 text-sm 
            sm: text-0xl md:text-1xl lg:text-1xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#projects" >Projects</a>
              </motion.li>
              <motion.li
                className=" linear-gradient bg-clip-text text-transparent bg-gradient-to-r from-white bg-blue-500 flex flex-row gap-5 text-sm 
            sm: text-0xl md:text-1xl lg:text-1xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/experience">Experience</Link>
              </motion.li>
              <motion.li
                className=" linear-gradient bg-clip-text text-transparent bg-gradient-to-r from-white bg-blue-500 flex flex-row gap-5 text-sm 
            sm: text-0xl md:text-1xl lg:text-1xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
               <motion.li
                className=" linear-gradient bg-clip-text text-transparent bg-gradient-to-r from-white bg-blue-500 flex flex-row gap-5 text-sm 
            sm: text-0xl md:text-1xl lg:text-1xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to="/resume">Resume</Link>
              </motion.li>
            </motion.ul>
          </nav>
        </motion.header>
      </section>
    </>
  );
};

export default Header;
