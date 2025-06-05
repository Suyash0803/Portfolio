import React from 'react'
import WebDesign from '../../src/assets/website-design.png'
import DSA from '../assets/DSA.png'

function About() {
  return (
    <div id="about" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">What I Do</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
        I'm Suyash Rai, a passionate full-stack developer specializing in the MERN stack — MongoDB, Express.js, React.js, and Node.js. I enjoy building scalable, real-world web applications from the ground up — from crafting pixel-perfect user interfaces to designing and securing robust backend APIs with JWT authentication. I'm deeply involved in the entire development lifecycle and love bringing ideas to life through clean, efficient code.
To keep my problem-solving edge sharp, I regularly practice data structures and algorithms and continuously seek ways to improve both logic and performance in my solutions.
      </p>

      <div className="mt-12 flex flex-col gap-10 items-center">
        
        {/* Website Design Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-8 max-w-[700px] w-full shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-5">
            <img src={WebDesign} alt="Web Design" className="w-20 h-20" />
            <h2 className="text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">Website Design</h2>
          </div>
          <p className="text-gray-300 text-[1.05rem] leading-relaxed">
I craft visually appealing and responsive web interfaces using React.js, Tailwind CSS, HTML, and CSS, with a strong focus on user experience and accessibility. Whether it's a landing page, dashboard, or a complete single-page application, I ensure every component is scalable, reusable, and integrates seamlessly into a robust full-stack architecture powered by the MERN stack, Redis, Docker, and AWS.

          </p>
        </div>

        {/* DSA Card */}
        <div className="bg-[#2a2a2a]/60 backdrop-blur-sm border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-3xl p-8 max-w-[700px] w-full shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left group">
          <div className="flex items-center gap-4 mb-5">
            <img src={DSA} alt="DSA" className="w-20 h-20" />
            <h2 className="text-3xl font-bold text-yellow-400 group-hover:scale-105 transition-transform">Data Structures & Algorithms</h2>
          </div>
          <p className="text-gray-300 text-[1.05rem] leading-relaxed">
I consistently practice Data Structures and Algorithms (DSA) to sharpen my problem-solving and analytical thinking. With over 700 problems solved on LeetCode and 900+ across all platforms, I focus on writing clean, efficient, and optimal code. This regular practice keeps me well-prepared for coding rounds, system design discussions, and competitive programming challenges.

          </p>
        </div>
      </div>
    </div>
  )
}

export default About
