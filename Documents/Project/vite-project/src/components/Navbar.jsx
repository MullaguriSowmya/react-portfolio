// import React from 'react';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//    <>
//     <nav className="navbar">
//       <ul className="nav-links">
//         <li>
//           <Link to="/Home">Home</Link>
//         </li>
//         <li>
//           <Link to="/About">About</Link>
//         </li>
//         <li>
//           <Link to="/Education">Education</Link>
//         </li>
//         <li>
//           <Link to="/Contact">Contact</Link>
//         </li>
//         <li>
//           <Link to="/Projects">Projects</Link>
//         </li>
//          <li>
//           <Link to="/Certificates">Certificates</Link>
//         </li>
//         <li>
//           <Link to="/Internship">Internship</Link>
//         </li>
//         <li>
//           <Link to="/Achievements">Achievements</Link>
//         </li>
//         <li>
//           <Link to="/Skills">Skills</Link>
//         </li>
//       </ul>
//     </nav>

//     {/* <nav className="navbar">
//       <Link to="/Home">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/education">Education</Link>
//       <Link to="/skills">Skills</Link>
//       <Link to="/projects">Projects</Link>
//       <Link to="/certifications">Certifications</Link>
//       <Link to="/experience">Experience</Link>
//       <Link to="/achievements">Achievements</Link>
//       <Link to="/contact">Contact</Link>
//     </nav> */}
//     </>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useTheme } from "../components/ThemeContext";
function Navbar()  {
  const { darkMode, setDarkMode } = useTheme();
  return (
   
    <nav className="navbar">
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certificates">Certificates</Link>
      <Link to="/intership">Intership</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/contact">Contact</Link>
      </div>
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>

  );
}

export default Navbar;