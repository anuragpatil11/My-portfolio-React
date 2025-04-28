import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import weatherImg from "../assets/images/weather-app.png";
import quoteImg from "../assets/images/quote-generator.png";
import portfolioImg from "../assets/images/portfolio.png";
import textToSpeechImg from "../assets/images/text-speech.png";
import keeperImg from "../assets/images/keeper-app.png";
import currencyAppImg from "../assets/images/currency-app.png";
import ems from "../assets/images/ems.png";

const Projects = () => {
  const frontendProjects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React.",
      image: portfolioImg,
      github: "https://github.com/anuragpatil11/My-portfolio-React",
      live: "https://anurag11-portfolio.netlify.app/",
      tags: ["React", "Tailwind CSS"]
    },
    {
      title: "Currency Converter",
      description: "A responsive application which converts currencies using real-time exchange rates.",
      image: currencyAppImg,
      github: "https://github.com/anuragpatil11/Currency-Converter-React.Js",
      live: "",
      tags: ["React", "API"]
    },
    {
      title: "Weather App",
      description: "A JavaScript-based weather app that fetches and displays real-time weather data for any location.",
      image: weatherImg,
      github: "https://github.com/anuragpatil11/Javascript-Project-Weather-App",
      live: "https://anuragpatil11.github.io/Javascript-Project-Weather-App/",
      tags: ["JavaScript", "API"]
    },
    {
      title: "Quote Generator",
      description: "An application that generates random inspirational quotes with the option to share them on Twitter.",
      image: quoteImg,
      github: "https://github.com/anuragpatil11/Javascript-Quote-Generator",
      live: "https://anuragpatil11.github.io/Javascript-Quote-Generator/",
      tags: ["JavaScript"]
    },
    {
      title: "Text-Speech Converter",
      description: "A responsive application that converts written text into spoken words using the Web Speech API.",
      image: textToSpeechImg,
      github: "https://github.com/anuragpatil11/Javascript-Project-Text-Speech-Converter",
      live: "https://anuragpatil11.github.io/Javascript-Project-Text-Speech-Converter/",
      tags: ["JavaScript", "Web Speech API"]
    },
  ];

  const backendProjects = [
    {
      title: "Keeper App",
      description: "A MERN stack application for creating and managing notes with full CRUD functionality.",
      image: keeperImg,
      github: "https://github.com/anuragpatil11/Keeper-App-Notes-App",
      live: "",
      tags: ["MERN", "MongoDB", "Express"]
    },
    {
      title: "Employee Management System",
      description: "A comprehensive system for managing employee tasks with admin privileges for task assignment.",
      image: ems,
      github: "https://github.com/anuragpatil11/ems",
      live: "",
      tags: ["MERN", "JWT Auth"]
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative h-80 w-full overflow-hidden rounded-xl shadow-lg"
    >
      {/* Project Image (Always visible) */}
      <div className="absolute inset-0">
        <motion.img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Overlay Content (Visible on hover) */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-between p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      >
        <div>
          <motion.h3 
            className="text-xl font-bold text-white mb-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-purple-600 text-white"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-between"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="py-12 bg-gray-50 dark:bg-[#1D1616]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Frontend Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Frontend Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Backend Projects Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Backend Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {backendProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;