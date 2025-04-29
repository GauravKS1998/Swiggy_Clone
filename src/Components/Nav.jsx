import React, { useState } from "react";
import nav_logo from "../assets/Swiggy_logo.png";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router";
import Login from "./Login";

function Nav() {
    const [log, setLogin] = useState(false);
    const [right, setRight] = useState("-37%");

    function moveRight() {
        setRight("0%");
        setLogin(true);
        document.body.style.overflowY = "hidden";
    }

    function moveLeft() {
        setRight("-37%");
        setLogin(false);
    }

    return (
        <>
            <nav>
                <div className="nav_left">
                    <img src={nav_logo} alt="" />
                </div>
                <div className="nav_right">
                    <NavLink to="/swiggy_corporate">Swiggy Corporate</NavLink>
                    <NavLink to="/partner_with_us">Partner with us</NavLink>
                    <button>
                        Get the App
                        <b>
                            <MdArrowOutward />
                        </b>
                    </button>
                    <button
                        className="nav_home_signin"
                        onClick={log ? moveLeft : moveRight}
                    >
                        Sign in
                    </button>
                </div>
            </nav>

            <Login value={right} setRight={setRight} setLogin={setLogin} />
        </>
    );
}

export default Nav;
