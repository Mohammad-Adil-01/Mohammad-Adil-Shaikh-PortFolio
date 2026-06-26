import React from "react";
import { motion } from "motion/react";
import { data } from "../json/projects.js";

const Project = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="my-5 text-center text-2xl md:text-4xl font-extrabold italic text-black"
      >
        Projects Section
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6"
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
      className="relative z-20 w-full max-w-sm overflow-hidden rounded-xl border-2 border-blue-500 bg-white p-5 shadow-xl"
    >
      <div className="w-full aspect-video overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h2 className="mt-4 text-2xl font-bold text-black">
        {title}
      </h2>

      <p className="mt-3 text-gray-700">
        {description}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg bg-blue-600 py-2 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-lg border border-blue-600 py-2 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}