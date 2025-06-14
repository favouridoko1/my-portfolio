"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import animaImage from "../../../public/profile_pic1.jpg";
import { techStackIcons, myProjectsData } from "@/app/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

interface CardProps {
  id: number;
  laptop_img: any;
  chain_icon: any;
  github_icon: any;
  description: string;
  github_repository: string;
  live_url: string;
}

interface StackImages {
  id: number;
  url: any;
  description: string;
}

const Hero = () => {
  const router = useRouter();
  const navigate = (page: string) => router.push(page);

  return (
    <main className="text-white">
      {/* HERO SECTION */}
      <nav className="mx-auto flex flex-col lg:flex-row items-center justify-around mt-12 mb-16 px-4">
        <motion.section
          className="text-center sm:text-left w-full sm:w-2/3 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#EAB308] whitespace-nowrap">
            Hello, I am Favour Idoko
          </h3>
          <p className="text-3xl sm:text-4xl font-bold mt-2">
            Frontend Developer
          </p>
          <p className="text-base sm:text-lg mt-3 text-[#afadad] font-mono leading-relaxed max-w-md">
            I design and write maintainable, clean, elegant, and efficient code.
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
        </motion.section>

        {/* IMAGE SECTION */}
        <section className="mt-10 sm:mt-0">
  <img
    src="/profile_pic1.jpg"
    alt="Profile Picture"
    className="shadow-xl animate-floating rounded-full w-[400px] h-[400px] object-cover"
  />
</section>

      </nav>

      {/* TECH STACK SECTION */}
      <section className="flex flex-col items-center gap-6 px-4" id="skills">
        <div className="text-center">
          <h2 className="text-3xl font-bold">MY TECH STACK</h2>
          <p className="text-lg text-[#ccc]">
            Technologies I’ve been working with recently
          </p>
        </div>
        <ul className="w-full max-w-7xl grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 p-6 bg-[#080808] rounded-lg">
          {techStackIcons.map((items: StackImages) => (
            <li
              key={items.id}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <Image
                src={items.url}
                alt={items.description}
                width={50}
                height={50}
              />
              <p className="text-sm text-center">{items.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTS SECTION */}
      <section className="my-20 px-4" id="projects">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">PROJECTS</h3>
          <p className="text-lg text-[#ccc]">Things I’ve built so far</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {myProjectsData?.map((items: CardProps) => (
            <div
              key={items.id}
              className="bg-[#080808] rounded-lg p-4 hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src={items.laptop_img}
                alt="Project"
                className="rounded-md"
              />
              <p className="my-3 text-sm">{items.description}</p>
              <div className="flex gap-3 mt-2">
                <Link
                  href={items.github_repository}
                  target="_blank"
                  className="px-4 py-1 text-sm font-medium bg-[#FACC15] text-gray-800 rounded hover:bg-[#f8d95e]"
                >
                  GitHub Repo
                </Link>
                <Link
                  href={items.live_url}
                  target="_blank"
                  className="px-4 py-1 text-sm font-medium bg-[#FACC15] text-gray-800 rounded hover:bg-[#f8d95e]"
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section
        id="about"
        className="mb-20 text-white flex flex-col items-center justify-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
          ABOUT <span className="text-[#EAB308]">ME</span>
        </h2>

        <div className="w-full max-w-6xl bg-[#080808] rounded-xl shadow-md flex flex-col lg:flex-row items-center gap-10 p-6 sm:p-10">
          {/* Profile Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/profile_pic1.jpg"
              alt="Favour Idoko"
              className="rounded-2xl object-cover w-full max-w-[400px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold">
              Know Who <span className="text-[#EAB308]">I'M</span>
            </h3>

            <p className="text-[#d0d0d0] leading-relaxed">
              I'm <strong>Favour Idoko</strong>, a Frontend Developer based in
              Lagos, Nigeria. I specialize in building visually stunning and
              highly interactive web applications that are both user-friendly
              and performance-optimized.
            </p>

            <p className="text-[#d0d0d0] leading-relaxed">
              With a strong background in{" "}
              <strong>React.js, Next.js, TypeScript, and Tailwind CSS</strong>,
              I’ve contributed to multiple projects across diverse
              industries—from finance and healthcare to education and ecommerce.
              My goal is always to deliver clean, scalable, and maintainable
              code while collaborating closely with teams and clients.
            </p>

            <p className="text-[#d0d0d0] leading-relaxed">
              I’m passionate about learning and staying ahead of industry
              trends. I love turning creative ideas into real products and
              believe in the power of technology to solve real-world problems.
              Whether it’s building dashboards, landing pages, or full-scale
              applications—I’m always excited to build.
            </p>

            <p className="text-[#d0d0d0] leading-relaxed">
              Outside of coding, I enjoy reading, exploring new UI/UX
              techniques, and occasionally mentoring junior developers.
            </p>

            <p className="text-[#FACC15] text-sm italic">
              "The difference between good and great is attention to detail —
              and I bring that to every line of code I write."
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
