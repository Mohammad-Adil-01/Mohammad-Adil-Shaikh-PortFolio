import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <>
      {/* - min-h-screen allows perfect vertical centering.
        - items-center centers content vertically on mobile, items-start handles desktop alignment.
      */}
      <motion.main
        className="w-full min-h-screen pt-24 pb-12 flex flex-col justify-center items-center md:flex-row md:justify-start items-start px-6 sm:px-12 md:px-20 lg:px-32 z-10 relative"
      >
        <LeftBanner />
      </motion.main>
    </>
  );
};

export default Banner;

function LeftBanner() {
  return (
    
    <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left max-w-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-sm mt-8 md:mt-0">
      
      <motion.h2
        initial={{ opacity: 0, filter: "blur(30px)", x: -100 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="playwrite text-4xl sm:text-5xl lg:text-6xl text-black font-extrabold tracking-tight leading-tight"
      >
        Full Stack <br className="hidden md:block" /> Developer.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -50, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 sm:mt-6 playwrite text-sm sm:text-base md:text-lg text-neutral-800 leading-relaxed font-normal"
      >
        AI Full Stack Developer specializing in MERN Stack development. 
        I build modern, responsive, and secure web applications using 
        React.js, Node.js, Express.js, and MongoDB. Passionate about 
        creating scalable digital solutions, solving real-world problems, 
        and delivering exceptional user experiences.
      </motion.p>
    </div>
  );
}