import React from "react";

const Resume = () => {
  return (
    <section className="bg-gray-100 py-12 px-6" id="resume">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">My Resume</h2>
        <p className="text-gray-700 mb-6">
          Here’s a quick view and download option of my resume. Feel free to check it out!
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        {/* Optional Preview */}
        <div className="mt-10 shadow-lg border rounded-lg overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume Preview"
            width="100%"
            height="600px"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
