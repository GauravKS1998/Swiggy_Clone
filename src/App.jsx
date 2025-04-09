import React from "react";
import Home_main from "./Components/Home_main";
import Food_types from "./Components/Food_types";
import Restaurant_home from "./Components/Restaurant_home";
import App_show from "./Components/App_show";
import Cities_with from "./Components/Cities_with";
import Contact from "./Components/Contact";

function App() {
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

export default App;
