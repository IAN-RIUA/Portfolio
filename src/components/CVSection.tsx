import React from "react";

const CvSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold text-[#14B8A6] mb-6">My CV</h2>
      <p className="text-[#94A3B8] mb-4">Download or view my full CV below.</p>

      <a
  href="https://onedrive.live.com/download?cid=XXXXXXXXXXXXX&id=XXXXXXXXXXXXX%21123"
  download
  className="bg-[#14B8A6] text-[#0B0F19] px-6 py-3 rounded-full font-semibold hover:bg-[#FACC15] transition duration-300"
>
  Download CV
</a>

      <div className="mt-8">
        <iframe
          src="/CV_2025.pdf"
          className="w-full h-[800px] border border-[#1E293B] rounded-xl"
          title="Ian Riua CV"
        ></iframe>
      </div>
    </section>
  );
};

export default CvSection;
