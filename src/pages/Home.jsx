import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000); // Change title every 2 seconds
    return () => clearInterval(interval);
  }, [titles.length]);

  // Social links data for cleaner rendering
  const socialLinks = [
    {
      id: "github",
      icon: <FaGithub />,
      url: "https://github.com/anuragpatil11",
      label: "GitHub",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/patilanurag11/",
      label: "LinkedIn",
    },
    {
      id: "twitter",
      icon: <FaXTwitter />,
      url: "https://x.com/anurag_p11",
      label: "Twitter",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/anuragpatil_11/",
      label: "Instagram",
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="p-6 sm:p-10 bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white min-h-screen flex flex-col items-center justify-center transition-all duration-300 relative"
    >
      {/* Header with Dark Mode Toggle */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-end items-center border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#1D1616]/80 backdrop-blur-sm z-10"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium mr-2 hidden sm:inline-block">Toggle Theme</span>
          <Switch />
        </div>
      </motion.div>

      {/* Name & Animated Titles */}
      <motion.div 
        className="text-center max-w-2xl mx-auto pt-12 sm:pt-0"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi,
        </motion.h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          I'm{" "}
          <motion.span
            key={currentTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-violet-500 inline-block"
          >
            {titles[currentTitle]}
          </motion.span>
        </h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Turning ideas into reality, one line of code at a time.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-medium text-gray-600 dark:text-gray-300 mb-4">
            Connect With Me
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mt-4 text-2xl sm:text-3xl">
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-violet-500 transition-colors duration-300 relative"
                onMouseEnter={() => setIsHovered(social.id)}
                onMouseLeave={() => setIsHovered(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
                
                {/* Tooltip */}
                {isHovered === social.id && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-violet-500 text-white px-2 py-1 rounded whitespace-nowrap"
                  >
                    {social.label}
                  </motion.span>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background decoration (subtle gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-violet-50 dark:to-violet-950/10 -z-10" />
      
      {/* Footer */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-4 text-sm text-gray-500 dark:text-gray-400"
      >
        © {new Date().getFullYear()} Anurag Patil. All rights reserved.
      </motion.p>
    </motion.div>
  );
};

export default Home;