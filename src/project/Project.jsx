import React from "react";
import { motion } from "motion/react";
import {data} from "../json/projects.js"

const Project = () => {
  return (
    <motion.section
      id="projects"
      className="mt-52 py-20 flex flex-col items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-blue-200 text-3xl playwrite font-extrabold"
      >
        Projects Section
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 60, filter: "blur(50px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="mt-12 flex flex-wrap justify-center gap-10 px-4"
      >
       {data.map((items,idx)=>{
        return<Card key={idx} image={items.image} title={items.title} description={items.description} link={items.link} github={items.github}/>
     })}
      </motion.div>
    </motion.section>
  );
};

export default Project;

function Card({idx, image, title, description, link, github }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="w-80 rounded-xl border border-blue-500/1 bg-slate-900/40 p-5 text-white backdrop-blur-sm"
    >
      <img
        src={image || null}
        alt={title}
        className="w-full rounded-lg object-cover"
      />

      <h3 key={idx} className="mt-4 text-2xl font-bold">{title}</h3>

      <p className="mt-2 text-gray-300">{description}</p>

      <div className="mt-4 flex gap-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="rounded bg-blue-600 px-4 py-2 hover:bg-blue-700"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-blue-500 px-4 py-2 hover:bg-blue-500"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}