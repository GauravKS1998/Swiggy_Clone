import React from "react";

function Contact_Infos() {
    return (
        <>
            <div className="contact_infos">
                <div className="contact_info_container">
                    <div className="contact_info_left">
                        <div className="contact_info_left_content">
                            <h2>Investors/Shareholders</h2>
                            <span>
                                <h3>Abhishek Agarwal</h3>
                                <p>Vice President, Investor Relations</p>
                                <h4>
                                    Email: <a href="#">ir@swiggy.in</a>
                                </h4>
                            </span>
                        </div>
                        <div className="contact_info_left_content">
                            <h2>Registrar and Share Transfer Agent</h2>
                            <span>
                                <p>
                                    Link Intime India Private Limited Registrar
                                    and Share Transfer Agent 543/A, 7th Main,
                                    3rd Cross S L Bhyrappa Road, Hanumanthnagar
                                    Bengaluru, Karnataka 560019
                                </p>
                                <h4>
                                    Email:{" "}
                                    <a href="#">
                                        https://www.linkintime.co.in/
                                    </a>
                                </h4>
                            </span>
                        </div>
                    </div>
                    <div className="contact_info_right">
                        <h2>Public Relations and Media</h2>
                        <span>
                            <h3>Sanjana Shetty (Swiggy Instamart)</h3>
                            <h4>
                                Email: <a href="#">sanjana.shetty1@swiggy.in</a>
                            </h4>
                        </span>
                        <span>
                            <h3>
                                Akanksha Jain (Swiggy Food and Swiggy Dineout)
                            </h3>
                            <h4>
                                Email: <a href="#">akanksha.j@swiggy.in</a>
                            </h4>
                        </span>
                        <h3>
                            All media queries can also be addressed to:{" "}
                            <a href="#">pr@swiggy.in</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact_Infos;
