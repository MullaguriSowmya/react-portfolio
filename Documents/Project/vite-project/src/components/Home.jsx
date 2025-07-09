import React from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profilePic from '../assets/profile.jpg';
// import Resume from "../components/resume";
import './Navbar.css';
function Home() {
  return (
    <>
   <div class="profile-container">
    <div class="profile-image">
      <img
        src={profilePic}
        alt="Profile"
        className="profile-img" 
      />
    </div>
        <div class="profile-content">
      <b><h2 style={{ fontSize: '2.2rem' }}>Hi, I'm Sowmya Mullaguri</h2></b>
      <p style={{ fontSize: '1.2rem' }}>Frontend Developer specializing in React.js</p>
      <p>I’m a React developer passionate about building beautiful and responsive UIs using React.js, Tailwind CSS, and modern web tools.</p>
    <br></br>
    <div className="flex gap-4"> 
                              <a href="https://github.com/MullaguriSowmya/react-portfolio.git" className="text-blue-600 font-medium" target="_blank">GitHub Live Demo</a>
                          </div>
    </div>
    
  </div>

    </>
  );
}
export default Home;