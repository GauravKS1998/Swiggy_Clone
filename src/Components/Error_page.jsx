import React from "react";
import { useNavigate, useRouteError } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";

function Error_page() {
    let msg = useRouteError();
    let navigate = useNavigate();
    function back() {
        navigate(-1);
    }
    return (
        <>
            <div className="error_page">
                <button onClick={back}>
                    <b>
                        <FaArrowLeft />
                    </b>
                    Go Back
                </button>
                <img
                    src="https://cdn.dribbble.com/userupload/26077333/file/original-1e3f06aa7578b32c1d33b718c9f1d4af.gif"
                    alt=""
                />
                <h1>{msg.message}</h1>
            </div>
        </>
    );
}

export default Error_page;
