//Imports hooks from react
import React from "react";
import { Link } from "react-router-dom";
import logo from "./IMG/trent.JPG";
import Nav from "./NavBar";
import Hobbies from "./Hobbies";
import WorkH from "./WorkH";
import Projects from "./ProjectsPage";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import BackGround from "./Backround";
import "./Style.scss";
import Particles from "react-tsparticles";
import "./styles/Home.scss";

export default function Home() {
  return (
    //wrapping div
    <div className="wrapper">
      <BackGround id="tsparticles" />
      <Nav />
      <section id="Home">
        {/* navigation bar */}
        <div className="navDiv"></div>
        <div className="imageBox">
          <img
            className="TrentImg"
            src={logo}
            alt="Picture of Trenton Poitras"
          />
        </div>
        <div className="textBox">
          {/* header */}
          <h1>Trenton poitras</h1>
          <h4>
            {" "}
            An adventurous programer ready to tackle the world of web
            development{" "}
          </h4>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="orange"
            fill-opacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,112C320,139,400,181,480,186.7C560,192,640,160,720,170.7C800,181,880,235,960,234.7C1040,235,1120,181,1200,176C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>

      {/* Component  */}
      <section id="AboutMe">
        <AboutMe />
      </section>
      {/* Component  */}
      <section id="Projects">
        <Projects />
      </section>
      {/* Component  */}
      <section id="WorkHistory">
        <WorkH />
      </section>
      {/* Component  */}
      <section id="Hobbies">
        <Hobbies />
      </section>
      {/* Component  */}
      <section id="Footer">
        <Footer />
      </section>
    </div>
  );
}
