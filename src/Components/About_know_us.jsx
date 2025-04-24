import { b } from "framer-motion/client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function About_know_us() {
    let [isMission, setIsMission] = useState(false);
    let [isVision, setIsVision] = useState(false);
    let [isValues, setIsValues] = useState(false);
    return (
        <>
            <div className="about_know_us">
                <h1>
                    <span></span>GET TO KNOW US<span></span>
                </h1>
                <div className="about_tab">
                    <div className="about_tab_btns">
                        <button onClick={() => setIsMission(true)}>
                            {isMission
                                ? "Mission"
                                : `Mission(<FaArrowRight />)`}
                        </button>
                        <button onClick={() => setIsVision(true)}>
                            {isVision ? "Vision" : `Vision(<FaArrowRight />)`}
                        </button>
                        <button onClick={() => setIsValues(true)}>
                            {isValues ? "Values" : `Values(<FaArrowRight />)`}
                        </button>
                    </div>
                    <div className="about_tab_info"></div>
                </div>
            </div>
        </>
    );
}

export default About_know_us;
