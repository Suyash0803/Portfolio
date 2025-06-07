import React, { useState } from "react";
import logo from "../../src/assets/logo.png";
import { Link } from "react-scroll";
import contact from "../../src/assets/contact.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Add "resume" to desktop menu links
  const sections = ["home", "about", "projects", "skills", "resume"];

  return (
    <nav className="sticky top-0 z-30 bg-black bg-opacity-80 backdrop-blur-md px-4 sm:px-10 py-4 flex items-center justify-between max-w-[90rem] mx-auto">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="h-16 w-16 object-cover translate-y-1"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-white">
        {sections.map((section) =>
          section !== "resume" ? (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ) : (
            // For Resume link, use direct anchor tag to open/download resume PDF
            <a
              key={section}
              href="/Suyash_Rai_Resume.pdf"
              download="Suyash_Rai_Resume.pdf"  // Remove if you want it to open in browser
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400 active:scale-95 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          )
        )}
      </div>

      {/* Contact Button (desktop) */}
      <button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full border border-gray-400 hover:shadow-[0_6px_15px_rgba(255,255,255,0.3)] hover:scale-105 hover:bg-gray-200 transition-all duration-300 ease-in-out">
        <img src={contact} alt="contact icon" className="h-4 w-4 object-cover" />
        <Link to="contact" smooth={true} duration={500}>
          Contact Me
        </Link>
      </button>

      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-white rounded transition duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-full bg-white rounded transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 backdrop-blur-md flex flex-col items-center py-4 space-y-4 md:hidden text-white font-medium text-lg z-20">
          {sections.map((section) =>
            section !== "resume" ? (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ) : (
              <a
                key={section}
                href="/Suyash_Rai_Resume.pdf"
                download="Suyash_Rai_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-yellow-400 hover:underline decoration-yellow-400"
              >
                Resume
              </a>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
