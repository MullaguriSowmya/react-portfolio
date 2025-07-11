import React from 'react';
import './Navbar.css';
function Achievements() {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>🎯 Achievements</h2>

      {/* Achievement 1 */}
      <div style={{ marginBottom: '30px' }}>
        <h3>📜 Web Development Certification</h3>
        <p>
          Successfully completed a hands-on Web Development course from <strong>CodeGenious</strong> where I learned to build responsive websites using HTML, CSS, JavaScript, and React.js.
        </p>
        
      </div>

      {/* Achievement 2 */}
      <div style={{ marginBottom: '30px' }}>
        <h3>📄 MongoDB for Beginners – Certificate</h3>
        <p>
          Completed the <strong>MongoDB</strong> course by <strong>L&T EduTech</strong>, covering NoSQL databases, CRUD operations, indexing, and Mongo shell usage.
        </p>
        
      </div>

      {/* Achievement 3 */}
      <div>
        <h3>🎨 UI/UX Design Developer Certificate</h3>
        <p>
          Earned a certificate in <strong>UI/UX Design</strong> from <strong>L&T EduTech</strong>, learning principles of visual hierarchy, wireframing, Figma basics, and user experience design.
        </p>
       
      </div>
    </section>
  );
}

export default Achievements;