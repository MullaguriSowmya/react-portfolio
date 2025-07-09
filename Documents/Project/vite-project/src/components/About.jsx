import React from 'react';

function About() {
  return (
    <><section>

      <p>I am a B.Tech 3nd-year student
        I'm a passionate and dedicated third-year B.Tech student specializing in Information technology at Sri Venkateswara college of engineering.
        I have a strong interest in web development, software engineering, and learning new technologies.
        I am currently building my portfolio by working on personal and academic projects using technologies like HTML, CSS, JavaScript, and React JS.
      </p>

      <p>
        I'm always eager to explore new areas in tech, collaborate with others, and improve my problem-solving and coding skills.
        I'm also actively seeking internship opportunities to gain real-world experience and grow as a developer.
      </p>.
    </section><section className="bg-gray-100 py-12 px-6" id="resume">
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

        </div>
      </section></>
  );
}

export default About;