"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import animaImage from "../../../public/profile_pic1.svg";
import { about_me, techStackIcons, myProjectsData } from "@/app/data/data";
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
  const navigate = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <main className="">
        <nav className="mx-auto text-[#fff] flex flex-col lg:flex-row items-center justify-around mt-9 mb-12 overflow-hidden ">
          <motion.section
            className="text-center sm:text-left w-4/5 sm:w-2/4 mt-5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <h3 className="text-[19px] sm:text-2xl font-bold text-[#EAB308]">
              Hello, I am Favour Idoko,
            </h3>
            <p className="text-3xl sm:text-4xl font-bold text-nowrap">
              Frontend Developer
            </p>
            <p className="text-sm lg:max-w-96 my-2 text-[#afadad]">
              I design and write maintanable clean, elegant and efficient code
            </p>
            <motion.button
              onClick={() => navigate("#contact")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className=" my-3 p-1 font-medium rounded hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-gray-600	"
            >
              Contact Me
            </motion.button>
          </motion.section>
          <section className="sm:my-7 py-2 sm:py-0">
            <Image
              src={animaImage}
              alt="Animaa image"
              className="shadow-lg rounded-full bg-black z-10 animate-floating w-[97%] sm:w-full self-center"
            />
          </section>
        </nav>
        <section
          className="text-[#fff] items-center justify-center text-center flex flex-col gap-4"
          id="skills"
        >
          <ul className="mt-11">
            <li className="text-center font-bold text-3xl">MY TECH STACK</li>
            <li className="text-center text-md text-lg ">
              Technologies I’ve been working with recently
            </li>
          </ul>
          <ul className="w-full bg-[#080808] p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-center mx-auto">
            {techStackIcons.map((items: StackImages) => (
              <li
                key={items.id}
                className="flex justify-center flex-col items-center my-3"
              >
                <Image src={items.url} alt="" />
                <p className="font-xs">{items.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="my-14 text-[#fff] " id="projects">
          <h3 className="text-center font-bold text-3xl ">PROJECTS</h3>
          <p className="text-center text-md text-lg mb-0">
            Things I’ve built so far
          </p>
          <main className="py-8 px-4 grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myProjectsData?.map((items: CardProps) => (
              <ul
                className="bg-[#080808] p-4 rounded transition-all duration-500 ease-in-out hover:scale-105"
                key={items.id}
              >
                <li className="grid gap-2">
                  <Image src={items.laptop_img} alt={items.laptop_img} />
                  <p>{items.description}</p>
                  <div className="flex justify-between">
                    <Link
                      href={items.github_repository}
                      target="_blank"
                      className="py-1 px-2 font-semibold rounded hover:bg-[#f8d95e] bg-[#FACC15] flex items-center gap-1 active:bg-[#e9c537] text-gray-600 w-fit"
                    >
                      Gitbub Repo
                    </Link>
                    <Link
                      href={items.live_url}
                      target="_blank"
                      className="py-1 px-2 font-semibold rounded hover:bg-[#f8d95e] bg-[#FACC15] flex items-center gap-1 active:bg-[#e9c537] text-gray-600 w-fit"
                    >
                      Demo
                    </Link>
                  </div>
                </li>
              </ul>
            ))}
          </main>
        </section>
        <section
          className="mb-16 text-[#fff] flex justify-center items-center flex-col"
          id="about"
        >
          <h1 className="font-bold text-3xl my-4">
            ABOUT <span className="text-[#EAB308]">ME</span>
          </h1>
          {about_me.map((items, index) => (
            <div
              className="w-full mx-auto p-8 bg-[#080808] justify-center items-center lg:flex"
              key={index}
            >
              <figure className="lg:w-6/12 flex flex-col items-center">
                <Image
                  src={items.img_url}
                  alt={items.img_url}
                  className="lg:w-[98%] xl:w-[57%]"
                />
              </figure>
              <article className="lg:w-6/12 flex flex-col items-center py-2 md:py-0">
                <p
                  className="w-[100%] justify-self-center md:w-[90%]"
                  key={index}
                >
                  {items.description}
                </p>
              </article>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Hero;
