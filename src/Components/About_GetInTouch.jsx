import React from "react";

function About_GetInTouch() {
    return (
        <>
            <div className="about_getInTouch">
                <h1>
                    <span></span>GET IN TOUCH WITH US<span></span>
                </h1>
                <div className="getInTouch_container">
                    <div className="getInTouch_address">
                        <div>
                            <h3>Head Office Address:</h3>
                            <span>
                                <p>
                                    Swiggy Limited (Formerly known as Bundl
                                    Technologies Private Limited & Swiggy
                                    Private Limited)
                                </p>
                                <p>
                                    No. 55 Sy No 8 to 14 I & J Block – Ground
                                    Floor, Embassy Tech Village | Outer Ring
                                    Road, Devarbisanahalli, Bengaluru – 560103
                                </p>
                            </span>
                        </div>
                        <div>
                            <h3>For help and support:</h3>
                            <p>Email : support@swiggy.in</p>
                        </div>
                    </div>
                    <div className="getInTouch_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497750.35188281094!2d77.693063!3d12.928622000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d0c47c7ad9%3A0x96b90ab7aae4436b!2sSwiggy%20HO!5e0!3m2!1sen!2sus!4v1745652040922!5m2!1sen!2sus"
                            width="400"
                            height="300"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About_GetInTouch;
