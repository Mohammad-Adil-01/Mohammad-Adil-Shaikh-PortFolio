import React from "react";
import { motion } from "motion/react";
import SameCard from "../reusable component/SameCard";

import codec from "../assets/codec.png";
import offerLetter from "../assets/OfferLetter.png";
import lor from "../assets/lor.png";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-black md:px-8 lg:px-12"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto mb-12 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm font-medium text-gray-600 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          Professional Journey
        </motion.div>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Work Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
          My professional experience, responsibilities, and achievements
          throughout my development journey.
        </p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10">
        {/* Current Job Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.07)]">
            
            {/* Top Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-black via-gray-500 to-transparent" />

            <div className="p-6 md:p-10 lg:p-12">

              {/* Company Header */}
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                {/* Role & Company Info */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  
                  {/* Icon Container */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-gray-50 p-4 font-mono text-2xl font-bold tracking-tighter text-black shadow-sm">
                    {"<Dev />"}
                  </div>

                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                      Full-time
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      Lead Frontend Developer
                    </h3>

                    <p className="mt-1 text-base font-medium text-gray-600">
                      React Developer
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex flex-col rounded-2xl border border-black/[0.08] bg-gray-50 px-5 py-4 md:min-w-[180px]">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Duration
                  </span>

                  <span className="mt-1 text-sm font-semibold text-gray-800">
                    Jun 2026 — Present
                  </span>

                  <span className="mt-1 text-xs text-gray-500">
                    Frontend Architecture & State
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-black/[0.08]" />

              {/* Responsibilities */}
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                    ✓
                  </span>

                  <h4 className="text-sm font-semibold text-gray-800">
                    Key Technical Highlights & Impact
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      System Design & RTK
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Architected scalable frontend systems and implemented robust state management workflows with Redux Toolkit (RTK).
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      Complex Logic & Optimization
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Engineered strong algorithmic business logic, eliminated redundant re-renders, and applied code-optimization techniques.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      Multi-Project Leadership
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Spearheaded the frontend delivery across 4 major production applications with high standards of reliability and performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Contributed */}
              <div className="mt-10">
                <div className="mb-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    Portfolio
                  </span>

                  <h4 className="mt-1 text-xl font-bold tracking-tight">
                    Key Production Deliverables
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-black/[0.08] bg-gray-50 p-5 transition-all duration-300 hover:shadow-md">
                    <span className="inline-block rounded-md bg-black px-2.5 py-1 text-[11px] font-semibold text-white">
                      Project
                    </span>
                    <h5 className="mt-3 text-base font-bold text-gray-900">VPS</h5>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      High-performance interface featuring efficient state handling and streamlined data management flows.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/[0.08] bg-gray-50 p-5 transition-all duration-300 hover:shadow-md">
                    <span className="inline-block rounded-md bg-black px-2.5 py-1 text-[11px] font-semibold text-white">
                      Project
                    </span>
                    <h5 className="mt-3 text-base font-bold text-gray-900">GOVERNX</h5>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Enterprise governance application built with advanced React architecture and modular components.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/[0.08] bg-gray-50 p-5 transition-all duration-300 hover:shadow-md">
                    <span className="inline-block rounded-md bg-black px-2.5 py-1 text-[11px] font-semibold text-white">
                      Project
                    </span>
                    <h5 className="mt-3 text-base font-bold text-gray-900">Auditor Allocation System</h5>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Complex allocation workflows and rule-driven assignment logic optimized for maximum frontend efficiency.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-black/[0.08] bg-gray-50 p-5 transition-all duration-300 hover:shadow-md">
                    <span className="inline-block rounded-md bg-black px-2.5 py-1 text-[11px] font-semibold text-white">
                      Project
                    </span>
                    <h5 className="mt-3 text-base font-bold text-gray-900">Form168</h5>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Dynamic form handling, nested state validation, and secure submission pipelines.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Previous Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full"
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_15px_60px_rgba(0,0,0,0.07)]">
            
            {/* Top Accent */}
            <div className="h-1 w-full bg-gradient-to-r from-black via-gray-500 to-transparent" />

            <div className="p-6 md:p-10 lg:p-12">

              {/* Company Header */}
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                {/* Company Info */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  
                  {/* Logo Container */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-gray-50 p-4 shadow-sm">
                    <img
                      src={codec}
                      alt="Codec Technologies"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                      Internship
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      Codec Technologies
                    </h3>

                    <p className="mt-1 text-base font-medium text-gray-600">
                      Web Development Intern
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex flex-col rounded-2xl border border-black/[0.08] bg-gray-50 px-5 py-4 md:min-w-[180px]">
                  <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Duration
                  </span>

                  <span className="mt-1 text-sm font-semibold text-gray-800">
                    Apr 2025 — May 2025
                  </span>

                  <span className="mt-1 text-xs text-gray-500">
                    Web Development
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px w-full bg-black/[0.08]" />

              {/* Location */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                    •
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    Company Location
                  </span>
                </div>

                <address className="not-italic max-w-3xl pl-9 text-sm leading-6 text-gray-500">
                  211B, Saki Vihar Road, West Chandivali IT Hub, Powai,
                  Mumbai, Maharashtra 400076
                </address>
              </div>

              {/* Responsibilities */}
              <div className="mt-8">
                <div className="mb-5 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                    ✓
                  </span>

                  <h4 className="text-sm font-semibold text-gray-800">
                    Experience Highlights
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      Responsive Development
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Built responsive and user-friendly web interfaces.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      Frontend Development
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Worked on modern frontend technologies and UI components.
                    </p>
                  </div>

                  <div className="rounded-xl border border-black/[0.07] bg-gray-50 p-4">
                    <p className="text-sm font-semibold">
                      Professional Growth
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Gained practical experience working in a professional
                      environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="mt-10">
                <div className="mb-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                    Documentation
                  </span>

                  <h4 className="mt-1 text-xl font-bold tracking-tight">
                    Experience Documents
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  
                  {/* Offer Letter */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden rounded-2xl border border-black/[0.08] bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-video overflow-hidden rounded-xl bg-white">
                      <motion.div
                        className="h-full w-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                      >
                        <SameCard
                          name="Offer Letter"
                          img={offerLetter}
                          alt="Company Offer Letter"
                          width="w-full"
                          height="h-full"
                        />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-between px-2 pb-2 pt-4">
                      <div>
                        <p className="text-sm font-semibold">
                          Offer Letter
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Internship Document
                        </p>
                      </div>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </motion.div>

                  {/* Recommendation Letter */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group overflow-hidden rounded-2xl border border-black/[0.08] bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-video overflow-hidden rounded-xl bg-white">
                      <motion.div
                        className="h-full w-full"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                      >
                        <SameCard
                          name="Letter Of Recommendation"
                          img={lor}
                          alt="Company Recommendation Letter"
                          width="w-full"
                          height="h-full"
                        />
                      </motion.div>
                    </div>

                    <div className="flex items-center justify-between px-2 pb-2 pt-4">
                      <div>
                        <p className="text-sm font-semibold">
                          Letter of Recommendation
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Professional Document
                        </p>
                      </div>

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </motion.div>

                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative z-10 mt-10 text-center text-sm text-gray-400"
      >
        Building experience through real-world development.
      </motion.p>
    </motion.section>
  );
};

export default Experience;