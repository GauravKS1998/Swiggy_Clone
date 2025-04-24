import React from "react";
import Swiggy_Home from "./Components/Swiggy_Home";
import Swiggy_Corporate from "./Components/Swiggy_Corporate";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Swiggy_Partner from "./Components/Swiggy_Partner";
import Error_page from "./Components/Error_page";

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
            children: [
                {
                    path: "/swiggy_corporate",
                    element: <Swiggy_Corporate />,
                },
                {
                    path: "/swiggy_corporate/our_businesses",
                },
            ],
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
