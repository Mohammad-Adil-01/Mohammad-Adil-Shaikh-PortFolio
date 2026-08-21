import React from "react";
import { motion } from "motion/react";
import SameCard from "../reusable component/SameCard";

import courseCertificate from "../assets/courseCertificate.png";
import internshipCertificate from "../assets/internshipCertificate.png";
import udemy from "../assets/adil-udemy-certificates.jpg";
import digitalCourse from "../assets/digitalCourseertificate.jpg";
import festIt from "../assets/festIT.jpeg";

const certificates = [
  {
    id: 1,
    name: "Course Certificate",
    category: "Web Development",
    img: courseCertificate,
    alt: "Course Certificate from Codec Technologies",
  },
  {
    id: 2,
    name: "Internship Certificate",
    category: "Internship",
    img: internshipCertificate,
    alt: "Internship Certificate from Codec Technologies",
  },
  {
    id: 3,
    name: "Web Development Certificate",
    category: "Development",
    img: udemy,
    alt: "Web Development Certificate from Udemy",
  },
  {
    id: 4,
    name: "Digital Productivity with AI",
    category: "Artificial Intelligence",
    img: digitalCourse,
    alt: "Digital Productivity with AI Certificate",
  },
  {
    id: 5,
    name: "IT Fest Certificate",
    category: "Achievement",
    img: festIt,
    alt: "IT Fest Certificate",
  },
];

const Certificates = () => {
  return (
    <motion.section
      id="certificate"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full overflow-hidden bg-white px-4 py-20 text-black md:px-8 lg:px-12"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

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
          My Achievements
        </motion.div>

        <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Certifications
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
          A collection of certifications and achievements representing my
          continuous learning, technical growth, and professional development.
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
            className="group relative"
          >
            {/* Card */}
            <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-black/15 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
                <div className="absolute inset-0 z-10 bg-black/0 transition-all duration-500 group-hover:bg-black/[0.04]" />

                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                >
                  <SameCard
                    name={certificate.name}
                    img={certificate.img}
                    alt={certificate.alt}
                    width="w-full"
                    height="h-full"
                  />
                </motion.div>

                {/* Number */}
                <div className="absolute left-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/70 text-xs font-semibold text-white backdrop-blur-md">
                  {String(certificate.id).padStart(2, "0")}
                </div>
              </div>

              {/* Card Content */}
              <div className="px-2 pb-2 pt-5">
                <div className="mb-2 inline-flex rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium tracking-wide text-gray-600">
                  {certificate.category}
                </div>

                <h3 className="text-lg font-semibold leading-tight tracking-tight text-gray-900">
                  {certificate.name}
                </h3>

                {/* Bottom Line */}
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Certificate
                  </span>

                  <span className="flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors duration-300 group-hover:text-black">
                    View
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="relative z-10 mx-auto mt-12 text-center"
      >
        <p className="text-sm text-gray-400">
          Always learning. Always improving.
        </p>
      </motion.div>
    </motion.section>
  );
};  

export default Certificates;