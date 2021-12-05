//Imports hooks from react
import React from "react";
import { Link } from "react-router-dom";
import logo from "./IMG/trent.JPG"
import Nav from "./NavBar";
import Hobbies from "./Hobbies";
import WorkH from "./WorkH";
import Projects from "./ProjectsPage";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import './styles/Style.scss'

export default function Home (){
    return(
        <div className="wrapper">
            <section id="Home">
            <div className="navDiv"><Nav/></div>
            <img className="TrentImg" src={logo} alt="Picture of Trenton Poitras" /> 
            <h1>Trenton poitras</h1>
            <h4> An adventurous programer ready to tackle the world of web development  </h4>
            </section>
            
            <section id="AboutMe">
            <AboutMe />
            </section>

            <section id="Projects">
            <Projects/>
            </section>

            <section id="WorkHistory">
            <WorkH/>
            </section>

            <section id="Hobbies">
            <Hobbies/>
            </section>

            <section id="Footer">
            <Footer/>
            </section>

        </div>
    )
}