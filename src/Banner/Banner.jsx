import React from "react";
import { motion } from "motion/react";
import adilDrive from "../assets/adildrive.jpeg";

const Banner = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white px-6 py-24 text-black sm:px-10 md:px-16 lg:px-20 xl:px-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-5%] top-[10%] h-96 w-96 rounded-full bg-purple-200/30 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-15%] left-[40%] h-80 w-80 rounded-full bg-cyan-100/30 blur-[130px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-14 lg:flex-row lg:gap-10">
        
        {/* LEFT CONTENT */}
        <LeftBanner />

        {/* RIGHT IMAGE */}
        <ProfileImage />
      </div>
    </motion.main>
  );
};

export default Banner;


/* =========================================================
   LEFT BANNER
========================================================= */

function LeftBanner() {
  return (
    <div className="w-full max-w-3xl">

      {/* Availability Badge */}
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-medium text-gray-600 backdrop-blur-sm sm:text-sm"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>

        Available for opportunities
      </motion.div>


      {/* Main Heading */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(15px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Full Stack
        <br />

        <span className="bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent">
          Developer.
        </span>
      </motion.h1>


      {/* Description */}
      <motion.p
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.55,
          ease: "easeOut",
        }}
        className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base md:text-lg"
      >
        I'm an{" "}
        <span className="font-semibold text-gray-900">
          Full Stack Developer
        </span>{" "}
        specializing in the MERN stack, with hands-on experience building modern and scalable web applications. I work across React.js, Redux, RTK Query, Node.js, Express.js, and MongoDB**, with a strong focus on complex frontend logic, reusable architecture, responsive UI/UX, API integration, and clean, maintainable code.

      </motion.p>


      {/* Buttons */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.75,
        }}
        className="mt-8 flex flex-col gap-3 sm:flex-row"
      >
        <motion.a
          href="#projects"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20"
        >
          View My Work
          <span className="text-base">↗</span>
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-sm transition-all duration-300 hover:border-black/20 hover:bg-gray-50"
        >
          Let's Connect
        </motion.a>
      </motion.div>


      {/* Technology Stack */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.95,
        }}
        className="mt-12"
      >
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
          Technologies I work with
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JavaScript",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-black/[0.07] bg-black/[0.025] px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/15 hover:bg-black/[0.05] hover:text-black"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>


      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="mt-14 hidden items-center gap-3 text-xs text-gray-400 md:flex"
      >
        <span className="h-px w-10 bg-gray-300" />

        Scroll to explore
      </motion.div>
    </div>
  );
}


/* =========================================================
   PROFILE IMAGE
========================================================= */

function ProfileImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.9,
        filter: "blur(15px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        delay: 0.45,
        ease: "easeOut",
      }}
      className="relative w-full max-w-sm shrink-0 lg:max-w-md"
    >

      {/* Glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-blue-200/40 via-purple-200/30 to-transparent blur-3xl" />


      {/* Decorative Circle */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-black/[0.08]"
      />

      {/* Image Container */}
      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.12)]"
      >
        <img
          src={adilDrive}
          alt="Mohammad Adil Shaikh - Full Stack Developer"
          className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />

        {/* Image Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </motion.div>


      {/* Floating Developer Badge */}
      <motion.div
        initial={{
          opacity: 0,
          x: 20,
          y: 20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1.1,
        }}
        className="absolute -bottom-5 -left-5 rounded-2xl border border-black/10 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-400">
          Currently
        </p>

        <p className="mt-1 text-sm font-bold text-black">
          Building & Learning
        </p>
      </motion.div>


      {/* Floating Stack Badge */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
          y: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 1.25,
        }}
        className="absolute -right-4 bottom-24 hidden rounded-2xl border border-black/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-gray-400">
          Stack
        </p>

        <p className="mt-1 text-xs font-bold text-black">
          MERN + AI
        </p>
      </motion.div>
    </motion.div>
  );
}