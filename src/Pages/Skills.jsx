import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: "75%" },
    { name: "MongoDB", level: "85%" },
    { name: "Express.js", level: "70%" },
    { name: "Java", level: "80%" },
    { name: "Django", level: "60%" }
  ];

  return (
    <section className="bg-gray-500 py-10" id="skill">
      <div id="skill" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-300 text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
