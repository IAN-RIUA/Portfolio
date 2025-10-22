import React from "react";

const navigation = [
  { name: "GitHub", href: "https://github.com/IAN-RIUA" },
  { name: "LinkedIn", href: "https://linkedin.com/in/ianriua" },
  { name: "X", href: "https://x.com" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0F19] border-t border-[#14B8A6]/20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-[#94A3B8]">
        <div className="flex gap-6 mb-4 md:mb-0">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FACC15] transition"
            >
              {item.name}
            </a>
          ))}
        </div>
        <p className="text-sm">© 2025 Ian Riua. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
