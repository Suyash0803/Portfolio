import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      className="text-center py-16 bg-[#1a1a1a] text-white max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">Resume</h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-6">
        Click the button below to download or view my resume.
      </p>
      <a
        href="/Suyash_Rai_Resume.pdf"    // Make sure file is in public folder
        download="Suyash_Rai_Resume.pdf" // This forces download; remove if you want open in new tab
        className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
        target="_blank"                  // Opens in new tab (optional)
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
