"use client";
import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import animaImage from "../../public/profile_pic1.svg";
import { about_me, techStackIcons } from "./data/data";
import { myProjectsData } from "./data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
// import { FadeLoader } from "react-spinners/";
import Header from "@/components/Header/Header";

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
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const router = useRouter();
  const navigate = (page: string) => {
    router.push(page);
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (!form.email || !form.name || !form.message) {
      toast.error(`Please Enter all Fields!`, {
        position: "bottom-right",
        autoClose: 1500,
      });
    } else {
      emailjs
        .send(
          "service_h2dgwzd",
          "template_gkmrroc",
          {
            from_name: form.name,
            to_name: "Favour Idoko",
            from_email: form.email,
            to_email: "ojodomofavour2004@gmail.com",
            message: form.message,
          },
          "000Hp84r1AIbGLN2M"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Email sent successfully!", {
              position: "bottom-right",
              autoClose: 1500,
            });
            setForm({
              name: "",
              email: "",
              message: "",
            });
            setIsLoading(false);

          },
          (error) => {
            setIsLoading(false);
            console.log("FAILED...", error.text);
            toast.error(`${error.text}`, {
              position: "bottom-right",
              autoClose: 1500,
            });
          }
        );
    }
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed bottom-0 left-0 right-0 h-[8px] bg-[#EAB308] transform origin-left"
      />
      <Header />

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
            {myProjectsData?.map((items:CardProps) => (
              <ul className="bg-[#080808] p-4 rounded transition-all duration-500 ease-in-out hover:scale-105" key={items.id}>
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
            <div className="w-full mx-auto p-8 bg-[#080808] justify-center items-center lg:flex" key={index}>
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
        <section className="w-full " id="contact">
          <h1 className="font-bold text-3xl my-2 text-center text-[#fff]">
            CONTACT <span className="text-[#EAB308]">ME</span>
          </h1>
          <section className="sm:flex justify-center ">
            <form
              action=""
              name="Contact"
              method="post"
              className="gap-4 flex flex-col sm:w-[40%] p-4"
            >
              <>
                <label
                  htmlFor="name"
                  className="text-[#fff] mb-[-8px] font-medium"
                >
                  Your Name
                </label>
                <input
                  value={form.name}
                  name="name"
                  type="text"
                  placeholder="What's your name"
                  className="text-md p-2 rounded outline-none mt-[-8px] text-[#535353] hover:outline-[#f5d142] active:outline-[#e9c537]"
                  onChange={handleOnChange}
                />
              </>
              <>
                <label
                  htmlFor="email"
                  className="text-[#fff] mb-[-8px] font-medium"
                >
                  Your Email
                </label>
                <input
                  value={form.email}
                  name="email"
                  type="email"
                  placeholder="What's your email?"
                  className="text-md p-2 rounded outline-none mt-[-8px] text-[#535353] hover:outline-[#f5d142] active:outline-[#e9c537]"
                  onChange={handleOnChange}
                />
              </>
              <>
                <label
                  htmlFor="message"
                  className="text-[#fff] mb-[-8px] font-medium"
                >
                  Your Message
                </label>
                <textarea
                  value={form.message}
                  rows={6}
                  cols={50}
                  name="message"
                  id="message"
                  placeholder="What do you want to say"
                  form="usrform"
                  className="text-[#535353] p-1 outline-none mt-[-8px] hover:outline-[#f5d142] active:outline-[#e9c537]"
                  onChange={handleOnChange}
                />
              </>
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-fit p-1 font-medium rounded hover:bg-[#f8d95e] bg-[#FACC15] active:bg-[#e9c537] text-gray-600"
              >
                {isLoading ? `Sending...` : "Get in touch"}
              </motion.button>
              <ToastContainer />
            </form>
            <article className="text-[#fff] p-4 flex flex-col gap-3 md:mt-4">
              <h1 className="-tracking-2 text-2xl tracking-widest">
                Let&apos;s <span>talk</span> for Something special
              </h1>
              <p className="text-sm">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and <br />
                memorable interactive experiences
              </p>
              <ul className="flex flex-col gap-1">
                <li className="text-[#FACC15]">ojodomofavour2004@gmail.com</li>
                {/* <br /> */}
                <li>
                  <span className="text-[#FACC15]">( +234 )</span> 9059852978
                </li>
              </ul>
            </article>
          </section>
        </section>
      </main>
    </>
  );
}
