"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    </>
  );
};

export default Contact;
