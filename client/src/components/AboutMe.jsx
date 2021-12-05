//Imports hooks from react
import React from "react";
import './styles/Style.scss'

export default function AboutMe(){
return (
    //wrapping div
    <div className="aboutMe">
        <h1>About me!</h1>
        {/* paragraph about me  */}
        <p>I am a native Vermonter, born in Burltion VT and have been here ever since.
           In 2019 went to Castleton University for business management, i liked it but covid hit and sent everyone home.
           The following year i decided to take it of and explore my options.
           In my exploring i came across Burlington code academy.
           It sounded like a good option. I had always been working with computers 
           and it sounded like a good focused carer path, out of this course.
           i took the preDev class and loved it! So here i am learning full stack developer in the web design corse!
        </p>
    </div>
)
}