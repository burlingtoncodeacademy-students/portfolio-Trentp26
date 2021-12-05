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
        //wrapping div
        <div className="wrapper">
            <section id="Home">
                {/* navigation bar */}
            <div className="navDiv"><Nav/></div>
            <img className="TrentImg" src={logo} alt="Picture of Trenton Poitras" /> 
            {/* header */}
            <h1>Trenton poitras</h1>
            <h4> An adventurous programer ready to tackle the world of web development  </h4>
            </section>
            {/* Component  */}
            <section id="AboutMe">
            <AboutMe />
            </section>
{/* Component  */}
            <section id="Projects">
            <Projects/>
            </section>
{/* Component  */}
            <section id="WorkHistory">
            <WorkH/>
            </section>
{/* Component  */}
            <section id="Hobbies">
            <Hobbies/>
            </section>
{/* Component  */}
            <section id="Footer">
            <Footer/>
            </section>

        </div>
    )
}