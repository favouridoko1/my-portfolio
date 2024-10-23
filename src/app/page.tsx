"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/Components/Header/page";
import menu_icon from "../../public/menu_icon.svg";
import linkedIn_icon from "../../public/linkedin_icon.svg";
import github_icon from "../../public/github_logo.svg";
// let PDF_FILE_URL = 'http://localhost:7000/file_pdf.pdf'
import { GoDownload } from "react-icons/go";
import animaImage from "../../public/profile_pic1.svg";
import { techStackIcons } from "./data/data";
// import { myProjectsData } from "../../app/data/data";
import { myProjectsData } from './data/data'
import profile_rectangle from "../../public/profile_rectangle.svg";
// import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
// import Contact_me from "../Contact_me/Contact_me";
import Link from "next/link";
// import Cards from "../Projects_Card/Cards";
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed bottom-0 left-0 right-0 h-[8px] bg-[#EAB308] transform origin-left"
      />
      <div>
        <header className="sticky top-0 left-0 right-0 z-20">
          <ul className="border-b border-[#292929] py-4 flex justify-around items-center bg-[#2b2b2b]">
            <li className="text-[#f6f6f6] font-bold text-xl">
              <Link href="/">
                FAVOUR<span className="text-[#EAB308]">IDOKO</span>
              </Link>
            </li>
            <li className="hidden md:flex gap-4 ">
              <Link
                href=""
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                Home
              </Link>
              <Link
                href="#skills"
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                Skills
              </Link>
              <Link
                href="#about_me"
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                Projects
              </Link>
              <Link
                href="#contact_me"
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                Contact
              </Link>
            </li>
            <li className="flex gap-5">
              <Link
                href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
                target="_blank"
                className="hidden md:flex gap-1 items-center text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                {" "}
                <Image src={linkedIn_icon} alt="linkedin" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/favouridoko1"
                target="_blank"
                className="hidden md:flex gap-1 items-center text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                <Image src={github_icon} alt="" />
                Github
              </Link>
            </li>
            <li>
              <Link
                href="./file_pdf.pdf"
                target="_blank"
                rel="noopener noreferer"
                className=" my-1 py-1 px-2 font-medium rounded-md transition  hover:bg-[#f8d95e] bg-[#FACC15] items-center gap-1 active:bg-[#e9c537] text-gray-600 hidden md:flex"
              >
                Resume
                <GoDownload />
              </Link>
            </li>
            <li className="">
              <Image
                src={menu_icon}
                alt=""
                className=" block md:hidden pointer"
              />
            </li>
          </ul>
        </header>
        <main className="">
          <nav className="mx-auto text-[#fff] flex flex-col lg:flex-row items-center justify-around mt-9 mb-12 overflow-hidden ">
            <section className="text-center sm:text-left w-4/5 sm:w-2/4 mt-5">
              <h3 className="text-[19px] sm:text-2xl font-bold text-[#EAB308]">
                Hello, I am Favour Idoko,
              </h3>
              <p className="text-3xl sm:text-4xl font-bold text-nowrap">
                Frontend Developer
              </p>
              <p className="text-sm lg:max-w-96 my-2 text-[#afadad]">
                I design and write maintanable clean, elegant and efficient code
              </p>
              <Link
                href="#contact_me"
                className=" my-3 p-2 font-medium rounded-md transition  hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-gray-600	"
              >
                Contact Me
              </Link>
            </section>
            <section className="sm:my-7 py-2 sm:py-0">
              <Image
                src={animaImage}
                alt="Animaa image"
                className="shadow-lg rounded-full bg-black z-10 animate-floating"
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
                  <p className="font-medium">{items.description}</p>
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
              {myProjectsData?.map((items) => (
                <ul className="bg-[#080808] p-4 rounded transition-all duration-500 ease-in-out hover:scale-105">
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

              {/* <motion.div
            className="absolute left-0 flex gap-6 "
            ref={ref}
            style={{ x: xTranslation }}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }} */}
              {/* > */}
              {/* {[...myProjectsData, ...myProjectsData].map((item, index) => (
              <Cards
                laptop_img={item.laptop_url}
                chain_icon={item.chain_icon}
                description={item.description}
                key={item.id}
              />
            ))} */}
              {/* </motion.div> */}
            </main>
          </section>
          <section
            className="mb-16 text-[#fff] flex justify-center items-center flex-col"
            id="about_me"
          >
            <h1 className="font-bold text-3xl my-4">
              ABOUT <span className="text-[#EAB308]">ME</span>
            </h1>
            <div className="w-full mx-auto p-8 bg-[#080808] justify-center items-center lg:flex">
              <figure className="lg:w-6/12 flex flex-col items-center">
                <Image
                  src={profile_rectangle}
                  alt={profile_rectangle}
                  className="lg:w-[98%] xl:w-[57%]"
                />
              </figure>
              <article className="lg:w-6/12 flex flex-col items-center py-2 md:py-0">
                <p className="w-[100%] justify-self-center md:w-[90%] ">
                  I'm a passionate, self-proclaimed designer who specializes in
                  full stack development (React.js & Node.js). I am very
                  enthusiastic about bringing the technical and visual aspects
                  of digital products to life. User experience, pixel perfect
                  design, and writing clear, readable, highly performant code
                  matters to me. I began my journey as a web developer in 2023,
                  and since then, I've continued to grow and evolve as a
                  developer, taking on new challenges and learning the latest
                  technologies along the way. with over 1 years after starting
                  my web development journey, I'm building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more. When
                  I'm not in full-on developer mode, you can find me hovering
                  around on twitter or on indie hacker, witnessing the journey
                  of early startups or enjoying some free time. You can follow
                  me on Twitter where I share tech-related bites and build in
                  public, or you can follow me on GitHub
                </p>
              </article>
            </div>
          </section>
          <section className="w-full " id="contact_me">
            <h1 className="font-bold text-3xl my-2 text-center text-[#fff]">
              CONTACT <span className="text-[#EAB308]">ME</span>
            </h1>
            <section className="sm:flex justify-center ">
              <form action="" className="gap-4 flex flex-col sm:w-[40%] p-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="text-md p-2 rounded outline-none text-[#858585]"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="text-md p-2 rounded outline-none text-[#858585]"
                />
                <textarea
                  rows={4}
                  cols={50}
                  name="comment"
                  form="usrform"
                  className="text-[#9e9e9e] p-1"
                >
                  Enter your message please...
                </textarea>
                <button className="hover:bg-[#f8d95e] bg-[#FACC15] p-2 w-fit rounded active:bg-[#e9c537] text-[#fff]">
                  Get in touch
                </button>
              </form>
              <article className="text-[#fff] p-4 flex flex-col gap-3">
                <h1 className="-tracking-2 text-2xl tracking-widest">
                  Let's <span>talk</span> for Something special
                </h1>
                <p className="text-sm">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and <br />
                  memorable interactive experiences
                </p>
                <ul className="flex flex-col gap-1">
                  <li className="text-[#FACC15]">
                    ojodomofavour2004@gmail.com
                  </li>
                  {/* <br /> */}
                  <li>
                    <span className="text-[#FACC15]">( +234 )</span> 9059852978
                  </li>
                </ul>
              </article>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
