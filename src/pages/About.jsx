import React from "react";
import myImage from "../assets/images/profile-pic.jpeg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
const About = () => {
  return (
    <div className="py-10  bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get to know me better! Here’s a bit about my background, skills, and
          interests.
        </p>
      </section>

      {/* Profile Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Profile Image */}
          <div className="relative overflow-hidden rounded-md shadow-lg">
            <img
              src={myImage}
              alt="My Image"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Profile Info */}
          <div>
            <h2 className="text-4xl font-semibold mb-4">
              Hi, I'm Anurag Patil
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              I'm an Information Technology student at I2IT College Pune with
              expertise in web development, particularly in React.js, and a
              growing interest in backend technologies like Node.js and MongoDB.
              I enjoy solving problems and creating impactful solutions through
              code.
            </p>
            <ul className="space-y-3 text-lg">
              <li>
                <strong>Date of Birth:</strong> 11-08-2003
              </li>
              <li>
                <strong>Email:</strong> anuragpatil.11831183@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 7974476699
              </li>
              <li>
                <strong>Address:</strong> Pune, Maharashtra
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="py-10  bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white ">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            What I'm Doing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Front End Development",
                description:
                  "Creating stunning user interfaces with React and Tailwind CSS.",
                color: "bg-red-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                  </svg>
                ),
              },
              {
                title: "Back End Development",
                description:
                  "Building robust backends with Express and MongoDB.",
                color: "bg-blue-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M64 32C28.7 32 0 60.7 0 96l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 32zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                ),
              },
              {
                title: "Problem Solving",
                description:
                  "Solving coding problems efficiently and effectively.",
                color: "bg-yellow-500",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 ${item.color}`}
              >
                <div className="flex items-center mb-4 h-6 w-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold  mb-2">
                  {item.title}
                </h3>
                <p >{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12  bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="space-y-4">
            {[
              { skill: "C++", percentage: 70, icon: <TbBrandCpp /> },
              { skill: "Java", percentage: 65, icon: <FaJava /> },
              { skill: "Python", percentage: 50, icon: <FaPython /> },
              { skill: "HTML", percentage: 90, icon: <FaHtml5 /> },
              { skill: "CSS", percentage: 85, icon: <FaCss3Alt /> },
              { skill: "JavaScript", percentage: 80, icon: <FaJs /> },
              { skill: "React", percentage: 75, icon: <FaReact /> },
              { skill: "Node", percentage: 70, icon: <FaNodeJs /> },
              { skill: "Express", percentage: 70, icon: <SiExpress /> },
              { skill: "MongoDB", percentage: 65, icon: <SiMongodb /> },
              { skill: "SQL", percentage: 80, icon: <SiMysql /> },
              { skill: "PostgreSQL", percentage: 60, icon: <SiPostgresql /> },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1">
                {/* <span>{item.icon}</span>

<span className="font-medium text-xl">{item.skill}</span> */}
                <div className="w-full bg-gray-300 rounded-full h-10 text-xl">
                  <div
                    className="bg-blue-500 h-10 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  >
                    <div className="flex justify-start items-center">
                      <span className="font-medium text-xl px-2">
                        {item.icon}
                      </span>
                      <span className="font-medium text-xl">{item.skill}</span>
                      <span className="font-medium text-xl px-10">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Interests</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Movies", "Traveling", "Music", "Cricket", "Online Games"].map(
              (interest, idx) => (
                <div
                  key={idx}
                  className="bg-blue-500  px-12 py-5  items-center  rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
                >
                  {interest}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
