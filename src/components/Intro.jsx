import React from "react";
import images from "../assets/images.png";

function Intro() {
  return (
    <div
      id="home"
      className="relative w-full h-[calc(100vh-5rem)] max-w-[90rem] mx-auto px-4 sm:px-8 overflow-hidden"
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center h-full w-full">
        <span className="text-xl sm:text-2xl md:text-3xl font-light">Hello,</span>

        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
          I'm <span className="text-yellow-400">Suyash</span> <br /> 
          <span className="text-white">Full Stack Developer</span>
        </span>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 font-extralight w-full sm:w-[90%] md:w-[70%] lg:w-[50%] leading-relaxed">
          I'm a Full-Stack Developer with a strong focus on the MERN stack, passionate about building scalable, high-performance web applications. 
          I regularly explore Data Structures & Algorithms to strengthen my problem-solving abilities. 
          With multiple real-world projects under my belt, I enjoy creating end-to-end solutions that combine clean design, efficient code, and meaningful functionality.
        </p>
      </div>

      {/* Background Image */}
      <img
        src={images}
        alt="Background"
        className="absolute top-0 right-0 h-full w-full object-cover z-[-1] opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-70"
      />
    </div>
  );
}

export default Intro;
