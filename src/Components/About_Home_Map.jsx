import React from "react";

function About_Home_Map() {
    return (
        <>
            <div className="about_home_map">
                <div className="about_map_heading">
                    <h1>ABOUT US</h1>
                    <h3>
                        Swiggy is a new-age consumer-first organization offering
                        an easy-to-use convenience platform, accessible through
                        a unified app.
                    </h3>
                    <span>
                        <img src="up_comet.png" alt="" />
                        <img src="down_comet.png" alt="" />
                    </span>
                </div>
                <div className="map_indicators">
                    <span>
                        <img src="food.png" alt="" />
                        <img src="instamart.png" alt="" />
                        <img src="dineout.png" alt="" />
                    </span>
                    <span>
                        <img src="genie.png" alt="" />
                        <img
                            src="swiggy_map_sign.png"
                            alt=""
                            className="sign"
                        />
                        <img src="minis.png" alt="" />
                    </span>
                </div>
            </div>
        </>
    );
}

export default About_Home_Map;
