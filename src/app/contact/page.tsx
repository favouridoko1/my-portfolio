"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";


const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
      toast.error("Please fill in all fields!", {
        position: "bottom-right",
        autoClose: 1500,
      });
      setIsLoading(false);
      return;
    }

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
          toast.success("Email sent successfully!", {
            position: "bottom-right",
            autoClose: 1500,
          });
          setForm({ name: "", email: "", message: "" });
          setIsLoading(false);
        },
        () => {
          toast.error("Something went wrong. Please try again.", {
            position: "bottom-right",
            autoClose: 1500,
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      className="py-16 px-6 md:px-16 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact <span className="text-yellow-400">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Form Section */}
        <motion.form
          className="bg-[#1a1a1a]/70 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg flex flex-col gap-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleOnChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white border border-transparent focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleOnChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white border border-transparent focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">
              Your Message
            </label>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleOnChange}
              placeholder="Write your message..."
              className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white border border-transparent focus:outline-none focus:border-yellow-400"
            />
          </div>

          <motion.button
            type="submit"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 w-full py-3 font-semibold rounded-lg bg-yellow-400 text-black transition-colors duration-200 hover:bg-yellow-300"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Info Section */}
        <motion.div
          className="flex flex-col justify-center gap-6 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
            Let’s <span className="text-yellow-400">Connect</span>
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Whether it's a new project, a collaboration idea, or just a friendly
            hello — I'm always happy to connect. Let's create something
            meaningful together.
          </p>

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-1">
              <FaLocationDot className="text-yellow-400" />{" "}
              <span className="text-yellow-400 mr-2">Location:</span> Nigeria
              (GMT+1)
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope className="text-yellow-400" />{" "}
              <span className="text-yellow-400 mr-2">Email:</span>
              ojodomofavour2004@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <FaPhone className="text-yellow-400" />{" "}
              <span className="text-yellow-400 mr-2">Phone:</span> +234 905 985
              2978
            </p>
            <p className="flex items-center gap-1">
              <MdOutlineEventAvailable className="text-yellow-400" />
              <span className="text-yellow-400 mr-2">Availability:</span> Open
              to freelance & full-time roles
            </p>
          </div>

          <div className="flex gap-4 mt-2">
            {/* Replace with actual icon links */}
            <a
              href="https://www.linkedin.com/in/favour-idoko-12760b2b5/"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaLinkedin className="inline-block mr-1" />
              LinkedIn
            </a>
            <a
              href="https://github.com/favouridoko1"
              target="_blank"
              className="hover:text-yellow-400"
            >
              <FaGithub className="inline-block mr-1" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
