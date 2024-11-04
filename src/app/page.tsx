"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/page";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="">
      <motion.div
        style={{ scaleX }}
        className="fixed bottom-0 left-0 right-0 h-[8px] bg-[#EAB308] transform origin-left"
      />
      <Header />
      <Hero />
      <Contact/>
    </div>
  );
}
