import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import khalsa1 from "../assets/khalsa1.jpeg";
import khalsa2 from "../assets/khalsa2.jpeg";
import nkes from "../assets/nkes.jpg";
import stjoseph from "../assets/school.webp";
import cancel from "../assets/cancel.png";

const Education = () => {
  const [activePerformance, setActivePerformance] = useState("");

  return (
    <>
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 50, filter: "blur(30px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 w-full relative px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
      >
        <h2 className="my-6 text-black text-3xl sm:text-4xl font-extrabold text-center tracking-tight [text-shadow:1px_2px_8px_rgba(0,0,0,0.15)]">
          Educational Background
        </h2>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 sm:p-4">
          <Card
            id="graduate"
            img={khalsa1}
            name="Guru Nanak Khalsa College"
            description="Guru Nanak Khalsa College is a Degree College located in Mumbai, Matunga East, Maharashtra, India."
            onViewPerformance={setActivePerformance}
          />
          <Card
            id="hsc"
            img={nkes}
            name="NKES Junior College"
            description="National Kannada Education Society Of Arts Science & Commerce (Junior College) is located in Wadala, Maharashtra, India."
            onViewPerformance={setActivePerformance}
          />
          <Card
            id="ssc"
            img={stjoseph}
            name="St. Joseph High School"
            description="St. Joseph High School is a Private School located in Kurla West, New Mill Road, Mumbai, Maharashtra, India - 400070."
            onViewPerformance={setActivePerformance}
          />
        </div>
      </motion.section>

      <AnimatePresence>
        {activePerformance && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
            {activePerformance === "graduate" && (
              <EducationInformation
                title="Guru Nanak Khalsa College of Art's Science & Commerce (Autonomous)"
                img={khalsa2}
                description="All results from Semester 1 to Semester 6 Examination conducted in Guru Nanak Khalsa College of Arts Science & Commerce (AUTONOMOUS), Matunga East, Mumbai, Maharashtra, India."
                link="https://gnkhalsa.edu.in/"
                collegeLinkname="Guru Nanak Khalsa College - Website Link"
                studentName="Semester wise SGPA of a Student : Mohammad Adil Shaikh."
                sem1="Semester 1 - 8.23 Out of 10 (SGPA)."
                sem2="Semester 2 - 8.45 Out of 10 (SGPA)."
                sem3="Semester 3 - 8.86 Out of 10 (SGPA)."
                sem4="Semester 4 - 8.95 Out of 10 (SGPA)."
                sem5="Semester 5 - 9.18 Out of 10 (SGPA)."
                sem6="Semester 6 - 9.05 Out of 10 (SGPA)."
                total="Total CGPA: 8.79 / 10 CGPA."
                onClose={() => setActivePerformance("")}
              />
            )}
            {activePerformance === "hsc" && (
              <EducationInformation
                title="National Kannada Education Society of Art's Science & Commerce"
                img={nkes}
                description="National Kannada Education Society of Art's Science & Commerce, located in Wadala, Mumbai, Maharashtra, India."
                link="https://nkes.in/"
                collegeLinkname="Nkes Junior College - Website Link"
                studentName="HSC Result of Student: Mohammad Adil Shaikh"
                sem1="HSC Percentage - 72.00 % Out of 100."
                total="Total HSC Percentage: 72.00 / 100."
                onClose={() => setActivePerformance("")}
              />
            )}
            {activePerformance === "ssc" && (
              <EducationInformation
                title="St. Joseph High School"
                img={stjoseph}
                description="St. Joseph High School, located in Kurla West, New Mill Road, Mumbai, Maharashtra, India - 400070."
                link="https://www.stjosephhighschoolkurlawest.com/"
                collegeLinkname="St.Joseph High School - Website Link"
                studentName="SSC Result of Student: Mohammad Adil Shaikh"
                sem1="SSC Percentage - 60.00 % / 100"
                total="Total SSC Percentage: 60.00 / 100."
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

function Card({ id, img, name, description, onViewPerformance }) {
  return (
    <div className="border border-neutral-200 text-black p-5 sm:p-6 bg-neutral-50/50 w-full rounded-xl flex flex-col justify-between gap-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-blue-500/30">
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg w-full h-48">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900">{name}</h3>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
      <button
        className="rounded-lg font-medium text-sm sm:text-base p-3 bg-green-500/20 text-green-800 border border-green-500/30 transition-all duration-200 hover:bg-green-500 hover:text-white w-full mt-4"
        onClick={() => onViewPerformance(id)}
      >
        View Student Performance
      </button>
    </div>
  );
}

function EducationInformation(props) {
  const { onClose } = props;
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-xl p-5 sm:p-6 bg-white text-black rounded-xl flex flex-col gap-4 max-h-[85vh] overflow-y-auto shadow-2xl relative border border-neutral-100"
    >
      <div className="sticky top-0 flex justify-end bg-white py-1 z-20 border-b border-neutral-100 mb-2">
        <button onClick={onClose} className="p-1.5 hover:bg-neutral-100 rounded-full transition">
          <img src={cancel} alt="Close modal" className="w-5 h-5 cursor-pointer" />
        </button>
      </div>
      
      <h3 className="text-left text-neutral-900 text-xl sm:text-2xl font-bold leading-tight">
        {props.title}
      </h3>
      
      <img
        src={props.img}
        alt="Institutional facility visual showcase"
        className="w-full h-44 sm:h-64 object-cover rounded-lg shadow-inner"
      />
      
      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{props.description}</p>
      
      <a href={props.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold text-sm sm:text-base break-words">
        {props.collegeLinkname}
      </a>
      
      <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200/60">
        <p className="font-bold text-neutral-800 text-sm sm:text-base mb-3">{props.studentName}</p>
        <ul className="list-none flex flex-col gap-2 text-sm sm:text-base font-medium text-neutral-700">
          {props.sem1 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem1}</li>}
          {props.sem2 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem2}</li>}
          {props.sem3 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem3}</li>}
          {props.sem4 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem4}</li>}
          {props.sem5 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem5}</li>}
          {props.sem6 && <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>{props.sem6}</li>}
        </ul>
      </div>
      
      <h4 className="text-base sm:text-lg font-bold border-t border-neutral-200 pt-3 mt-1 text-neutral-900">{props.total}</h4>
    </motion.section>
  );
}