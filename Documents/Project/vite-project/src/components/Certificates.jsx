import React from 'react';

import webdevelopment from '../assets/webdevelopment.png';
import mongodb from '../assets/mongodb.png';
import './Navbar.css';
function Certificates() {
  return (
    <>
    {/* <section style={{ padding: '40px 20px' }}>
        
    </section> */}
    <section className="px-4 py-10 md:px-20 bg-white">
      <b><h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Web Development Certification Details 
      </h2></b>
      <br></br>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
                   <tbody className="text-gray-800 text-sm">
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Certificate Name &nbsp;&nbsp;&nbsp;</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
                Web Development Certificate
              </td>
            </tr>
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Issuer</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
                The platform or institution ( <em>CodeGenius</em>)
              </td>
            </tr>
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Date</td></b>
              <td className="py-3 px-4 border-b border-gray-200">May - Sep 2024</td>
            </tr>
             <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Skills Gained</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
              A web development certificate will equip me with foundational skills in web development, including HTML, CSS, and JavaScript. 
              </td>
            </tr>
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Application</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
                HTML, CSS, JavaScript
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <br></br>
<img src={webdevelopment} alt="Logo" width="300" /> 
<section className="px-4 py-10 md:px-20 bg-white" style={{ padding: '20px 20px' }}>
      <b><h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        MangoDB Certification Details 
      </h2></b>
      <br></br>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
                   <tbody className="text-gray-800 text-sm">
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Certificate Name &nbsp;&nbsp;</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
               MangoDB Certificate
              </td>
            </tr>
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Issuer</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
                The platform or institution ( <em>L&T EduTech</em>)
              </td>
            </tr>
            <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Date</td></b>
              <td className="py-3 px-4 border-b border-gray-200">Apr - Aug 2024</td>
            </tr>
             <tr>
              <b><td className="py-3 px-4 border-b border-gray-200 font-medium">Skills Gained</td></b>
              <td className="py-3 px-4 border-b border-gray-200">
              Used MongoDB to design and manage a NoSQL database for a full-stack web application. Learned to structure collections, perform efficient queries, and use aggregation for real-time analytics.
              </td>
            </tr>
                      </tbody>
        </table>
      </div>
    </section>
    <br></br>
<img src={mongodb} alt="Logo" width="300" />    
    </>


   );
}

export default Certificates;
      