"use client";
import React from "react";
import RevealOnScroll from "@/animations/page";
import { motion } from "framer-motion";

const About = () => {
  return (
    <RevealOnScroll variant="fadeUp">
      <section
        className="my-24 md:py-0  md:px-6 text-white flex flex-col items-center "
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          <span className="text-[#EAB308]">About</span> Me
        </h2>

        <div className="w-full max-w-[2000px] bg-none  rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 sm:p-12">
          {/* Image Section */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <img
              src="/profile_pic1.jpg"
              alt="Favour Idoko"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-[380px] h-auto"
            />
          </motion.div>

          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <h3 className="text-3xl font-bold">
              I’m <span className="text-[#FACC15]">Favour Idoko</span>
            </h3>
            <p className="text-[#d0d0d0] leading-relaxed">
              I’m <strong>Favour Idoko</strong>, a Frontend Developer based in
              Lagos, Nigeria, passionate about creating beautiful, user-focused
              digital experiences. My work centers around writing clean,
              efficient code and building interfaces that feel as good as they
              look.
            </p>

            <p className="text-[#d0d0d0] leading-relaxed">
              I specialize in modern technologies like <span className="text-white font-semibold glow-angular">Angular</span>,{" "} <span className="text-white font-semibold glow-react">React</span>,{" "}
              <span className="text-white font-semibold glow-next">Next.js</span>, and{" "}
              <span className="text-white font-semibold glow-tailwind">Tailwind CSS</span>, and I’m constantly exploring new
              tools that help bridge design and functionality. From smooth page
              transitions to dynamic animations, I obsess over the little
              details that elevate a product from usable to unforgettable.
            </p>

            <p className="text-[#d0d0d0] leading-relaxed">
              Over the years, I’ve worked on a range of projects — from building
              scalable dashboards to crafting responsive landing pages. I value
              clarity in code, seamless collaboration, and maintainable
              architecture that future developers will thank me for.
            </p>

            {/* <p className="text-[#d0d0d0] leading-relaxed">
                Outside of development, I’m deeply curious. I enjoy solving
                problems, learning new techniques, and improving my skills
                through continuous iteration. Every project is an opportunity to
                level up — not just in tech, but in storytelling and impact.
              </p>*/}

            <p className="text-[#FACC15] text-sm italic">
              "The difference between good and great is attention to detail —
              and I bring that to every line of code I write."
            </p>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  );
};

export default About;
