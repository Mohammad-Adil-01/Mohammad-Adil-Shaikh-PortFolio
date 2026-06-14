import React from "react";
import { motion } from "motion/react";
import { data } from "../json/projects.js";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 flex flex-col items-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-white text-2xl md:text-4xl playwrite font-extrabold text-center tracking-wide"
      >
        Projects Section
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-7xl mx-auto"
      >
        {data.map((item) => (
          <Card
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.liveDemo}
            github={item.github}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Project;

function Card({ image, title, description, link, github }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full max-w-sm rounded-xl border border-blue-500/20 bg-slate-900/40 p-4 md:p-5 text-white backdrop-blur-sm flex flex-col justify-between shadow-lg"
    >
      <div>
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-slate-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h3 className="mt-4 text-xl md:text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-sm md:text-base text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full">
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