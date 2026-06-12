import React from "react";
import { motion } from "motion/react";
import { data } from "../json/projects.js";

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-20 flex flex-col items-center px-4 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-white text-2xl md:text-4xl playwrite font-extrabold text-center tracking-wide"
      >
        Projects Section
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(50px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-7xl mx-auto"
      >
        {data.map((items, idx) => {
          return (
            <Card
              key={idx}
              image={items.image}
              title={items.title}
              description={items.description}
              link={items.liveDemo}
              github={items.github}
            />
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Project;

function Card({ image, title, description, link, github }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full sm:max-w-sm md:max-w-[340px] rounded-xl border border-blue-500/10 bg-slate-900/40 p-4 md:p-5 text-white backdrop-blur-sm flex flex-col justify-between"
    >
      <div>
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-800">
          <img
            src={image || null}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold line-clamp-1">{title}</h3>

        <p className="mt-2 text-sm md:text-base text-gray-300 line-clamp-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 flex gap-4 w-full">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center rounded bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-700"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center rounded border border-blue-500/40 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500/20"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}