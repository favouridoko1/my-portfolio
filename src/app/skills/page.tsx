"use client";
import RevealOnScroll from "@/animations/page";
import React from "react";
import { techStackIcons } from "../data/data";
import Image from "next/image";
import { motion } from "framer-motion";

interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Skills = () => {
  return (
    <RevealOnScroll variant="fadeIn">
      <section className="flex flex-col items-center gap-10 px-4 py-16">
        {/* Title & Description */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#FACC15] tracking-tight">
            My Tech Stack
          </h2>
          <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto leading-relaxed">
            Behind every polished interface is a stack of tools working in
            harmony. These are the technologies I love — the brushes and paints
            I use to bring ideas to life on the web.
          </p>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-8">
          {techStackIcons.map((items: StackImages) => (
            <motion.li
              key={items.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="bg-[#111] rounded-xl w-[120px] h-[130px] flex flex-col items-center justify-center shadow-inner border border-[#222] hover:shadow-[#facc15]/40 transition"
            >
              <Image
                src={items.url}
                alt={items.description}
                width={40}
                height={40}
                className="mb-3"
              />
              <p className="text-sm text-[#ccc] text-center">
                {items.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>
    </RevealOnScroll>
  );
};

export default Skills;
