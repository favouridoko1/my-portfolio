"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import menu_icon from "../../../public/menu_icon.svg";
import close_icon from "../../../public/close_icon.svg";
import linkedIn_icon from "../../../public/linkedin_icon.svg";
import github_icon from "../../../public/github_logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Skills", route: "/skills" },
  { name: "About", route: "/about" },
  { name: "Projects", route: "/projects" },
  { name: "Contact", route: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        timeout = setTimeout(() => setShowHeader(false), 100);
      } else if (lastScrollY - currentScrollY > 10) {
        setShowHeader(true);
        clearTimeout(timeout);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-neutral-800"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
              <Link href="/" className="text-2xl font-extrabold text-white">
                FAVOUR<span className="text-yellow-400">IDOKO</span>
              </Link>

              <nav className="hidden md:flex gap-6 items-center">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.route}
                    className="text-sm font-medium text-gray-400 hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                ))}

                <Link
                  href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400"
                >
                  <Image src={linkedIn_icon} alt="LinkedIn" />
                  LinkedIn
                </Link>

                <Link
                  href="https://github.com/favouridoko1"
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-yellow-400"
                >
                  <Image src={github_icon} alt="GitHub" />
                  GitHub
                </Link>

                <Link
                  href="/FavourIdoko.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-yellow-400 text-gray-900 font-semibold px-3 py-1 rounded hover:bg-yellow-300"
                >
                  Resume <GoDownload />
                </Link>
              </nav>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                <Image
                  src={menuOpen ? close_icon : menu_icon}
                  alt="menu"
                  className="w-8 h-8"
                />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {menuOpen && (
        <div className="md:hidden bg-neutral-900 text-white fixed top-0 left-0 h-screen w-2/3 z-40 shadow-lg px-6 py-6 flex flex-col gap-6 overflow-y-auto">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium hover:text-yellow-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="text-sm hover:text-yellow-400"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/favouridoko1"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="text-sm hover:text-yellow-400"
          >
            GitHub
          </Link>

          <Link
            href="/FavourIdoko.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1 text-sm bg-yellow-400 text-gray-900 font-medium px-3 py-1 rounded hover:bg-yellow-300"
          >
            Resume <GoDownload />
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
