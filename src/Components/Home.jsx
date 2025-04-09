import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
    return (
        <>
            <div className="home">
                <h1>
                    Order food & groceries. Discover best restaurants. Swiggy
                    it!
                </h1>
                <div className="input_field">
                    <span>
                        <b style={{ color: "#ff5200" }}>
                            <FaLocationDot />
                        </b>
                        <input
                            type="text"
                            placeholder="Enter your delivery location"
                        />
                        <b>
                            <IoIosArrowDown />
                        </b>
                    </span>
                    <span>
                        <input
                            type="text"
                            placeholder="Search for restaurant, item or more"
                        />
                        <b>
                            <IoIosSearch />
                        </b>
                    </span>
                </div>
                <div className="img_box">
                    <img src="delivery.avif" alt="" />
                    <img src="dineout.avif" alt="" />
                    <img src="genie.avif" alt="" />
                </div>
                <img src="Veggies_new.avif" alt="" className="left_img" />
                <img src="Sushi_replace.avif" alt="" className="right_img" />
            </div>
        </>
    );
}

export default Home;
