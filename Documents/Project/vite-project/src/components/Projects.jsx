import React from 'react';
import './Navbar.css';
function Projects() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2>Projects</h2>
      <div style={{marginbottom:'20x'}}>
        <h3>1.TODO List</h3>
        <p> A simple task management web app built using Python where user can add,delete,and mark tasks as complete</p>
        {/* <a href={https//github.com/MullaguriSowmya/TO-DO-LIST}> </a> */}
        <a href="https//github.com/MullaguriSowmya/TO-DO-LIST">GitHub</a>
      </div>
      <div>
        <h3>2.Hairstyles Gallery</h3>
        <p>A responsive gallery showcasing various hairstyle using HTML,CSS and javascript</p>
        <a href="https//imgs.search.brave.com/kZ1Igqu8lohZLSBL__1h1Gj-9mwir8h_iJPjQj6nTX0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Y4L2Q1/L2JjL2Y4ZDViY2Vl/Y2U2NjFjMzJlNzZi/OTY1M2IyMjhmYWRk/LmpwZw
        ">GitHub</a>
            </div>
    </section>

  );
}

export default Projects;