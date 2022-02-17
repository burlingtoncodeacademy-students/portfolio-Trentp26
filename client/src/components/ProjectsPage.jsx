//Imports hooks from react
import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";
import "./styles/Projects.scss";

export default function Projects() {
  return (
    <div className="Projectwrapper">
      <h1>Projects</h1>
      {/* list of all the repos on your personal github account and linked */}
      <h3>
        GitHub Account:<a href="https://github.com/Trentp26">Trent26</a>
      </h3>
      {/* links to git hub projects */}
      <div className="projectSquare">
        <div className="square">
          <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Trentp26-1">
            <p>Capstone project</p>
          </a>
        </div>
        <div className="square">
          <a href="https://github.com/burlingtoncodeacademy-students/react-chat-trenton-and-paul">
            <p>Chat Application</p>
          </a>
        </div>
        <div className="square">
          <a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Trentp26-1">
            <p>Terminal Game</p>
          </a>
        </div>
        <div className="square">
          <a href="https://github.com/burlingtoncodeacademy-students/jeopardy-Trentp26">
            <p>Jeopardy</p>
          </a>
        </div>
      </div>
      {/* bottom svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="SVG"
      >
        <path
          fill="gray"
          fill-opacity="1"
          d="M0,96L40,106.7C80,117,160,139,240,138.7C320,139,400,117,480,117.3C560,117,640,139,720,160C800,181,880,203,960,197.3C1040,192,1120,160,1200,160C1280,160,1360,192,1400,208L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
