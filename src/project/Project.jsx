import React from "react";
import { motion } from "motion/react";
import { data } from "../json/projects.js";

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-black sm:px-8 md:px-12 lg:px-20"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          Selected Work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base"
        >
          A selection of projects I've built while exploring modern frontend
          technologies, full-stack development, and real-world problem solving.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
      >
        {data.map((item, index) => (
          <ProjectCard
            key={item.title}
            project={item}
            index={index}
          />
        ))}
      </motion.div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.5,
        }}
        className="relative z-10 mt-12 text-center"
      >
        <p className="text-sm text-gray-400">
          More projects coming soon.
        </p>
      </motion.div>
    </section>
  );
};

export default Project;


/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-3 shadow-[0_10px_45px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_20px_65px_rgba(0,0,0,0.12)]"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* Number */}
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-xs font-semibold text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Project Type */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-800 backdrop-blur-md">
          Featured Project
        </div>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 pt-5">

        {/* Title */}
        <h2 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
          {project.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
          {project.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-black/[0.07]" />

        {/* Actions */}
        <div className="flex gap-2">

          {/* Live Demo */}
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-gray-800"
          >
            Live Demo
            <span className="text-sm">↗</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-gray-50 px-4 py-3 text-xs font-semibold text-gray-800 transition-all duration-300 hover:border-black/15 hover:bg-gray-100"
          >
            GitHub
            <span className="text-sm">↗</span>
          </motion.a>

        </div>
      </div>
    </motion.article>
  );
}