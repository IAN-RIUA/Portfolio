import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="text-center py-16 bg-[#0B0F19]">
      <h2 className="text-3xl font-semibold text-[#14B8A6] mb-4">Let's Connect</h2>
      <p className="text-[#94A3B8] mb-6">
        Reach out for collaborations, opportunities, or data discussions.
      </p>
      <a
        href="mailto:ianriuam@gmail.com"
        className="bg-[#14B8A6] text-[#0B0F19] px-6 py-3 rounded-full font-semibold hover:bg-[#FACC15] transition duration-300"
      >
        Contact Me
      </a>
    </section>
  );
};

export default ContactSection;
