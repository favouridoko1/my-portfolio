"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoDownload } from "react-icons/go";
import menu_icon from "../../../public/menu_icon.svg";
import close_icon from "../../../public/close_icon.svg";
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

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastY || currentY < 100);
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
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
              </nav>

              <Link
                href="/FavourIdoko.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 bg-yellow-400 text-gray-900 font-semibold px-3 py-1 rounded hover:bg-yellow-300"
              >
                Resume <GoDownload />
              </Link>

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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 z-50 bg-[#000000] text-white px-6 py-8 flex flex-col gap-6 overflow-y-auto shadow-xl"
            >
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium border-b border-neutral-700 pb-2 hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/FavourIdoko.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-base bg-yellow-400 text-gray-900 font-medium px-4 py-2 rounded hover:bg-yellow-300 mt-4"
            >
              Resume <GoDownload />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
