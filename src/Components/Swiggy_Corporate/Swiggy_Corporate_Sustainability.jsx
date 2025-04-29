import React from "react";
import About_Nav from "../About_Nav";
import Sustainability_Home from "./Swiggy_Corporate_Sustainability/Sustainability_Home";
import Sustainability_Initiatives from "./Swiggy_Corporate_Sustainability/Sustainability_Initiatives";
import Sustainability_Blogs from "./Swiggy_Corporate_Sustainability/Sustainability_Blogs";
import Business_Get_App from "./Swiggy_Corporate_Business/Business_Get_App";
import About_Contact from "../About_Contact";

function Swiggy_Corporate_Sustainability() {
    return (
        <>
            <About_Nav />
            <Sustainability_Home />
            <Sustainability_Initiatives />
            <Sustainability_Blogs />
            <Business_Get_App />
            <About_Contact />
        </>
    );
}

export default Swiggy_Corporate_Sustainability;
