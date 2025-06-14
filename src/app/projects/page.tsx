"use client";
import RevealOnScroll from "@/animations/page";
import { techStackIcons, myProjectsData } from "@/app/data/data";
import Image from "next/image";
import Link from "next/link";

import React from "react";
interface CardProps {
  id: number;
  title: string;
  laptop_img: any;
  chain_icon: any;
  github_icon: any;
  description: string;
  github_repository: string;
  live_url: string;
}

const Projects = () => {
  return (
    <RevealOnScroll variant="slideRight">
      <section className="my-24 px-4 sm:px-8 lg:px-16 w-full">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-white">
            Selected <span className="text-[#FACC15]">Projects</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            A curated collection of real-world solutions I've built — showcasing
            my skills in UI design, frontend architecture, and responsive
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {myProjectsData?.map((items: CardProps) => (
            <div
              key={items.id}
              className="bg-[#111111] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="relative group">
                <Image
                  src={items.laptop_img}
                  alt={items.title || "Project Preview"}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <div className="p-6 flex flex-col gap-4">
                {/* Title */}
                <h4 className="text-white text-lg font-semibold">
                  {items.title || "Untitled Project"}
                </h4>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {items.description}
                </p>

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2 mt-2">
                  {techStackIcons?.map((Icon, index) => (
                    <span
                      key={index}
                      className="text-[#FACC15] bg-[#1a1a1a] px-2 py-1 rounded text-xs"
                    >
                      {Icon.name}
                    </span>
                  ))}
                </div> */}

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                  <Link
                    href={items.live_url}
                    target="_blank"
                    className="px-4 py-2 text-sm font-semibold bg-[#FACC15] text-black rounded hover:bg-yellow-400 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={items.github_repository}
                    target="_blank"
                    className="px-4 py-2 text-sm font-semibold border border-[#FACC15] text-[#FACC15] rounded hover:bg-[#facc1533] transition"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default Projects;
