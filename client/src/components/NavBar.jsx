//Imports hooks from react
import React from "react";
import "./Style.scss";
import "./styles/Nav.scss";

export default function Nav() {
  return (
    //navigation bar
    <div className="navWrapper">
      <div class="dropdown">
        <button class="dropbtn">Nav Bar</button>
        <div class="dropdown-content">
          <a href="#Home">Home</a>
          {/* links to each component  */}
          <a href="#AboutMe">About Me </a>
          <a href="#Projects">My projects</a>
          <a href="#WorkHistory">Work History</a>
          <a href="#Hobbies">Hobbies</a>
          <a href="#Footer">Contact me</a>
        </div>
      </div>
    </div>
  );
}
