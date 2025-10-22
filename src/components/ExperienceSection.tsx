import React from "react";

interface Experience {
  role: string;
  date: string;
  desc: string;
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl text-center font-semibold text-[#14B8A6] mb-12">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.role}
            className="bg-[#1E293B] rounded-xl p-6 border border-[#14B8A6]/20"
          >
            <h3 className="text-xl font-semibold text-[#FACC15]">{exp.role}</h3>
            <p className="text-sm text-[#94A3B8] mb-2">{exp.date}</p>
            <p className="text-[#CBD5E1] text-sm">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
