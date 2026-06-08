import React from "react";
import { motion } from "motion/react";
import adil from "../assets/adil-image.png";
import Absolute from "../absoluteImgs/Absolute";

const Banner = () => {
  return (
    <>
      <motion.main className="mt-16 md:mt-28 flex flex-col-reverse items-center justify-center gap-10 md:flex-row-reverse md:gap-28 px-6 md:px-20">
        <LeftBanner />
        <RightBanner />
      </motion.main>
      {/* <Absolute /> */}
    </>
  );
};

export default Banner;

function LeftBanner() {
  return (
    <div className="mt-5 flex flex-col items-center md:items-start text-center md:text-left">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(50px)", x: -300 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        viewport={{once:false,amount:0.4}}
        transition={{ duration: 2 }}
        className="h2-full-stack-developer playwrite text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white font-bold"
      >
        Full Stack Developer.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: 300, filter: "blur(50px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        viewport={{once:false,amount:0.4}}
        transition={{ duration: 2 }}
        whileHover={{ scale: 0.9 }}
        className="mt-3 p-3 playwrite text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400"
      >
        AI Full Stack Developer specializing in MERN Stack development.<br />
        I build modern, responsive, and secure web applications using <br />
        React.js, Node.js, Express.js, and MongoDB. Passionate about <br />
        creating scalable digital solutions, solving real-world problems,<br />
        and delivering exceptional user experiences.
      </motion.p>
    </div>
  );
}

function RightBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500, filter: "blur(50px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
      viewport={{once:false,amount:0.4}}
      transition={{ duration: 2 }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={adil}
        alt="Mohammad Adil Portfolio"
        className="GlowRotate w-36 md:w-56 rounded-full"
      />
    </motion.div>
  );
}