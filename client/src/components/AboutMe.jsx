//Imports hooks from react
import React from "react";
import "./Style.scss";

export default function AboutMe() {
  return (
    //wrapping div
    <div className="aboutMe">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff0000"
          fill-opacity="1"
          d="M0,192L240,64L480,96L720,32L960,160L1200,64L1440,256L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
        ></path>
      </svg>
      <h1>About me!</h1>
      {/* paragraph about me  */}
      <p>
        I am a native Vermonter, born in Burltion VT and have been here ever
        since. In 2019 went to Castleton University for business management, i
        liked it but covid hit and sent everyone home. The following year i
        decided to take it of and explore my options. In my exploring i came
        across Burlington code academy. It sounded like a good option. I had
        always been working with computers and it sounded like a good focused
        carer path, out of this course. i took the preDev class and loved it! So
        here i am learning full stack developer in the web design corse!
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff0000"
          fill-opacity="1"
          d="M0,64L40,69.3C80,75,160,85,240,112C320,139,400,181,480,186.7C560,192,640,160,720,170.7C800,181,880,235,960,234.7C1040,235,1120,181,1200,176C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
