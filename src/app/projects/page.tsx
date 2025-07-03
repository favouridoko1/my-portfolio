"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { myProjectsData } from "@/app/data/data";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  project_img: any;
  description: string;
  github_repository: string;
  live_url: string;
  tech_stack?: string[];
}

const Projects = () => {
  const duplicatedProjects = [...myProjectsData, ...myProjectsData];
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v % (duplicatedProjects.length * 520)}px`);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    baseX.set(baseX.get() - delta * 0.05); 
  });

  return (
    <section className="py-24 w-full overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">
          Featured <span className="text-yellow-400">Work</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          A rotating reel of the projects I’ve crafted — built with care, performance, and design precision.
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div ref={containerRef} className="w-full overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-6 lg:px-16">
          {duplicatedProjects.map((item: ProjectCardProps, index) => (
            <div
              key={index}
              className="min-w-[320px] sm:min-w-[400px] lg:min-w-[500px] bg-[#111111] rounded-2xl shadow-lg border border-[#1a1a1a] p-5 flex flex-col justify-between group hover:border-yellow-500/40 hover:shadow-yellow-400/10 transition-all duration-300"
            >
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={item.project_img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <div className="mt-4 flex-1 flex flex-col">
                <h4 className="text-white text-lg font-semibold mb-1 group-hover:text-yellow-400 transition">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {item.description?.length > 120
                    ? item.description.slice(0, 120) + "..."
                    : item.description}
                </p>

                {item.tech_stack && (
                  <div className="flex flex-wrap gap-2 text-xs mb-4">
                    {item.tech_stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#1a1a1a] text-yellow-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex gap-3">
                  <Link
                    href={item.live_url}
                    target="_blank"
                    className="px-4 py-2 text-sm font-semibold bg-yellow-400 text-black rounded hover:bg-yellow-300 transition"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={item.github_repository}
                    target="_blank"
                    className="px-4 py-2 text-sm font-semibold border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-500/10 transition"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
