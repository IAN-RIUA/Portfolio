import { motion } from "framer-motion";
import React from "react";

interface Project {
  title: string;
  desc: string;
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl text-center font-semibold text-[#14B8A6] mb-12">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((proj) => (
          <motion.a
            key={proj.title}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B0F19] border border-[#14B8A6]/30 rounded-2xl p-6 hover:border-[#FACC15]/70 hover:shadow-[0_0_15px_#14B8A6] transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-[#FACC15] mb-2">
              {proj.title}
            </h3>
            <p className="text-[#CBD5E1] text-sm">{proj.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
