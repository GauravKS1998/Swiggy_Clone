import React from "react";
import Swiggy_Home from "./Components/Swiggy_Home";
import Swiggy_Corporate from "./Components/Swiggy_Corporate";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Swiggy_Partner from "./Components/Swiggy_Partner";
import Error_page from "./Components/Error_page";
import Swiggy_Corporate_Business from "./Components/Swiggy_Corporate/Swiggy_Corporate_Business";
import Swiggy_Corporate_Delivery from "./Components/Swiggy_Corporate/Swiggy_Corporate_Delivery";
import Swiggy_Corporate_Contact from "./Components/Swiggy_Corporate/Swiggy_Corporate_Contact";
import Swiggy_Corporate_Sustainability from "./Components/Swiggy_Corporate/Swiggy_Corporate_Sustainability";

function App() {
    const routing = createBrowserRouter([
        {
            path: "/",
            errorElement: <Error_page />,
            element: <Swiggy_Home />,
        },
        {
            path: "/swiggy_corporate",
            errorElement: <Error_page />,
            element: <Swiggy_Corporate />,
        },
        {
            path: "/swiggy_corporate/our_businesses",
            errorElement: <Error_page />,
            element: <Swiggy_Corporate_Business />,
        },
        {
            path: "/swiggy_corporate/delivering_for_everyone",
            errorElement: <Error_page />,
            element: <Swiggy_Corporate_Delivery />,
        },
        {
            path: "/swiggy_corporate/sustainability",
            errorElement: <Error_page />,
            element: <Swiggy_Corporate_Sustainability />,
        },
        {
            path: "/swiggy_corporate/contact_us",
            errorElement: <Error_page />,
            element: <Swiggy_Corporate_Contact />,
        },
        {
            path: "/partner_with_us",
            errorElement: <Error_page />,
            element: <Swiggy_Partner />,
        },
    ]);
    return (
        <>
            <RouterProvider router={routing} />
        </>
    );
}

export default App;
