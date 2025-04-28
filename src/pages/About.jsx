import React from "react";
import myImage from "../assets/images/profile-pic.jpeg";
import {
  FaBirthdayCake, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, 
  FaPython, FaHackerrank, FaMusic, FaFilm, FaPlane, 
  FaGamepad, /* FaChess, */ /* FaBook, */ FaCode, FaBrain,
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiMysql, SiPostgresql, 
  SiLeetcode, SiGeeksforgeeks, SiTailwindcss
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      } 
    },
  };

  const cardVariants = {
    hover: { 
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
      transition: { type: "spring", stiffness: 300 }
    },
  };

  // Interests data
  const interests = [
    { name: "Coding", icon: <FaCode className="text-2xl" />, color: "bg-blue-900/50 text-blue-300" },
    { name: "Music", icon: <FaMusic className="text-2xl" />, color: "bg-purple-900/50 text-purple-300" },
    { name: "Movies", icon: <FaFilm className="text-2xl" />, color: "bg-red-900/50 text-red-300" },
    { name: "Travel", icon: <FaPlane className="text-2xl" />, color: "bg-green-900/50 text-green-300" },
    { name: "Gaming", icon: <FaGamepad className="text-2xl" />, color: "bg-yellow-900/50 text-yellow-300" },
    // { name: "Sports", icon: <FaSport className="text-2xl" />, color: "bg-indigo-900/50 text-indigo-300" },
    // { name: "Reading", icon: <FaBook className="text-2xl" />, color: "bg-pink-900/50 text-pink-300" },
    { name: "Problem Solving", icon: <FaBrain className="text-2xl" />, color: "bg-teal-900/50 text-teal-300" }
  ];

  return (
    <div className="py-10 bg-white text-gray-800 dark:bg-[#1D1616] dark:text-gray-100 transition-colors duration-300">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-16 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
        >
          Get to know me better! Here's a bit about my background, skills, and passions.
        </motion.p>
      </motion.section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg dark:opacity-30"></div>
            <img 
              src={myImage} 
              alt="Anurag Patil" 
              className="relative rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500 z-10 border-2 border-gray-200 dark:border-gray-800"
            />
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Anurag Patil</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-400">
              I'm an Information Technology student at I2IT College Pune with expertise in web development, particularly in React.js, and a growing interest in backend technologies like Node.js and MongoDB.
            </p>
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              {[
                { icon: <FaBirthdayCake className="text-purple-500" />, label: "Date of Birth", value: "11-08-2003" },
                { icon: <FaEnvelope className="text-purple-500" />, label: "Email", value: "anuragpatil.11831183@gmail.com" },
                { icon: <FaPhone className="text-purple-500" />, label: "Phone", value: "+91 7974476699" },
                { icon: <FaMapMarkerAlt className="text-purple-500" />, label: "Address", value: "Pune, Maharashtra" },
              ].map((info, idx) => (
                <motion.li 
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <span className="flex-shrink-0">{info.icon}</span>
                  <div>
                    <strong className="font-medium">{info.label}</strong>: {info.value}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Interests
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {interests.map((interest, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className={`${interest.color} p-6 rounded-xl shadow-md flex flex-col items-center gap-3 text-center border border-gray-200 dark:border-gray-800`}
              >
                <div className="p-3 bg-white dark:bg-gray-800 rounded-full">
                  {interest.icon}
                </div>
                <h3 className="font-medium">{interest.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            What I'm Doing
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Frontend Development",
                description: "Building responsive UIs with React, Tailwind CSS, and modern JavaScript.",
                icon: <FaReact className="text-4xl" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Backend Development",
                description: "Creating robust APIs with Node.js, Express, and MongoDB.",
                icon: <FaNodeJs className="text-4xl" />,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Problem Solving",
                description: "Solving DSA challenges on LeetCode and GeeksforGeeks daily.",
                icon: <FaBrain className="text-4xl" />,
                color: "from-purple-500 to-purple-600"
              },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                variants={cardVariants}
                className={`bg-gradient-to-br ${card.color} text-white p-8 rounded-2xl shadow-lg border border-gray-800`}
              >
                <div className="mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-blue-100">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Skills
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { skill: "C++", percentage: 70, icon: <TbBrandCpp /> },
              { skill: "Java", percentage: 60, icon: <FaJava /> },
              { skill: "Python", percentage: 50, icon: <FaPython /> },
              { skill: "HTML5", percentage: 90, icon: <FaHtml5 /> },
              { skill: "CSS3", percentage: 85, icon: <FaCss3Alt /> },
              { skill: "JavaScript", percentage: 80, icon: <FaJs /> },
              { skill: "React", percentage: 75, icon: <FaReact /> },
              { skill: "Tailwind CSS", percentage: 70, icon: <SiTailwindcss /> },
              { skill: "Node.js", percentage: 65, icon: <FaNodeJs /> },
              { skill: "Express", percentage: 60, icon: <SiExpress /> },
              { skill: "MongoDB", percentage: 55, icon: <SiMongodb /> },
              { skill: "MySQL", percentage: 70, icon: <SiMysql /> },
              { skill: "PostgreSQL", percentage: 50, icon: <SiPostgresql /> },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-500">{item.icon}</span>
                    <span className="font-medium dark:text-gray-300">{item.skill}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;