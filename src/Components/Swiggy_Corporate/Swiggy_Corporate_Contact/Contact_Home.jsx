import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact_Button = styled.button`
    justify-self: start;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 75%;
    font-weight: 600;
    background-color: #ff5200;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
`;

export { Contact_Button };

function Contact_Home() {
    return (
        <>
            <div className="contact_home">
                <div className="contact_home_container">
                    <div className="contact_address">
                        <div className="contact_heading">
                            <h1>Customer Support</h1>
                            <h3>
                                Email: <a href="#">support@swiggy.in</a>
                            </h3>
                        </div>
                        <div className="contact_links">
                            <h2>Find us on</h2>
                            <div className="contact_link_icons">
                                <b>
                                    <FaLinkedin />
                                </b>
                                <b>
                                    <RiInstagramFill />
                                </b>
                                <b>
                                    <FaFacebook />
                                </b>
                                <b>
                                    <FaPinterest />
                                </b>
                                <b>
                                    <FaXTwitter />
                                </b>
                            </div>
                        </div>
                        <div className="contact_detail_add">
                            <h2>Corporate Office</h2>
                            <p>
                                No. 55, Sy No. 8-14, Ground Floor, I&J Block,
                                Embassy TechVillage, Outer Ring Road,
                                Devarbisanahalli, Bengaluru 560 103, Karnataka,
                                India, Corporate Identity Number:
                                U74110KA2013PLC096530 Registration Number:
                                096530
                            </p>
                            <Contact_Button>Get Directions</Contact_Button>
                        </div>
                    </div>
                    <div className="contact_form">
                        <h2>Get in touch</h2>
                        <form action="dialog" className="contact_form_input">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Email Address"
                            />
                            <textarea
                                name="message"
                                placeholder="Enter Message"
                                rows={6}
                            ></textarea>
                            <Contact_Button>Submit</Contact_Button>
                        </form>
                        <p>
                            By contacting us you agree to the{" "}
                            <a href="#">Terms and Conditions</a> and{" "}
                            <a href="#">Privacy Policy</a>
                        </p>
                    </div>
                </div>

                <img src="/Sandwich.webp" alt="" id="contact_sandwitch" />
                <img src="/salad-bowl.webp" alt="" id="contact_salad" />
            </div>
        </>
    );
}

export default Contact_Home;
