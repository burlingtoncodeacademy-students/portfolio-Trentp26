import React from "react";
import { useState } from "react";
import "./styles/Modal.scss"

function Modal1({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={() => setOpenModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Ultamte Frisbee</h1>
        </div>
        <div className="body">
          <p>
            Started playing frisbee in highschool for 4 years, and played for
            fun ever since!{" "}
          </p>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Modal1;
