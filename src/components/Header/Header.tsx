"use client";
import React, { useState } from "react";
import Image from "next/image";
import menu_icon from "../../../public/menu_icon.svg";
import close_icon from "../../../public/close_icon.svg";
import linkedIn_icon from "../../../public/linkedin_icon.svg";
import github_icon from "../../../public/github_logo.svg";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
const navLinks = [
  { name: "Home", route: "/" },
  { name: "Skills", route: "/skills" },
  { name: "About", route: "/about" },
  { name: "Projects", route: "/projects" },
  { name: "Contact", route: "/contact" },
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean|null>(false);
  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-20">
        {/* <ul className="border-b border-[#292929] py-4 flex justify-around items-center bg-[#2b2b2b]"> */}
        <ul className="border-b border-[#292929] py-4 flex justify-around items-center bg-black/70 backdrop-blur-md">
          <li className="text-[#f6f6f6] font-bold text-xl">
            <Link href="/">
              FAVOUR<span className="text-[#EAB308]">IDOKO</span>
            </Link>
          </li>
          <li className="hidden md:flex gap-4"> 
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.route}
                className="text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
              >
                {item.name}
              </Link>
            ))}
          </li>
          <li className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
              target="_blank"
              className="hidden md:flex gap-1 items-center text-md font-semibold text-[#9CA3AF] transition duration-100 hover:text-[#acdbac] active:text-[#acdbac]"
            >
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
              href="./FavourIdoko.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-1 py-1 px-2 font-medium rounded-md transition hover:bg-[#f8d95e] bg-[#FACC15] items-center gap-1 active:bg-[#e9c537] text-gray-600 hidden md:flex"
            >
              Resume <GoDownload />
            </Link>
          </li>
          <li>
            <Image
              src={menuOpen ? close_icon : menu_icon}
              alt=""
              className="block md:hidden cursor-pointer w-[40px]"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </li>
        </ul>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <header className="md:hidden">
          <ul className="border-b fixed top-0 left-0 h-[100vh] p-4 w-[200px] z-[999] gap-4 border-[#000000] flex flex-col bg-[#1f1f1f] justify-start">
            {["Home", "Skills", "About", "Projects", "Contact"].map(
              (item: string) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-md font-semibold text-[#FFFFFF] transition duration-100 hover:bg-[#f0f0f0] hover:text-[#383f4b] active:text-[#acdbac]"
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
              target="_blank"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-md font-semibold text-[#FFFFFF] transition duration-100 hover:bg-[#f0f0f0] hover:text-[#383f4b] active:text-[#acdbac]"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/favouridoko1"
              target="_blank"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-md font-semibold text-[#FFFFFF] transition duration-100 hover:bg-[#f0f0f0] hover:text-[#383f4b] active:text-[#acdbac]"
            >
              Github
            </Link>
            <li>
              <Link
                href="./FavourIdoko.pdf"
                target="_blank"
                onClick={() => setMenuOpen(!menuOpen)}
                rel="noopener noreferrer"
                className="text-md text-[#FFFFFF] duration-100 hover:bg-[#f0f0f0] hover:text-[#383f4b] active:text-[#acdbac] my-1 font-medium transition hover:bg-[#f8d95La] items-center gap-1 flex"
              >
                Resume <GoDownload />
              </Link>
            </li>
          </ul>
        </header>
        // Javascript-Advanced, Typescript-Advanced, React-Advanced, NextJs-Advanced,  NodeJs-Beginner, Express-Beginner 
      )}
    </>
  )
}

export default Header