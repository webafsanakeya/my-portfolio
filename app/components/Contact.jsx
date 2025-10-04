import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react"

const Contact = ({isDarkMode}) => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96e8061e-af4e-461e-8cd9-b3a6b486c912");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
   <motion.div
initial={{opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 1}}

  id="contact"
  className={`w-full px-[12%] py-10 scroll-mt-20 
    ${isDarkMode 
      ? "bg-[#11001F]"  // dark mode background
      : "bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    }`}
>
      <motion.h4 
      initial={{y: -20, opacity: 0}}
        whileInView={{y: 1,  opacity:1}}
        transition={{duration: 0.5, delay: 0.3}}
      className="text-center mb-2 text-lg font-ovo">Connect with me</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
        whileInView={{y: 0,  opacity:1}}
        transition={{duration: 0.5, delay: 0.5}}
         className="text-center text-5xl font-ovo">Get in touch</motion.h2>
      <motion.p 
      initial={{ opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, delay: 0.7}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below
      </motion.p>
      <motion.form 
      initial={{ opacity: 0}}
        whileInView={{ opacity:1}}
        transition={{duration: 0.5, delay: 0.9}}
      onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8">
           <motion.input
           initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1.1}}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md 
              ${isDarkMode 
                ? "bg-[#2a004a] text-white border-gray-500" 
                : "bg-white text-black border-gray-400"}`}
          />
          <motion.input
          initial={{x: 50, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1.1}}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md 
              ${isDarkMode 
                ? "bg-[#2a004a] text-white border-gray-500" 
                : "bg-white text-black border-gray-400"}`}
          />
        </div>
         <motion.textarea
         initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration: 0.6, delay: 1.3}}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 
            ${isDarkMode 
              ? "bg-[#2a004a] text-white border-gray-500" 
              : "bg-white text-black border-gray-400"}`}
        ></motion.textarea>

                <motion.button
                whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}
          type="submit"
          className={`flex py-3 px-8 w-max items-center justify-between gap-2 rounded-full mx-auto duration-500 
            ${isDarkMode 
              ? "bg-black text-white hover:bg-[#2a004a] hover:text-white border border-gray-500" 
              : "bg-black/80 text-white hover:bg-black"}`}
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </motion.button>
        <p className="mt-4">
            {result}
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
