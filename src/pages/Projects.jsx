import React from "react";
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
    },
    {
      title: "Currency Converter",
      description: "A responsive application which convert currency .",
      image: currencyAppImg,
      github: "https://github.com/anuragpatil11/Currency-Converter-React.Js",
      live: "",
    },

    {
      title: "Weather App",
      description:
        "A JavaScript-based weather app that fetches real-time weather data.",
      image: weatherImg,
      github: "https://github.com/anuragpatil11/Javascript-Project-Weather-App",
      live: "https://anuragpatil11.github.io/Javascript-Project-Weather-App/",
    },
    {
      title: "Quote Generator",
      description:
        "A responsive application which randomly generate Quote and also post it on twitter .",
      image: quoteImg,
      github: "https://github.com/anuragpatil11/Javascript-Quote-Generator",
      live: "https://anuragpatil11.github.io/Javascript-Quote-Generator/",
    },
    {
      title: "Text-Speech Converter",
      description: "A responsive application which convert text to speech .",
      image: textToSpeechImg,
      github:
        "https://github.com/anuragpatil11/Javascript-Project-Text-Speech-Converter",
      live: "https://anuragpatil11.github.io/Javascript-Project-Text-Speech-Converter/",
    },

    // {
    //   title: "Blog App",
    //   description: "A blog app for creating and managing posts.",
    //   image: "https://source.unsplash.com/random/300x300/?blog",
    //   github: "https://github.com/anuragpatil11/Blog-App",
    //   live: "https://anuragpatil11.github.io/Blog-App/",
    // },
    // {
    //   title: "Quiz App",
    //   description: "A dynamic quiz application with a scoring system.",
    //   image: "https://source.unsplash.com/random/300x300/?quiz",
    //   github: "https://github.com/anuragpatil11/Quiz-App",
    //   live: "https://anuragpatil11.github.io/Quiz-App/",
    // },
  ];

  const backendProjects = [
    {
      title: "Keeper App",
      description:
        "A MERN stack based keeper app which create note with title and content. Perform CRUD operations .",
      image: keeperImg,
      github: "https://github.com/anuragpatil11/Keeper-App-Notes-App",
      live: "",
    },
    {
      title: "Employee Management System",
      description:
        "A MERN stack based employee management system in which employee handle its task and admin assign task to employee.",
      image: ems,
      github: "https://github.com/anuragpatil11/ems",
      live: "",
    },
    // {
    //   title: "User Authentication API",
    //   description: "A Node.js API for user authentication with JWT.",
    //   image: "https://source.unsplash.com/random/300x300/?authentication",
    //   github: "https://github.com/anuragpatil11/Auth-API",
    //   live: "",
    // },
    // {
    //   title: "E-commerce Backend",
    //   description: "A Node.js backend for managing an e-commerce platform.",
    //   image: "https://source.unsplash.com/random/300x300/?backend",
    //   github: "https://github.com/anuragpatil11/Ecommerce-Backend",
    //   live: "",
    // },
    // {
    //   title: "Blog API",
    //   description: "A RESTful API for creating and managing blog posts.",
    //   image: "https://source.unsplash.com/random/300x300/?api",
    //   github: "https://github.com/anuragpatil11/Blog-API",
    //   live: "",
    // },
    // {
    //   title: "Chat Application",
    //   description: "A real-time chat backend using Node.js and Socket.IO.",
    //   image: "https://source.unsplash.com/random/300x300/?chat",
    //   github: "https://github.com/anuragpatil11/Chat-App",
    //   live: "",
    // },
    // {
    //   title: "Task Manager API",
    //   description: "An API for managing tasks with MongoDB.",
    //   image: "https://source.unsplash.com/random/300x300/?tasks",
    //   github: "https://github.com/anuragpatil11/Task-Manager-API",
    //   live: "",
    // },
    // {
    //   title: "File Upload Service",
    //   description: "A service for uploading and managing files.",
    //   image: "https://source.unsplash.com/random/300x300/?files",
    //   github: "https://github.com/anuragpatil11/File-Upload-Service",
    //   live: "",
    // },
  ];

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <div
        key={index}
        className="bg-white text-black rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
      >
        <img
          src={project.image}
          alt={project.title}
          className="object-cover object-center w-full h-48"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold  mb-2">{project.title}</h2>
          <p className=" mb-4">{project.description}</p>
          <div className="flex justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border-2 bg-[#1D1616] text-white rounded-lg shadow-md hover:bg-white hover:text-black"
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border-2 bg-white text-black rounded-lg shadow-md hover:bg-[#1D1616] hover:text-white"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    ));

  return (
    <div className="py-10  bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Frontend Projects Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-10  hover:text-purple-500">
            Frontend Projects
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {renderProjects(frontendProjects)}
          </div>
        </section>

        {/* Backend Projects Section */}
        <section>
          <h1 className="text-4xl font-bold text-center mb-10 hover:text-purple-500">
            Backend Projects
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {renderProjects(backendProjects)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
// import React from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const frontendProjects = [
//     // Your frontend projects data
//     {
//       title: "Weather App",
//       description:
//         "A JavaScript-based weather app that fetches real-time weather data.",
//       image: "https://source.unsplash.com/random/300x300/?weather",
//       github: "https://github.com/anuragpatil11/Javascript-Project-Weather-App",
//       live: "https://anuragpatil11.github.io/Javascript-Project-Weather-App/",
//     },
//     {
//       title: "To-Do App",
//       description: "A React-based to-do app with CRUD functionality.",
//       image: "https://source.unsplash.com/random/300x300/?todo",
//       github: "https://github.com/anuragpatil11/ToDo-App",
//       live: "https://anuragpatil11.github.io/ToDo-App/",
//     },
//     {
//       title: "E-commerce UI",
//       description: "A responsive front-end UI for an e-commerce website.",
//       image: "https://source.unsplash.com/random/300x300/?ecommerce",
//       github: "https://github.com/anuragpatil11/Ecommerce-UI",
//       live: "https://anuragpatil11.github.io/Ecommerce-UI/",
//     },
//     {
//       title: "Portfolio Website",
//       description: "A personal portfolio website built with React.",
//       image: "https://source.unsplash.com/random/300x300/?portfolio",
//       github: "https://github.com/anuragpatil11/Portfolio",
//       live: "https://anuragpatil11.github.io/Portfolio/",
//     },
//     {
//       title: "Blog App",
//       description: "A blog app for creating and managing posts.",
//       image: "https://source.unsplash.com/random/300x300/?blog",
//       github: "https://github.com/anuragpatil11/Blog-App",
//       live: "https://anuragpatil11.github.io/Blog-App/",
//     },
//     {
//       title: "Quiz App",
//       description: "A dynamic quiz application with a scoring system.",
//       image: "https://source.unsplash.com/random/300x300/?quiz",
//       github: "https://github.com/anuragpatil11/Quiz-App",
//       live: "https://anuragpatil11.github.io/Quiz-App/",
//     },
//   ];

//   const backendProjects = [
//     // Your backend projects data
//     {
//       title: "User Authentication API",
//       description: "A Node.js API for user authentication with JWT.",
//       image: "https://source.unsplash.com/random/300x300/?authentication",
//       github: "https://github.com/anuragpatil11/Auth-API",
//       live: "",
//     },
//     {
//       title: "E-commerce Backend",
//       description: "A Node.js backend for managing an e-commerce platform.",
//       image: "https://source.unsplash.com/random/300x300/?backend",
//       github: "https://github.com/anuragpatil11/Ecommerce-Backend",
//       live: "",
//     },
//     {
//       title: "Blog API",
//       description: "A RESTful API for creating and managing blog posts.",
//       image: "https://source.unsplash.com/random/300x300/?api",
//       github: "https://github.com/anuragpatil11/Blog-API",
//       live: "",
//     },
//     {
//       title: "Chat Application",
//       description: "A real-time chat backend using Node.js and Socket.IO.",
//       image: "https://source.unsplash.com/random/300x300/?chat",
//       github: "https://github.com/anuragpatil11/Chat-App",
//       live: "",
//     },
//     {
//       title: "Task Manager API",
//       description: "An API for managing tasks with MongoDB.",
//       image: "https://source.unsplash.com/random/300x300/?tasks",
//       github: "https://github.com/anuragpatil11/Task-Manager-API",
//       live: "",
//     },
//     {
//       title: "File Upload Service",
//       description: "A service for uploading and managing files.",
//       image: "https://source.unsplash.com/random/300x300/?files",
//       github: "https://github.com/anuragpatil11/File-Upload-Service",
//       live: "",
//     },
//   ];

//   const renderProjects = (projects) =>
//     projects.map((project, index) => (
//       <motion.div
//         key={index}
//         className="bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//       >
//         <img
//           src={project.image}
//           alt={project.title}
//           className="object-cover object-center w-full h-48"
//         />
//         <div className="p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
//             {project.title}
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mb-4">
//             {project.description}
//           </p>
//           <div className="flex justify-between">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noreferrer"
//               className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700"
//             >
//               GitHub
//             </a>
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 bg-violet-600 text-white rounded-lg shadow-md hover:bg-violet-700"
//               >
//                 Live Demo
//               </a>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     ));

//   return (
//     <div className="py-10 bg-gradient-to-r from-black via-purple-900 to-blue-900">
//       <div className="max-w-6xl mx-auto px-6 text-white">
//         {/* Frontend Projects Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="mb-16"
//         >
//           <h1 className="text-4xl font-bold text-center mb-10">
//             Frontend Projects
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {renderProjects(frontendProjects)}
//           </div>
//         </motion.section>

//         {/* Backend Projects Section */}
//         <motion.section
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl font-bold text-center mb-10">
//             Backend Projects
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {renderProjects(backendProjects)}
//           </div>
//         </motion.section>
//       </div>
//     </div>
//   );
// };

// export default Projects;
