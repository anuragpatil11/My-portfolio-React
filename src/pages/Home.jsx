
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Switch from "../others/Switch";

const Home = () => {
  const titles = [
    "Anurag Patil",
    "a Full Stack Developer",
    "a Programmer",
    "a Code Enthusiast",
    "a Tech Explorer",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000); // Change title every 2 seconds
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div className="p-10 bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white h-screen flex flex-col items-center justify-center transition-all duration-300">
      {/* Dark Mode Toggle */}
      <div className="absolute top-20 right-10">
        <Switch />
      </div>

      {/* Name & Animated Titles */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-transform duration-700">
          Hi,
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 transition-transform duration-700">
          I'm <span className="text-violet-500">{titles[currentTitle]}</span>
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
          Turning ideas into reality, one line of code at a time.
        </p>
        <p className="mt-3 font-light text-gray-600 dark:text-gray-300">
          Connect With Me
        </p>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mt-6 text-3xl">
        <a
          href="https://github.com/anuragpatil11"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/patilanurag11/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/anurag_p11"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-500 transition-colors duration-300"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/anuragpatil_11/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-violet-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Home;
