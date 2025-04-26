import { b } from "framer-motion/client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import About_know_Mission from "./About_know_Mission";
import About_know_Vision from "./About_know_Vision";
import About_know_Values from "./About_know_Values";

function AboutKnowUs() {
    const [activeTab, setActiveTab] = useState("Mission");

    const tabContent = {
        Mission: {
            text: <About_know_Mission />,
        },
        Vision: {
            text: <About_know_Vision />,
        },
        Values: {
            text: <About_know_Values />,
        },
    };

    return (
        <div className="about_know_us">
            <h1>
                <span></span>GET TO KNOW US<span></span>
            </h1>
            <div className="about_tab">
                <div className="about_tab_btns">
                    {["Mission", "Vision", "Values"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={activeTab === tab ? "active" : ""}
                        >
                            <span>
                                <p>{tab}</p>
                                <b>{activeTab === tab && <FaArrowRight />}</b>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="about_tab_info">
                    <p>{tabContent[activeTab].text}</p>
                </div>
            </div>
        </div>
    );
}

export default AboutKnowUs;
