import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact_top">
                    <div className="logo_col">
                        <img src="Swiggy.svg" alt="" />
                        <p>© 2025 Swiggy Limited</p>
                    </div>
                    <div className="contact_top_right">
                        <div className="company_col con_cols">
                            <h3>Company</h3>
                            <a href="#">About Us</a>
                            <a href="#">Swiggy Corporate</a>
                            <a href="#">Careers</a>
                            <a href="#">Team</a>
                            <a href="#">Swiggy One</a>
                            <a href="#">Swiggy Instamart</a>
                            <a href="#">Swiggy Dineout</a>
                            <a href="#">Swiggy Genie</a>
                            <a href="#">Minis</a>
                            <a href="#">Pyng</a>
                        </div>
                        <div className="third_col">
                            <div className="contact_col con_cols">
                                <h3>Contact Us</h3>
                                <a href="#">Help & Support</a>
                                <a href="#">Partner With Us</a>
                                <a href="#">Ride With Us</a>
                            </div>
                            <div className="legal_col con_cols">
                                <h3>Legal</h3>
                                <a href="#">Terms & Conditions</a>
                                <a href="#">Cookie Policy</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="available_col con_cols">
                            <h3>Available In:</h3>
                            <a href="#">Bangalore</a>
                            <a href="#">Gurgaon</a>
                            <a href="#">Hyderabad</a>
                            <a href="#">Delhi</a>
                            <a href="#">Mumbai</a>
                            <a href="#">Pune</a>
                            <button>
                                685 cities
                                <b>
                                    <IoIosArrowDown />
                                </b>
                            </button>
                        </div>
                        <div className="final_col">
                            <div className="life_col con_cols">
                                <h3>Life at Swiggy</h3>
                                <a href="#">Explore With Swiggy</a>
                                <a href="#">Swiggy News</a>
                                <a href="#">Snackables</a>
                            </div>
                            <div className="social_col">
                                <h3>Social Links</h3>
                                <div className="social_col_links">
                                    <a href="#">
                                        <FaLinkedin />
                                    </a>
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#">
                                        <FaPinterest />
                                    </a>
                                    <a href="#">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <footer>
                    <h2>For better experience, download the Swiggy app now</h2>
                    <img src="app_store.avif" alt="" />
                    <img src="google_play.avif" alt="" />
                </footer>
            </div>
        </>
    );
}

export default Contact;
