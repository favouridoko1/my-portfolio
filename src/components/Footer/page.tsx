import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-[#1a1a1a] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section: Brand Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold tracking-tight">
            Favour Idoko
          </h3>
          <p className="mt-2 text-base text-gray-100 leading-relaxed">
            Frontend Developer — React & Next.js Specialist
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex items-center space-x-5">
          <a
            href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-200 hover:text-[#FACC15] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/favouridoko1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-200 hover:text-[#FACC15] transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 pb-6 px-4">
        © {new Date().getFullYear()} <span className="text-white font-medium">Favour Idoko</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
