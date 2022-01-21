//Imports hooks from react
import React from "react";
import { Link } from "react-router-dom";
import './Style.scss'

export default function Projects(){
return (
    <div>
        <h1>Projects</h1>
        {/* list of all the repos on your personal github account and linked */}
        <h3>GitHub Account:<a href="https://github.com/Trentp26">Trent26</a></h3>
        {/* links to git hub projects */}
        <div>
            <li><a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Trentp26-1">Capstone project</a></li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/react-chat-trenton-and-paul">Chat Application</a></li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/guess-the-number-Trentp26-1">Terminal Game</a></li>
            <li><a href="https://github.com/burlingtoncodeacademy-students/jeopardy-Trentp26">Jeopardy</a></li>
        </div>
        {/* screenshot of all projects  */}
    </div>
)
}