import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import khalsa1 from "../assets/khalsa1.jpeg";
import khalsa2 from "../assets/khalsa2.jpeg";
import nkes from "../assets/nkes.jpg";
import stjoseph from "../assets/school.webp";
import cancel from "../assets/cancel.png";

const educationData = [
  {
    id: "graduate",
    level: "UNDERGRADUATE",
    period: "2022 — 2025",
    image: khalsa1,
    name: "Guru Nanak Khalsa College",
    shortName: "GNK College",
    description:
      "Bachelor of Science in Information Technology with a focus on software development, web technologies, databases, and modern application development.",
    location: "Matunga East, Mumbai",
  },
  {
    id: "hsc",
    level: "HIGHER SECONDARY",
    period: "2020 — 2022",
    image: nkes,
    name: "NKES Junior College",
    shortName: "NKES Junior College",
    description:
      "Completed Higher Secondary education with a strong foundation in science, mathematics, and computer-related subjects.",
    location: "Wadala, Mumbai",
  },
  {
    id: "ssc",
    level: "SECONDARY SCHOOL",
    period: "2010 — 2020",
    image: stjoseph,
    name: "St. Joseph High School",
    shortName: "St. Joseph High School",
    description:
      "Completed secondary education and developed an early interest in technology, problem solving, and computer science.",
    location: "Kurla West, Mumbai",
  },
];

const Education = () => {
  const [activePerformance, setActivePerformance] = useState("");

  return (
    <>
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full overflow-hidden bg-white px-4 py-20 text-black sm:px-8 md:px-12 lg:px-20"
      >
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />

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
            Academic Journey
          </motion.div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            My academic journey and the foundation that shaped my interest in
            technology, software development, and problem solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-black/20 via-black/10 to-transparent md:left-1/2 md:block" />

          <div className="flex flex-col gap-8 md:gap-12">
            {educationData.map((education, index) => (
              <EducationCard
                key={education.id}
                education={education}
                index={index}
                onViewPerformance={setActivePerformance}
              />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-12 text-center"
        >
          <p className="text-sm text-gray-400">
            Learning today. Building tomorrow.
          </p>
        </motion.div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {activePerformance && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md sm:p-6"
            onClick={() => setActivePerformance("")}
          >
            {activePerformance === "graduate" && (
              <EducationInformation
                title="Guru Nanak Khalsa College of Art's Science & Commerce"
                subtitle="Bachelor of Science in Information Technology"
                img={khalsa2}
                description="All results from Semester 1 to Semester 6 conducted at Guru Nanak Khalsa College of Arts Science & Commerce (Autonomous), Matunga East, Mumbai, Maharashtra."
                link="https://gnkhalsa.edu.in/"
                collegeLinkname="Visit College Website ↗"
                studentName="Semester-wise SGPA"
                results={[
                  "Semester 1 — 8.23 / 10",
                  "Semester 2 — 8.45 / 10",
                  "Semester 3 — 8.86 / 10",
                  "Semester 4 — 8.95 / 10",
                  "Semester 5 — 9.18 / 10",
                  "Semester 6 — 9.05 / 10",
                ]}
                total="8.79 / 10 CGPA"
                onClose={() => setActivePerformance("")}
              />
            )}

            {activePerformance === "hsc" && (
              <EducationInformation
                title="National Kannada Education Society of Arts, Science & Commerce"
                subtitle="Higher Secondary Certificate"
                img={nkes}
                description="National Kannada Education Society of Arts, Science & Commerce, located in Wadala, Mumbai, Maharashtra."
                link="https://nkes.in/"
                collegeLinkname="Visit College Website ↗"
                studentName="HSC Result"
                results={["72.00%"]}
                total="72.00%"
                onClose={() => setActivePerformance("")}
              />
            )}

            {activePerformance === "ssc" && (
              <EducationInformation
                title="St. Joseph High School"
                subtitle="Secondary School Certificate"
                img={stjoseph}
                description="St. Joseph High School, located in Kurla West, New Mill Road, Mumbai, Maharashtra."
                link="https://www.stjosephhighschoolkurlawest.com/"
                collegeLinkname="Visit School Website ↗"
                studentName="SSC Result"
                results={["60.00%"]}
                total="60.00%"
                onClose={() => setActivePerformance("")}
              />
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Education;


/* =========================================================
   EDUCATION CARD
========================================================= */

function EducationCard({
  education,
  index,
  onViewPerformance,
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className={`relative md:flex md:items-center ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-1px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-black shadow-md md:left-1/2 md:block" />

      {/* Card */}
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.3,
        }}
        className="group w-full overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.11)] md:w-[46%]"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
          <motion.img
            src={education.image}
            alt={education.name}
            className="h-full w-full object-cover"
            whileHover={{
              scale: 1.05,
            }}
            transition={{
              duration: 0.5,
            }}
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Period */}
          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {education.period}
          </div>

          {/* Number */}
          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xs font-semibold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Level */}
          <div className="mb-3 text-[10px] font-bold tracking-[0.2em] text-gray-400">
            {education.level}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            {education.name}
          </h3>

          {/* Location */}
          <p className="mt-2 flex items-center gap-2 text-xs font-medium text-gray-400">
            <span>⌖</span>
            {education.location}
          </p>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 text-gray-500">
            {education.description}
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewPerformance(education.id)}
            className="mt-6 flex w-full items-center justify-between rounded-xl border border-black/[0.08] bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-black/15 hover:bg-black hover:text-white"
          >
            <span>View Academic Performance</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}


/* =========================================================
   EDUCATION MODAL
========================================================= */

function EducationInformation({
  title,
  subtitle,
  img,
  description,
  link,
  collegeLinkname,
  studentName,
  results,
  total,
  onClose,
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.94,
        y: 25,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={(e) => e.stopPropagation()}
      className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-black/10 bg-white text-black shadow-2xl"
    >
      {/* Header */}
      <div className="flex items-start justify-between border-b border-black/[0.07] px-5 py-4 sm:px-7">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Academic Record
          </p>

          <h3 className="mt-1 pr-4 text-xl font-bold leading-tight tracking-tight sm:text-2xl">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {subtitle}
          </p>
        </div>

        <button
          onClick={onClose}
          aria-label="Close modal"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 hover:bg-black hover:text-white"
        >
          <img
            src={cancel}
            alt=""
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto p-5 sm:p-7">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-gray-100">
          <img
            src={img}
            alt={title}
            className="h-48 w-full object-cover sm:h-64"
          />
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Website */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center text-sm font-semibold text-black underline underline-offset-4 transition-colors hover:text-gray-500"
        >
          {collegeLinkname}
        </a>

        {/* Results */}
        <div className="mt-7 rounded-2xl border border-black/[0.07] bg-gray-50 p-5">
          <div className="mb-4">
            <p className="text-sm font-bold text-gray-900">
              {studentName}
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Academic performance overview
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white px-4 py-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  {index + 1}
                </span>

                <span className="text-sm font-medium text-gray-700">
                  {result}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Total */}
        <div className="mt-5 flex items-center justify-between rounded-2xl bg-black px-5 py-4 text-white">
          <span className="text-sm font-medium text-white/60">
            Overall Result
          </span>

          <span className="text-lg font-bold text-white">
            {total}
          </span>
        </div>
      </div>
    </motion.section>
  );
}