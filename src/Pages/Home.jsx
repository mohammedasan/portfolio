// import React from 'react'

// const Home = () => {    
//   return (
//    <div id="home" className="mx-auto p-4 bg-slate-950">
//     <div className="h-screen w-[90%] bg-slate-950">
//     <div className="bg-slate-900 p-8 rounded-lg shadow-lg box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) max-w-4xl mx-auto mt-8 md:flex flex-col sm:flex-row p-3 justify-center items-center space-x-8">
//         <img
//             src="https://media.tenor.com/7WDHZeqX9B0AAAAM/aesthetic-black.gif"
//             alt="Profile"
//             className="md:w-40 h-40 full rounded object-cover sm:w-20 h-30"
//         />
//         <div className="">
//             <h1 className="font-bold mb-4 text-gray-100 text-2xl">Hi, I am Mohammed Asan</h1>
//             <p className="text-lg mb-6 text-slate-100"> Hello, I'm Mohammed Asan, a passionate software developer skilled in Java, Python, and web technologies. 
//                 I enjoy solving algorithmic challenges and have experience working on various projects, 
//                 including APIs, web development, and dynamic programming.</p>
//         </div>  
//     </div>
//     <div  className="h-[60%]w-full md:w-[60%] md:mt-7 flex  flex-col justify-center items-center mx-auto sm:space-x-9 md:space-y-9">
//           <div className="flex  justify-center items- center">
//               <p className="text-gray-400 text-3xl">___________Intro___________</p>
//           </div>
//           <div className="flex justify center items-center">
//               <p className="text-slate-100 md:text-2xl"> Hello, I'm Mohammed Asan, a passionate software developer with expertise in various technologies and frameworks. 
//                   I studied at Sri Shakthi Institute of Engineering and Technology, where I honed my skills in software development and engineering principles.
//               </p>
//           </div>
//     </div>
//     </div>
    
//     </div>
//   )
// }

// export default Home;
// Home.jsx
import React from 'react';
import ProtonBackground from './ProtonBackground';

const Home = () => {    
  return (
    <div id="home" className="relative">
      <ProtonBackground bg={true} />
      <div className="relative z-10 mx-auto p-4 max-h-fit w-full">
        <div className="p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8 flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <img
            src="photo.jpg"
            alt="Profile"
            className="md:w-40 h-40 rounded-full object-cover"
          />
          <div className="text-center mt-4">
            <h1 className="font-bold text-gray-950 text-2xl">Hi, I am Mohammed Asan</h1>
            <p className="text-lg text-slate-950 mt-2">
              Hello, I'm Mohammed Asan, a passionate software developer skilled in Java, DSA, and web technologies. 
              I enjoy solving algorithmic challenges and have experience working on various projects, 
              including APIs, web development, and dynamic programming.
            </p>
          </div>
        </div>
      </div>
     <div  className="h-[60%]w-full md:w-[60%] md:mt-7 flex  flex-col justify-center items-center mx-auto sm:space-x-9 md:space-y-9">
           <div className="flex  justify-center items- center">
               <p className="text-gray-950 text-3xl">___________Intro___________</p>
           </div>
           <div className="flex justify center items-center">
               <p className="text-gray-950 md:text-2xl"> Hello, I'm Mohammed Asan, a passionate software developer with expertise in various technologies and frameworks. 
                   I studied at Sri Shakthi Institute of Engineering and Technology, where I honed my skills in software development and engineering principles.
           </p>
          </div>
     </div>
      </div>
  );
};

export default Home;
