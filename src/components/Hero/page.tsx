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
    <main className="text-white my-24 md:px-6">
      {/* HERO SECTION */}
      <nav className="mx-auto flex flex-col lg:flex-row items-center justify-around gap-8 py-6 max-w-6xl">
        <RevealOnScroll variant="fadeUp">
          <section className="text-center lg:text-left w-full">
            <h3 className="text-2xl sm:text-4xl font-bold text-[#EAB308] whitespace-nowrap">
              Hey, I’m Favour Idoko
            </h3>
            <p className="text-2xl sm:text-4xl font-bold mt-2 ">
              I build beautiful, performant web apps.
            </p>
            <p className="text-base sm:text-lg mt-4 text-[#afadad] font-mono leading-relaxed " >
              I’m a frontend developer who’s passionate about crafting
              responsive, pixel-perfect UIs with a great user experience. I work
              with <span className="text-white font-semibold glow-angular">Angular</span>,{" "} <span className="text-white font-semibold glow-react">React</span>,{" "}
              <span className="text-white font-semibold glow-next">Next.js</span>, and{" "}
              <span className="text-white font-semibold glow-tailwind">Tailwind CSS</span> to
              ship fast, maintainable code that scales.
            </p>

            <p className="text-base sm:text-lg mt-2 text-[#afadad] font-mono leading-relaxed">
              Whether it’s a portfolio site or a SaaS dashboard, I blend
              creativity and performance to build experiences users love.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
              <motion.button
                className="btn-primary"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </motion.button>
              <Link href="/projects" className="btn-secondary">
                See My Work
              </Link>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll variant="zoomIn" delay={0.2}>
          <section className="mt-10 sm:mt-0 flex justify-center lg:justify-end p-4 lg:p-0">
            <div className="relative ">
              <img
                src="/profile_pic1.jpg"
                alt="Profile Picture"
                className="rounded-[30px] shadow-2xl object-cover w-full h-full border-4 border-yellow-400"
              />
            </div>
          </section>
        </RevealOnScroll>
      </nav>
    </main>
  );
};

export default Hero;
