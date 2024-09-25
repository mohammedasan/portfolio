import React from 'react';

const Resume = () => {
  return (
    <div className="h-[10rem] w-full bg-gray-300 flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8">
      {/* Text Section */}
      <div className="h-[80%] w-full sm:w-[60%] flex justify-center items-center mb-4 sm:mb-0">
        <p className="md:text-xl text-center sm:text-left text-s">
          I am a passionate Frontend Developer eager to create engaging user experiences. If you’re looking to hire a dedicated developer who can bring your ideas to life, let's connect!
        </p>
      </div>

      {/* Resume Button */}
      <div className="w-full sm:w-auto flex justify-center items-center">
        <a href="../assets/img/Cv.pdf"
        download="Resume_Mohammed_Asan.pdf"> 
        <button
          className="cursor-pointer flex items-center justify-between bg-gray-800 px-5 py-3 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 transition duration-500 hover:ring-1 font-mono"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
