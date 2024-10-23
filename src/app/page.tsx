"use client";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/Components/Header/page";
import Link from "next/link";
import menu_icon from "../../public/menu_icon.svg";
import linkedIn_icon from "../../public/linkedin_icon.svg";
import github_icon from "../../public/github_logo.svg";
// let PDF_FILE_URL = 'http://localhost:7000/file_pdf.pdf'
import { GoDownload } from "react-icons/go";

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
        <Link href='./file_pdf.pdf' target='_blank' rel="noopener noreferer" className=" my-1 py-1 px-2 font-medium rounded-md transition  hover:bg-[#f8d95e] bg-[#FACC15] items-center gap-1 active:bg-[#e9c537] text-gray-600 hidden md:flex">
            Resume
            <GoDownload />
          </Link>
        </li>
        <li className="">
          <Image src={menu_icon} alt="" className=" block md:hidden pointer" />
        </li>
      </ul>
    </header>
        <Header/>
      </div>
    </>
  );
}
