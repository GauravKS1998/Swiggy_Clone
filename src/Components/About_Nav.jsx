import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink } from "react-router";

function About_Nav() {
    return (
        <>
            <div className="about_nav">
                <img src="/Swiggy_about.png" alt="" />
                <div className="about_nav_right">
                    <NavLink to="/swiggy_corporate" activeClassName="active">
                        About Swiggy
                    </NavLink>
                    <NavLink to="/swiggy_corporate/our_businesses">
                        Our Businesses
                    </NavLink>
                    <NavLink to="/swiggy_corporate/delivering_for_everyone">
                        Delivering For Everyone
                    </NavLink>
                    <a href="#">Newsroom</a>
                    <span>
                        <a href="#">Investor Relations</a>
                        <b>
                            <TiArrowSortedDown />
                        </b>
                    </span>
                    <NavLink to="/swiggy_corporate/sustainability">
                        Sustainability
                    </NavLink>
                    <NavLink to="/swiggy_corporate/contact_us">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default About_Nav;
