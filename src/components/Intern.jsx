import React, { useState } from 'react';

const internshipData = [
  {
    company: 'Kopernicos',
    role: 'Web Development Intern',
    duration: 'Feb 2024 - May 2024',
    tech: 'Node.js, Express.js, MongoDB, Redis, REST APIs',
    description: `Worked on maintaining and enhancing the company's web applications, implementing features with Node.js and Express, optimizing MongoDB queries, and integrating Redis caching for performance.`,
    // link: 'https://www.copernicus.com/internships/web-development',
  },
  {
    company: 'C3iHub',
    role: 'Full Stack Development Intern',
    duration: 'May 2025 - Ongoing',
    tech: 'Node.js, React.js, Express.js, MongoDB, Docker, AWS',
    description: `At C3iHub, I develop scalable full-stack applications by building robust RESTful APIs with Node.js and Express, designing dynamic frontends with React.js, managing databases with MongoDB, containerizing with Docker, and deploying on AWS, while collaborating closely with teams to ensure high performance, security, and maintainability.`,
    link: 'https://c3ihub.org/',
  }
  
];

function Internships() {
  const [showMore, setShowMore] = useState(false);

  const displayedInternships = showMore ? internshipData : internshipData.slice(0, 3);

  return (
    <div id="internships" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">My Internships</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
        Here are some of the internships I have completed, where I gained practical experience working with modern technologies and real-world projects. These experiences helped me deepen my understanding of software development, backend engineering, and machine learning workflows in professional environments.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {displayedInternships.map((internship, index) => (
          <div
            key={index}
            className="w-full bg-[#2a2a2a]/60 backdrop-blur-md border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left"
          >
            <h2 className="text-2xl font-semibold mb-1 text-yellow-400">{internship.company}</h2>
            <p className="text-lg font-semibold mb-1">{internship.role}</p>
            <p className="text-sm text-gray-400 italic mb-2">{internship.duration}</p>
            <p className="text-sm text-gray-400 italic mb-2">Tech: {internship.tech}</p>
            <p className="text-gray-300 mb-4">{internship.description}</p>
            {internship.link && (
              <a
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-semibold"
              >
                Learn More
              </a>
            )}
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

export default Internships;
