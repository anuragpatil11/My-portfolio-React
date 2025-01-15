import React from "react";

const Resume = () => {
  return (
    <div className="  bg-white text-[#1D1616] dark:bg-[#1D1616] dark:text-white min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 hover:text-purple-500">Resume</h1>
          <p className="text-lg">
            A brief overview of my educational background, skills, and
            objectives.
          </p>
        </header>

        {/* Objective Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Objective</h2>
          <p className="border-2 text-lg bg-transparent p-6 rounded-lg shadow-md">
            Undergraduate student, seeking a role where I can contribute to
            innovative web projects and further develop my skills in a dynamic
            team environment.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Engineering",
                institution:
                  "International Institute of Information Technology, Pune",
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
                className="border-2 bg-transparent p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between"
              >
                <div>
                  <h3 className="text-xl font-medium">{edu.degree}</h3>
                  <p>{edu.institution}</p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="font-medium text-white">{edu.year}</p>
                  <p>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Programming Languages",
                skills: "C++, JavaScript",
              },
              {
                category: "Web Technologies",
                skills: "HTML, CSS, React",
              },
              {
                category: "Databases",
                skills: "MySQL",
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="border-2 bg-transparent p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-medium mb-2">{skill.category}</h3>
                <p>{skill.skills}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
