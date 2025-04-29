import React from "react";
import About_Nav from "../About_Nav";
import Delivery_Home from "./Swiggy_Corporate_Delivery/Delivery_Home";
import Business_Get_App from "./Swiggy_Corporate_Business/Business_Get_App";
import About_Contact from "../About_Contact";
import Delivery_Details from "./Swiggy_Corporate_Delivery/Delivery_Details";
import Delivery_Details_2 from "./Swiggy_Corporate_Delivery/Delivery_Details_2";

function Swiggy_Corporate_Delivery() {
    return (
        <>
            <About_Nav />
            <Delivery_Home />
            <Delivery_Details />
            <hr className="about_hr" />
            <Delivery_Details_2 />
            <Business_Get_App />
            <About_Contact />
        </>
    );
}

export default Swiggy_Corporate_Delivery;
