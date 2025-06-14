import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 border-t border-gray-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        {/* Left: Branding */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Favour Idoko</h3>
          <p className="text-gray-400">Frontend Developer | React & Next.js</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center md:justify-end gap-4">
          <a
            href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/favouridoko1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      <div className="text-start text-gray-500 text-xs pb-6">
        © {new Date().getFullYear()} Favour Idoko. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;










// import React from "react";
// import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
// import { useTheme } from "@/context/ThemeProvider";

// const Footer = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <footer className="bg-[#0d0d0d] dark:bg-pink-500 text-gray-400 dark:text-black py-8 mt-20 border-t border-[#1a1a1a] dark:border-gray-200">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
//         <p className="text-center">
//           © {new Date().getFullYear()} Favour Idoko — All rights reserved.
//         </p>

//         <div className="flex items-center gap-4">
//           <a
//             href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
//             target="_blank"
//             className="hover:text-yellow-400 dark:hover:text-yellow-600 transition"
//           >
//             <FaLinkedin size={20} />
//           </a>
//           <a
//             href="https://github.com/favouridoko1"
//             target="_blank"
//             className="hover:text-yellow-400 dark:hover:text-yellow-600 transition"
//           >
//             <FaGithub size={20} />
//           </a>
//           <button
//             onClick={toggleTheme}
//             className="hover:text-yellow-400 dark:hover:text-yellow-600 transition"
//             aria-label="Toggle Theme"
//           >
//             {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

