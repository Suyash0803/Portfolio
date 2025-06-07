import React from 'react';
import WebDesign from '../../src/assets/website-design.png';
import DSA from '../assets/DSA.png';

function About() {
  return (
    <div id="about" className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white text-center max-w-[90rem] mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold">What I Do</h2>
      
      <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
        I'm Suyash Rai, a passionate full-stack developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js.
        I enjoy building scalable, real-world web applications from the ground up — from crafting pixel-perfect user interfaces to designing
        and securing robust backend APIs with JWT authentication. I regularly practice data structures and algorithms to stay sharp and
        continuously seek performance improvements in my code.
      </p>

      <div className="mt-12 flex flex-col lg:flex-row gap-10 items-center lg:items-stretch justify-center">
        
        {/* Website Design Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-6 sm:p-8 w-full max-w-[700px] shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-4">
            <img src={WebDesign} alt="Web Design" className="w-16 h-16 sm:w-20 sm:h-20" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">
              Website Design
            </h3>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I craft visually appealing and responsive web interfaces using React.js, Tailwind CSS, HTML, and CSS, with a strong focus on user experience and accessibility.
            I ensure every component is scalable and integrates seamlessly into a robust full-stack architecture powered by MERN, Redis, Docker, and AWS.
          </p>
        </div>

        {/* DSA Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-6 sm:p-8 w-full max-w-[700px] shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-4">
            <img src={DSA} alt="DSA" className="w-16 h-16 sm:w-20 sm:h-20" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">
              Data Structures & Algorithms
            </h3>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I consistently practice DSA to sharpen my problem-solving skills. With over 700 LeetCode problems solved and 900+ across platforms,
            I write clean and optimal code — keeping myself prepared for coding rounds, system design, and competitive programming.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
