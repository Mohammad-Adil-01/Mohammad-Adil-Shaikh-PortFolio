import React from "react";
import { motion } from "motion/react";
import SameCard from "../reusable component/SameCard";
import courseCertificate from "../assets/courseCertificate.png";
import internshipCertificate from "../assets/internshipCertificate.png";
import udemy from "../assets/adil-udemy-certificates.jpg";
import digitalCourse from "../assets/digitalCourseertificate.jpg";
import festIt from "../assets/festIT.jpeg"

const Certificates = () => {
  return (
    <motion.section
      id="certificate"
      initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white py-10 px-4 md:px-8 overflow-hidden flex flex-col items-center"
    >
      <h2 className="text-center text-white italic text-3xl md:text-4xl font-bold tracking-wide mb-2">
        Certifications
      </h2>
      
      {/* 2x2 Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl border-2 border-blue-300/30 bg-blue-950/30 mx-2 my-6 p-5 md:p-10 rounded-xl shadow-2xl">
        
        {/* Top Left / Card 1 */}
        <div className="flex flex-col w-full h-full aspect-video md:aspect-auto">
          <SameCard
            name="Course Certificate"
            img={courseCertificate}
            alt="Course Certificate From Codec technologies"
            width="w-full"
            height="h-full"
          />
        </div>
        
        {/* Top Right / Card 2 */}
        <div className="flex flex-col w-full h-full aspect-video md:aspect-auto">
          <SameCard
            name="Internship Certificate"
            img={internshipCertificate}
            alt="Internship Certificate From Codec technologies"
            width="w-full"
            height="h-full"
          />
        </div>
        
        {/* Bottom Left / Card 3 */}
        <div className="flex flex-col w-full h-full aspect-video md:aspect-auto">
          <SameCard
            name="Web Development Certificate"
            img={udemy}
            alt="Web Development Certificate From Udemy"
            width="w-full"
            height="h-full"
          />
        </div>
        
        {/* Bottom Right / Card 4 */}
        <div className="flex flex-col w-full h-full aspect-video md:aspect-auto">
          <SameCard
            name="Digital Productivity with AI Certificate"
            img={digitalCourse}
            alt="Digital Productivity Certificate"
            width="w-full"
            height="h-full"
          />
        </div>
        <div className="flex flex-col w-full h-full brightness-200 aspect-video md:aspect-auto">
          <SameCard
            name="IT Fest Certificate"
            img={festIt}
            alt="IT Fesitival Certificate"
            width="w-full"
            height="h-full"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;