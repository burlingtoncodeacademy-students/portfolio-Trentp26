//importing hooks from React
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";
import Nav from "./components/NavBar";
import Projects from "./components/ProjectsPage";
import WorkH from "./components/WorkH";
import BackGround from "./components/Backround";
import Modal1 from "./components/Modal1";

export default function App(props) {
  //routes to the other chat boxes and back to home
  return (
    <div>
      <BrowserRouter>
        {/* Routes is the container for all of our potential routes */}
        <Routes>
          {/* Route is each individual route; we will utilize the path and element prop. 
 Path reflects the URL path, element is where we render our component */}
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Nav />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workHistory" element={<WorkH />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/background" element={<BackGround />} />
          <Route path="/modal1" element={<Modal1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
