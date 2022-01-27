//Imports hooks from react
import React from "react";
import "./Style.scss";
import photo from "./IMG/Screenshot.jpg";
import "./styles/Work.scss";

export default function WorkH() {
  return (
    <div className="workWrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="TopDiv"
      >
        <path
          fill="orange"
          fill-opacity="1"
          d="M0,64L48,106.7C96,149,192,235,288,229.3C384,224,480,128,576,80C672,32,768,32,864,74.7C960,117,1056,203,1152,208C1248,213,1344,139,1392,101.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="workHDiv">
        <div className="titleDiv">
          <h1>Work History</h1>
          {/* Your career goal(s). */}
          {/* Prior employers going back ten years. */}
          {/* Personal skills and experience */}
          <h5>
            My Goal is to find a career path that I can strive and grow in
          </h5>
        </div>
        {/* past employers */}

        <div className="employerDiv">
          <h2>Shaws</h2>
        </div>
        <div className="employerDiv">
          <h2>LCT (lake Champlain Transportation)</h2>
        </div>
        <div className="employerDiv">
          <h2>Vermont Meat and SeaFood</h2>
        </div>
        <div className="employerDiv">
          <h2>Self employed(2 years)</h2>
        </div>
      </div>
      {/* link and picture of resume */}
      <div className="resumeImg">
        <a href="/assets/Resume.docx.pdf" download>
          <img
            className="Img"
            src={photo}
            alt="My Personal Resume Screenshot"
          />
        </a>
      </div>
    </div>
  );
}
