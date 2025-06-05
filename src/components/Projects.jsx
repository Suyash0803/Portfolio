import React, { useState } from 'react';

const projectData = [
  {
    title: 'LeafCare',
    tech: 'HTML, CSS, JavaScript, Flask, Deep Learning',
    description: `A system to accurately identify various leaf types and detect associated diseases with 97% validation accuracy using VIT Transformer. Integrated Flask API and containerized deployment.`,
    link: 'https://github.com/Suyash0803/gang',
  },
  {
    title: 'Cognicare',
    tech: 'Python, NLP, Flask, Reactjs, CSS',
    description: `Cognicare is a healthcare web application that leverages advanced AI and machine learning techniques for early detection of Alzheimer’s disease. Built with Python and integrated with deep learning models, it provides accurate and timely diagnostics through speech and language analysis, helping clinicians and caregivers make informed decisions`,
    link: 'https://github.com/Suyash0803/Alzheimer-Detection',
  },
  {
    title: 'Messo',
    tech: 'ReactJs, CSS, JavaScript, APIs, MongoDB, Express.js, Node.js, JWT',
    description: `Messo is a scalable mess management app built with Node.js, Express, MongoDB, Docker, serving 300+ users by efficiently handling meal plans, subscriptions, feedback, and attendance.`,
    link: 'https://github.com/Suyash0803/Messo/tree/master/Messo-main',
  },
  
  {
    title: 'ChatCord',
    tech: 'Html CSS JavaScript Node.js Socket.io',
    description: `A real-time chat application built with Node.js and Socket.io, allowing users to join chat rooms and communicate instantly.`,
    link: 'https://github.com/Suyash0803/ChatCord',
  },
  {
    title: 'Gravity Simulator',
    tech: 'C++, CMake, Makefile',
    description: `A C++ application simulating gravitational interactions between celestial bodies, showcasing physics principles and object-oriented programming.`,
    link:'https://github.com/Suyash0803/Gravity_simulator'
  },
  {
    title: 'Job Portal',
    tech: 'Javascript, Node.js, Express.js, MongoDB, JWT',
    description: `A backend-application job portal application built with Node.js, Express.js, and MongoDB, featuring user authentication, job listings, and application management.`,
    link: 'https://github.com/Suyash0803/job-portal'
  },
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projectData : projectData.slice(0, 4);

  return (
    <div id="projects" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">My Projects</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
Here are some of the projects I’ve built that highlight my expertise in full-stack development, artificial intelligence, and creative problem-solving. From developing real-time web applications to integrating deep learning models, each project reflects a different aspect of my technical journey. Whether it’s designing clean and intuitive UI/UX, building scalable backend APIs, or implementing intelligent algorithms, I enjoy turning ideas into functional, reliable, and impactful solutions.

      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-[#2a2a2a]/60 backdrop-blur-md border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h2>
            <p className="text-sm text-gray-400 italic mb-2">Tech: {project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              GitHub - {project.title}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-10 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
      >
        {showMore ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default Projects;
