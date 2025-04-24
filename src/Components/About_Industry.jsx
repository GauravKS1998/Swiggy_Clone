import React from "react";
import About_Industry_numberCount from "./About_Industry_numberCount";

function About__Industry() {
    return (
        <>
            <div className="about_industry">
                <h1>
                    <span></span>INDUSTRY PIONEER<span></span>
                </h1>
                <div className="industry_info">
                    <p>
                        Being among the first few entrants, Swiggy has
                        successfully pioneered the hyperlocal commerce industry
                        in India, launching Food Delivery in 2014 and Quick
                        Commerce in 2020. Due to the pioneering status of
                        Swiggy, it is well-recognised as a leader in innovation
                        in hyperlocal commerce and as a brand synonymous with
                        the categories it is present in.
                    </p>
                    <div>
                        <img src="industry_pioneer.png" alt="" />
                    </div>
                </div>
                <div className="about_number_count">
                    <About_Industry_numberCount />
                </div>
            </div>
        </>
    );
}

export default About__Industry;
