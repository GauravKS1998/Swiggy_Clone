import React from "react";
import About_Nav from "./About_Nav";
import About_Home_Map from "./About_Home_Map";
import About_video from "./About_video";
import About_know_us from "./About_know_us";
import About_Industry from "./About_Industry";
import About_SwiggyJourney from "./About_SwiggyJourney";
import About_Team from "./About_Team";
import About_Careers from "./About_Careers";
import About_Blog from "./About_Blog";
import About_Get_app from "./About_Get_app";
import About_GetInTouch from "./About_GetInTouch";
import About_Contact from "./About_Contact";

function About_Swiggy() {
    return (
        <>
            <About_Nav />
            <About_Home_Map />
            <About_video />
            <About_know_us />
            <hr className="about_hr" />
            <About_Industry />
            <About_SwiggyJourney />
            <About_Team />
            <hr className="about_hr" />
            <About_Careers />
            <hr className="about_hr" />
            <About_Blog />
            <About_Get_app />
            <About_GetInTouch />
            <About_Contact />
        </>
    );
}

export default About_Swiggy;
