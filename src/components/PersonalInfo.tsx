import { motion } from "framer-motion";
import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#020617] to-[#0B0F19]">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-[#FACC15] mb-4"
      >
        Ian Riua
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl text-[#14B8A6] font-semibold mb-4"
      >
        Data Analyst | Python & SQL Developer | Data Science & IT Specialist
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="max-w-2xl text-[#CBD5E1] text-lg leading-relaxed mb-8"
      >
        I’m a data-driven problem solver passionate about turning information into insights and 
        transforming complex datasets into meaningful stories. With a foundation in web 
        development and analytics, I bridge design, data, and innovation to craft impactful 
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-4"
      >
        <a
          href="#projects"
          className="bg-[#14B8A6] text-[#0B0F19] px-6 py-3 rounded-full font-semibold hover:bg-[#FACC15] transition duration-300"
        >
          View Projects
        </a>
        <a
          href="mailto:ianriuam@gmail.com"
          className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-full font-semibold hover:bg-[#14B8A6]/10 transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default PersonalInfo;
