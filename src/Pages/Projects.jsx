
const Projects = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div id="project" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">
          Projects
        </h2>
        <div className="bg-gray-950 shadow-lg rounded-lg mb-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="p-6"><a href="https://mern-chat-app-1-igpj.onrender.com/" target="_blank">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Real Time Chat Application - Touch to View
            </h3>
            <p className="text-white mb-4">
              <span className="font-bold">Tech Stack:</span> MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-white mb-2">
            Designed and developed a responsive real-time chat application enabling users to engage in 
            instant messaging with a seamless user experience.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>
              Implemented real-time messaging using Socket.IO with WebSocket protocol support.
              </li>
              <li>Integrated user authentication, individual and group chats, and message history 
              persistence using MongoDB.</li>
              <li>
              Optimized for cross-device compatibility and ensured smooth, low-latency 
              communication across networks.
              </li>
            </ul>
            </a>
          </div>
        </div>
        
        <div className="bg-gray-950 shadow-lg rounded-lg mb-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="p-6"><a href="https://learneng-quiz.netlify.app/" target="_blank">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Language Learning Platform - Touch to View
            </h3>
            <p className="text-white mb-4">
              <span className="font-bold">Tech Stack:</span> MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-white mb-2">
              Developed a robust web application for managing pharmaceutical inventory,
              allowing efficient tracking of drugs across multiple vendors and pharmacies.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>
                Implemented real-time stock updates and shortest-path tracking for
                drug supply across 10 pharmaceutical shops.
              </li>
              <li>Integrated location-based tracking and vendor management.</li>
              <li>
                Optimized backend using MongoDB for data management and a responsive
                React-based frontend.
              </li>
            </ul>
            </a>
          </div>
        </div>

        {/* Dress E-commerce Website Card */}
        <div className="bg-gray-950 shadow-lg rounded-lg mb-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="p-6"><a href="https://joyful-yeot-ae8d19.netlify.app/" target="_blank">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Dress E-commerce Website - Touch to View
            </h3>
            <p className="text-white mb-4">
              <span className="font-bold">Tech Stack:</span> MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-white mb-2">
              Designed and developed a scalable e-commerce platform tailored for selling
              dresses, providing an intuitive shopping experience for customers.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Integrated user authentication, shopping cart, and payment processing.</li>
              <li>
                Utilized MongoDB for dynamic product catalog management, real-time stock updates,
                and product filters.
              </li>
              <li>
                Ensured cross-device compatibility and SEO optimization for better
                user engagement.
              </li>
            </ul>
            </a>
          </div>
        </div>
        
        <div className="bg-gray-950 shadow-lg rounded-lg mb-10 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
          <div className="p-6"><a href="https://github.com/mohammedasan/" target="_blank">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Drug Inventory Management and Tracking System
            </h3>
            <p className="text-white mb-4">
              <span className="font-bold">Tech Stack:</span> MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-white mb-2">
              Developed a robust web application for managing pharmaceutical inventory,
              allowing efficient tracking of drugs across multiple vendors and pharmacies.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>
                Implemented real-time stock updates and shortest-path tracking for
                drug supply across 10 pharmaceutical shops.
              </li>
              <li>Integrated location-based tracking and vendor management.</li>
              <li>
                Optimized backend using MongoDB for data management and a responsive
                React-based frontend.
              </li>
            </ul>
            </a>
          </div>
        </div>
        

        <div className="bg-gray-950 shadow-lg rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl mt-10">
          <div className="p-6"><a href="https://master--sunny-zabaione-ec5b75.netlify.app/" target="_blank">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Mern-Portfolio - Touch to View
            </h3>
            <p className="text-white mb-4">
              <span className="font-bold">Tech Stack:</span> MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-white mb-2">
              Designed and developed a scalable e-commerce platform tailored for selling
              dresses, providing an intuitive shopping experience for customers.
            </p>
            <ul className="list-disc list-inside text-white mb-4">
              <li>Integrated user authentication, shopping cart, and payment processing.</li>
              <li>
                Utilized MongoDB for dynamic product catalog management, real-time stock updates,
                and product filters.
              </li>
              <li>
                Ensured cross-device compatibility and SEO optimization for better
                user engagement.
              </li>
            </ul>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
