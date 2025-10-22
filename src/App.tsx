import React from "react";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import CvSection from "./components/CvSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PersonalInfo from "./components/PersonalInfo";

const App: React.FC = () => {
  const projects = [
    { title: "Sales Dashboard", desc: "Power BI and Python insights", link: "#" },
    { title: "Hospital Data Tracker", desc: "Real-time healthcare analytics", link: "#" },
  ];

  const experiences = [
    {
      role: "Data Analyst Intern – The Nairobi Hospital",
      date: "Oct 2025 – Present",
      desc: "Collected, cleaned, and analyzed datasets to identify KPIs.",
    },
  ];

  return (
    <main className="bg-[#020617] text-white font-sans">
      <PersonalInfo />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <CvSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default App;
