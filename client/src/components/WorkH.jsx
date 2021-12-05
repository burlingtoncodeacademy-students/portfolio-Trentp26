//Imports hooks from react
import React from "react";
import "./styles/Style.scss";
import photo from "./IMG/Screenshot.jpg"

export default function WorkH() {
  return (
    <div>
      <h1>work history</h1>
      {/* Your career goal(s). */}
      {/* Prior employers going back ten years. */}
      {/* Personal skills and experience */}
      <h5>My Goal is to find a career path that I can strive and grow in</h5>
      {/* past employers */}
      <ul>
          Past Employers
          <li>Shaws</li>
          <li>LCT (lake Champlain Transportation)</li>
          <li>Vermont Meat and SeaFood</li>
          <li>self employed(2 years)</li>
      </ul>
      {/* link and picture of resume */}
      <a href="/assets/Resume.docx.pdf" download>
        <img
        className="resumeImg"
          src={photo}
          alt="My Personal Resume Screenshot"
        />
      </a>
    </div>
  );
}
