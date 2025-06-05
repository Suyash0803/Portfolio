import React from "react";
import images from "../assets/images.png";
function Intro() {
  return (
    <div id="home" className="relative h-[calc(100vh-5rem)] w-screen max-w-[75rem] mx-auto overflow-hidden">
      <div className="h-screen w-screen p-8 text-[3rem] font-bold flex flex-col justify-center">
        <span className="text-[1.75 rem] font-thin">Hello,</span>
        <span>I'm <span className="text-yellow-400">Suyash</span> <br /> Full Stack Developer</span>
        <p className="mt-2 text-gray-300 font-extralight text-lg w-[40%]">
          I'm a Full-Stack Developer with a strong focus on the MERN stack, passionate about building scalable, high-performance web applications. I regularly explore Data Structures & Algorithms to strengthen my problem-solving abilities. With multiple real-world projects under my belt, I enjoy creating end-to-end solutions that combine clean design, efficient code, and meaningful functionality.
        </p>
      </div>
      <img src={images} alt="" className="absolute  top-[-4rem] z-[-1] h-[100vh] object-top object-cover  sm:right-[-3rem]"/>
    </div>
  );
}

export default Intro;
