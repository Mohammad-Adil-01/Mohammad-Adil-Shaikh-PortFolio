import React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import khalsa1 from "../assets/khalsa1.jpeg";
import khalsa2 from "../assets/khalsa2.jpeg";
import nkes from "../assets/nkes.jpg";
import stjoseph from "../assets/school.webp";
import cancel from "../assets/cancel.png";

const Education = () => {
  return (
    <>
      <motion.section
        id="education"
        initial={{ opacity: 0, x: -300, filter: "blur(50px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="mt-20 md:mt-60 playwrite h-full w-full relative px-4 md:px-10"
      >
        <motion.h2 className="my-5 text-black text-3xl md:text-4xl text-center [text-shadow:2px_3px_10px_gray]">
          Information About Educations
        </motion.h2>
        <motion.section className="rounded-lg m-2 md:m-5 flex flex-col items-center md:flex-row md:justify-center md:items-stretch gap-6">
          <Card
            id="graduate"
            img={khalsa1}
            name="Guru Nanak Khalsa College"
            description="Guru Nanak Khalsa College is a Degree College which is Located in Mumbai, Matunga East, Maharashtra, India."
          />
          <Card
            id="hsc"
            img={nkes}
            name="NKES Junior College."
            description="National Kannada Education Society Of Arts Science & Commerce (Junior College) is Located in Wadala, Maharashtra, India."
          />
          <Card
            id="ssc"
            img={stjoseph}
            name="St. Joseph High School"
            description="St. Joseph High School is a Private School Located in Kurla West, New Mill Road, Mumbai, Maharashtra, India - 400070."
          />
        </motion.section>
      </motion.section>
    </>
  );
};

export default Education;

function Card(props) {
  const [viewPerformance, setViewPerformance] = useState("");

  const handleClick = (input) => {
    setViewPerformance(input);
  };
  return (
    <>
      <motion.div className="border-black/50 text-black m-2 md:m-4 p-5 bg-blue-700/5 w-full sm:max-w-md md:w-1/3 rounded-lg flex flex-col justify-between gap-5 transform transition duration-200 hover:-translate-y-2 ease-in hover:border-2">
        <div className="flex flex-col gap-5">
          <img
            src={props.img}
            alt={props.name}
            className="h-48 w-full object-cover rounded-xl transform transition duration-1000 hover:scale-105 hover:rounded-sm"
          />
          <h2 className="text-2xl font-bold">{props.name}</h2>
          <p className="text-sm md:text-base">{props.description}</p>
        </div>
        <button
          className="rounded-lg text-base p-3 bg-green-500/50 transform transition duration-200 ease-in hover:-translate-y-1 hover:bg-green-500/75 w-full mt-auto"
          onClick={() => {
            handleClick(props.id);
          }}
        >
          View Student Performance
        </button>
      </motion.div>

      {viewPerformance && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          {viewPerformance === "graduate" && (
            <EducationInformation
              title="Guru Nanak Khalsa College of Art's Science & Commerce (Autonomous)"
              img={khalsa2}
              description="All Result from Semester 1 to Semester 6 Examination which is Conducted in Guru Nanak Khalsa College of Arts Science & Commerce (AUTONOMOUS), Matunga East, Mumbai, Maharashtra, India - 400019."
              link="https://gnkhalsa.edu.in/"
              collegeLinkname="Guru Nanak Khalsa College - Website Link"
              studentName="Semester wise SGPA of a Student : Mohammad Adil Shaikh."
              sem1="Semester 1 - 8.23 Out of 10 (SGPA)."
              sem2="Semester 2 - 8.45 Out of 10 (SGPA)."
              sem3="Semester 3 - 8.86 Out of 10 (SGPA)."
              sem4="Semester 4 - 8.95 Out of 10 (SGPA)."
              sem5="Semester 5 - 9.18 Out of 10 (SGPA)."
              sem6="Semester 6 - 9.05 Out of 10 (SGPA)."
              total="Total CGPA BY INCLUDING ALL (SGPA IS): 8.79 / 10 CGPA."
              onClose={() => setViewPerformance("")}
            />
          )}
          {viewPerformance === "hsc" && (
            <EducationInformation
              title="National Kannada Education Society of Art's Science & Commerce"
              img={nkes}
              description="National Kannada Education Society of Art's Science & Commerce, Located in Wadala, Mumbai, Maharashtra, India."
              link="https://nkes.in/"
              collegeLinkname="Nkes Junior College - Website Link"
              studentName="HSC Result of Student: Mohammad Adil Shaikh"
              sem1="HSC Percentage - 72.00 % Out of 100."
              total="Total HSC Percentage: 72.00 / 100."
              onClose={() => setViewPerformance("")}
            />
          )}
          {viewPerformance === "ssc" && (
            <EducationInformation
              title="St. Joseph High School"
              img={stjoseph}
              description="St. Joseph High School, Located in Kurla West, New Mill Road, Mumbai, Maharashtra, India - 400070."
              link="https://www.stjosephhighschoolkurlawest.com/"
              collegeLinkname="St.Joseph High School - Website Link"
              studentName="SSC Result of Student: Mohammad Adil Shaikh"
              sem1="SSC Percentage - 60.00 % / 100"
              total="Total SSC Percentage: 60.00 / 100."
              onClose={() => setViewPerformance("")}
            />
          )}
        </div>
      )}
    </>
  );
}

function EducationInformation(props) {
  const { onClose } = props;
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl p-5 md:p-6 bg-white text-black rounded-xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto shadow-2xl relative"
    >
      <div className="flex justify-end top-0 bg-white py-1 z-10">
        <button onClick={onClose} className="p-1 hover:bg-gray-400/50 rounded-full transition">
          <img src={cancel} alt="cancel Symbol" className="w-6 h-6 cursor-pointer" />
        </button>
      </div>
      
      <h1 className="text-left text-neutral-800 text-xl md:text-2xl font-bold playwrite">
        {props.title}
      </h1>
      
      <img
        src={props.img}
        alt="College display"
        className="w-full h-48 md:h-80 object-cover rounded-lg"
      />
      
      <h3 className="text-sm md:text-base font-medium">{props.description}</h3>
      
      <a href={props.link} target="_blank" rel="noreferrer" className="text-blue-700 underline font-semibold text-sm md:text-base break-words">
        {props.collegeLinkname}
      </a>
      
      <p className="font-semibold text-neutral-700 text-sm md:text-base">{props.studentName}</p>

      <ul className="list-disc pl-5 flex flex-col gap-1 text-sm md:text-base">
        {props.sem1 && <li><h3>{props.sem1}</h3></li>}
        {props.sem2 && <li><h3>{props.sem2}</h3></li>}
        {props.sem3 && <li><h3>{props.sem3}</h3></li>}
        {props.sem4 && <li><h3>{props.sem4}</h3></li>}
        {props.sem5 && <li><h3>{props.sem5}</h3></li>}
        {props.sem6 && <li><h3>{props.sem6}</h3></li>}
      </ul>
      
      <h2 className="text-lg md:text-xl font-bold border-t border-gray-400 pt-3 mt-2">{props.total}</h2>
    </motion.section>
  );
}