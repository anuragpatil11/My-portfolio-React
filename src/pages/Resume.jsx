import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="bg-white dark:bg-[#1D1616] text-gray-800 dark:text-white min-h-screen py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Summary */}
        <div>
          {/* <h2 className="text-sm tracking-widest text-gray-500 dark:text-gray-400 mb-2">RESUME</h2> */}
          <h1 className="text-5xl font-bold mb-8 hover:text-purple-500 transition-colors duration-300">
            Check My Resume
          </h1>

          {/* About Me */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              SUMMARY
            </h2>
            <blockquote className="italic border-l-4 border-purple-500 dark:border-purple-400 pl-4 text-gray-600 dark:text-gray-300 mb-6">
              "Undergraduate student and passionate web developer, skilled at
              building responsive websites and solving real-world problems with
              code."
            </blockquote>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Education
            </h2>
            <div className="space-y-6">
              {[
                {
                  degree: "Bachelor of Engineering",
                  institution: "IIIT Pune",
                  year: "Expected 2025",
                  details: "Current CGPA: 7.99",
                },
                {
                  degree: "12th Standard",
                  institution: "Nehru Montessori H.S School, Burhanpur (M.P)",
                  year: "2021",
                  details: "88.70%",
                },
                {
                  degree: "10th Standard",
                  institution:
                    "St. Antony Gianellis Convent H.S School, Nepanagar (M.P)",
                  year: "2019",
                  details: "96.00%",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-900/50 p-4 border-l-4 border-purple-500 dark:border-purple-400 shadow-lg rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-300">
                    {edu.year}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "C++",
                "Java",
                "Python",
                "Git",
                "Tailwind CSS",
              ].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-sm border border-purple-300 dark:border-purple-400 text-purple-800 dark:text-purple-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Coding Profiles */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Coding Profiles
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "LeetCode",
                  icon: <SiLeetcode className="text-orange-500 text-2xl" />,
                  url: "https://leetcode.com/u/anuragP11/",
                  color:
                    "bg-orange-100 dark:bg-orange-900/30 border-orange-200 dark:border-orange-700",
                },
                {
                  name: "HackerRank",
                  icon: <SiHackerrank className="text-green-500 text-2xl" />,
                  url: "https://www.hackerrank.com/profile/anuragpatil_1181",
                  color:
                    "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700",
                },
                {
                  name: "GitHub",
                  icon: (
                    <FaGithub className="text-gray-800 dark:text-gray-200 text-2xl" />
                  ),
                  url: "#",
                  color:
                    "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                },
                {
                  name: "GeeksforGeeks",
                  icon: <SiGeeksforgeeks className="text-green-500 text-2xl" />,
                  url: "https://www.geeksforgeeks.org/user/anuragpatil_11/",
                  color:
                    "bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700",
                },
              ].map((profile, idx) => (
                <motion.a
                  key={idx}
                  href={profile.url}
                  whileHover={{ scale: 1.05 }}
                  className={`${profile.color} p-4 rounded-lg flex items-center gap-3 shadow-lg border`}
                >
                  {profile.icon}
                  <span className="text-gray-800 dark:text-gray-200">
                    {profile.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </section>
        </div>

        {/* Right Side - Projects & Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Projects
          </h2>
          {/* Experience */}
          {/* <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Experience
            </h2>
            <div className="space-y-6">
              {[
                {
                  role: "React.js Developer, Digital Marketing Intern",
                  company: "Tikona Farm",
                  duration: "May-June 2023",
                  points: [
                    "Developed the website for Tikona Farms using ReactJS",
                    "Handled social media accounts",
                  ],
                },
                {
                  role: "Graphic Design Intern",
                  company: "Oasis Infobytes, Delhi (virtual)",
                  duration: "Jan 2022",
                  points: [
                    "Incorporated basic graphic design skills",
                    "Utilized tools such as Canva",
                    "Proficient in simple photo editing techniques",
                  ],
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 dark:bg-gray-900/50 p-4 border-l-4 border-purple-500 dark:border-purple-400 shadow-lg rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {exp.company}
                  </p>
                  <p className="text-sm text-purple-600 dark:text-purple-300 mb-2">
                    {exp.duration}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section> */}
          {/* Projects */}
          <section>
            {/* <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Projects
            </h2> */}
            <div className="relative pl-6 border-l-2 border-purple-500 dark:border-purple-400 space-y-8">
              {[
                {
                  title: "Compliance Management System",
                  year: "2025",
                  description:
                    "Built a full-stack system to manage hostel student compliances with React, Node.js, and PostgreSQL.",
                  tags: ["React", "Node.js", "PostgreSQL"],
                },
                {
                  title: "Weather App",
                  year: "2024",
                  description:
                    "Created a dynamic weather forecasting web app using OpenWeather API and React.",
                  tags: ["React", "API", "Tailwind CSS"],
                },
                {
                  title: "Portfolio Website",
                  year: "2024",
                  description:
                    "Designed and developed a personal portfolio website using React and Tailwind CSS.",
                  tags: ["React", "Tailwind CSS"],
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-purple-500 dark:bg-purple-400"></div>
                  <div className="bg-gray-100 dark:bg-gray-900/50 p-4 rounded-md shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm bg-purple-100 dark:bg-purple-900/50 inline-block px-3 py-1 rounded-full mb-2 text-purple-800 dark:text-purple-200">
                      {project.year}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-full border border-purple-300 dark:border-purple-400 text-purple-800 dark:text-purple-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          {/* Certifications */}
          
          {/* Certifications */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Certifications
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Full Stack Development Certificate",
                  issuer: "Udemy",
                  year: "2025",
                  link: "https://drive.google.com/file/d/1yUYENfkYpZnCLqgWo9wS4_QpDv7hesCC/view?usp=sharing",
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Coursera_Logo_2021.svg",
                },
                {
                  title: "Cloud Foundations Certificate",
                  issuer: "AWS Academy",
                  year: "2024",
                  link: "https://drive.google.com/file/d/1MJbPtg8eXCYnl3G3OwgGsYVkszt9Zs88/view?usp=drive_link",
                  image:
                    "https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.jpg",
                },
                {
                  title: "Machine Learning Foundations Certificate",
                  issuer: "AWS Academy",
                  year: "2024",
                  link: "https://drive.google.com/file/d/10NCysHWRKLQszrbEpeGp92TAl8y85-Ci/view?usp=drive_link",
                  image:
                    "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
                },
                {
                  title: "AI-ML Virtual Internship Certificate",
                  issuer: "AWS Academy",
                  year: "2024",
                  link: "https://drive.google.com/file/d/1Yct9NOa_yzyQgjQcaBXdSMU2LfL7mKPE/view?usp=sharing",
                  image:
                    "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
                },
                {
                  title: "Cybersecurity Bootcamp Certificate",
                  issuer: "I2IT College",
                  year: "2023",
                  link: "https://drive.google.com/file/d/1_cKyfcyrgMga2ZSr2Z_i9hzxc0OBcNy4/view?usp=drive_link",
                  image:
                    "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
                },
                {
                  title: "Java Programming Completion Certificate",
                  issuer: "Great Learning",
                  year: "2023",
                  link: "https://drive.google.com/file/d/1bmaYMyE7qTBDKrZfeCdREwP0cbZT4L66/view?usp=drive_link",
                  image:
                    "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
                },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 dark:bg-gray-900/50 p-4 border-l-4 border-purple-500 dark:border-purple-400 shadow-lg rounded-md hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors flex items-center gap-4"
                >
                  {/* <img
                    src={cert.image}
                    alt={cert.issuer}
                    className="w-12 h-12 object-contain rounded-md shadow-sm border border-purple-300 dark:border-purple-600"
                  /> */}
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      {cert.title}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.issuer} &nbsp;•&nbsp; {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
