"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import animaImage from "../../../public/profile_pic1.jpg";
import { techStackIcons, myProjectsData } from "@/app/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import RevealOnScroll from "@/animations/page";

const Hero = () => {
  const router = useRouter();
  const navigate = (page: string) => router.push(page);

  return (
    // Inside your return()
    <main className="text-white">
      {/* HERO SECTION */}
      <nav className="mx-auto flex flex-col lg:flex-row items-center justify-around mt-12 mb-16 px-4">
        <RevealOnScroll variant="fadeUp">
          <section className="text-center sm:text-left w-full sm:w-2/3 lg:w-1/2">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#EAB308] whitespace-nowrap">
              Hello, I am Favour Idoko
            </h3>
            <p className="text-3xl sm:text-4xl font-bold mt-2">
              Frontend Developer
            </p>
            <p className="text-base sm:text-lg mt-3 text-[#afadad] font-mono leading-relaxed max-w-md">
              I design and write maintainable, clean, elegant, and efficient
              code.
            </p>
            <motion.button
              onClick={() => navigate("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mt-6 px-6 py-2 rounded-md bg-[#FACC15] text-gray-800 font-semibold hover:bg-[#f8d95e] active:bg-[#e9c537]"
            >
              Contact Me
            </motion.button>
          </section>
        </RevealOnScroll>

        <RevealOnScroll variant="zoomIn" delay={0.2}>
          <section className="mt-10 sm:mt-0">
            <img
              src="/profile_pic1.jpg"
              alt="Profile Picture"
              className="shadow-xl animate-floating rounded-full w-[400px] h-[400px] object-cover"
            />
          </section>
        </RevealOnScroll>
      </nav>  
    </main>
  );
};

export default Hero;
