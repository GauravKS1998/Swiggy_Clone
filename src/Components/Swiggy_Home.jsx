import React from "react";
import Home_main from "./Home_main";
import Food_types from "./Food_types";
import Restaurant_home from "./Restaurant_home";
import App_show from "./App_show";
import Cities_with from "./Cities_with";
import Contact from "./Contact";

function Swiggy_Home() {
    return (
        <>
            <Home_main />
            <Food_types />
            <Restaurant_home />
            <App_show />
            <Cities_with />
            <Contact />
        </>
    );
}

export default Swiggy_Home;
