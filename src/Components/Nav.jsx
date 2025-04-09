import React from "react";
import nav_logo from "../assets/Swiggy_logo.png";
import { MdArrowOutward } from "react-icons/md";

function Nav() {
    return (
        <>
            <nav>
                <div className="nav_left">
                    <img src={nav_logo} alt="" />
                </div>
                <div className="nav_right">
                    <a href="#">Swiggy Corporate</a>
                    <a href="#">Partner with us</a>
                    <button>
                        Get the App
                        <b>
                            <MdArrowOutward />
                        </b>
                    </button>
                    <button className="nav_home_signin">Sign in</button>
                </div>
            </nav>
        </>
    );
}

export default Nav;
