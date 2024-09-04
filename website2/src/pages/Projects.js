import React from "react";
import "./Projects.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="Projects">
      <ul className="navbar">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects |
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>

      <div className="container">
        <h1 className="text-left">Projects</h1>
        <div className="project-list">
          <div className="project-item">
            <a href="https://github.com/laurenyip/ai4good" target="_blank">
              <button class="btn custom-btn">Brig.AI</button>
            </a>
            <p>
              Brig.ai empowers women affected by PCOS and Endometriosis to take
              charge of their health journey. We provide personalized insights
              and recommended diagnostic tests, bridging the gap between patient
              advocacy and medical understanding. [Jun 2024][AI4GOOD Lab]
            </p>
          </div>

          <div className="project-item">
            <a
              href="https://devpost.com/software/emergency-response-bc-erbc"
              target="_blank"
            >
              <button class="btn custom-btn">Emergency Response BC</button>
            </a>
            <p>
              This was my first hackathon project! With my amazing team, I
              helped design and implement a functional webapp that can take
              location data and output a list of the nearest hospitals and their
              emergency room wait time. [Jan 2024][nwHACKS 2024]
            </p>
          </div>

          <div className="project-item">
            <a href="laurenyip.com" target="_blank">
              <button class="btn custom-btn">This Website!</button>
            </a>
            <p>
              Was coded with the help of HTML, Bootstrap CSS, JS, and lots of
              edits... [Dec 2023]
            </p>
          </div>
        </div>

        <div className="project-item">
         
       
             
            
             
                <a
                  href="https://github.com/laurenyip"
                  target="_blank"   >
                  <button class="btn custom-btn">GITHUB</button>
             
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <p>See the repositories!</p>
            
     
   
      </div>

     
    </div>
  );
}

export default Projects;
