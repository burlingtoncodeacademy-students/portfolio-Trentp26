//Imports hooks from react
import React from "react";
import "./Style.scss";
import "./styles/Hobbies.scss";

export default function Hobbies() {
  return (
    //wrapping div
    <div classname="HWrapper">
      <div className="hobbiesDiv">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="topSvg"
        >
          <path
            fill="gray"
            fill-opacity="1"
            d="M0,224L48,224C96,224,192,224,288,218.7C384,213,480,203,576,192C672,181,768,171,864,176C960,181,1056,203,1152,186.7C1248,171,1344,117,1392,90.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        {/* hobbies */}
        <div className="text">
          <h1>Hobbies</h1>
        </div>
        <div className="text">
          <h1>ultimate</h1>
        </div>
        <div className="text">
          <h1>outdoors</h1>
        </div>
        <div className="text">
          <h1>working Out/Body Building</h1>
        </div>
      </div>
    </div>
  );
}
