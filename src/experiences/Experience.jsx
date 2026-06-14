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
      initial={{ opacity: 0, y: 30, filter: "blur(100px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1 }}
      className="text-black p-4 md:p-10 text-lg flex flex-col gap-8 md:gap-10 items-center overflow-hidden"
    >
      <motion.h1 className="italic text-3xl md:text-4xl font-bold text-center tracking-wide">
        Work Experience
      </motion.h1>
      
      <motion.div className="w-full max-w-5xl p-5 md:p-8 rounded-xl flex flex-col gap-6 border-2 md:border-4 border-black/50 bg-white shadow-xl">
        <div className="flex flex-col gap-4">
          <img 
            src={codec} 
            alt="Company Logo" 
            className="w-40 md:w-52 object-contain rounded-md" 
          />
          <address className="not-italic text-sm md:text-base text-black max-w-xl leading-relaxed">
            Headquarters: 211B, Saki Vihar Road, West Chandivali IT Hub, Powai,
            Mumbai, Maharashtra 400076
          </address>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
          <div className="flex flex-col w-full h-full">
            <SameCard
              name="Offer Letter"
              img={offerLetter}
              alt="Company Offer Letter"
              width="w-full"
              height="h-full"
            />
          </div>
          <div className="flex flex-col w-full h-full">
            <SameCard
              name="Letter Of Recommendation"
              img={lor}
              alt="Company Recommendation Letter"
              width="w-full"
              height="h-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;