import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink } from "react-router";

function About_Nav() {
    return (
        <>
            <div className="about_nav">
                <img src="Swiggy_about.png" alt="" />
                <div className="about_nav_right">
                    <NavLink to="/swiggy_corporate" activeClassName="active">
                        About Swiggy
                    </NavLink>
                    <NavLink to="/swiggy_corporate/our_businesses">
                        Our Businesses
                    </NavLink>
                    <a href="#">Delivering For Everyone</a>
                    <a href="#">Newsroom</a>
                    <span>
                        <a href="#">Investor Relations</a>
                        <b>
                            <TiArrowSortedDown />
                        </b>
                    </span>
                    <a href="#">Sustainability</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </>
    );
}

export default About_Nav;
