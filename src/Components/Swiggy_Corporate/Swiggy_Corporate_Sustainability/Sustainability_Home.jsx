import React from "react";
import Sustainability_Goals from "./Sustainability_Goals";
import Sustainability_Environment from "./Sustainability_Environment";
import { div } from "framer-motion/client";
import Sustainability_Social from "./Sustainability_Social";
import Sustainability_Governance from "./Sustainability_Governance";

function Sustainability_Home() {
    return (
        <>
            <div className="sustainability_home">
                <div className="sustainability_bg">
                    <img src="/earth.png" alt="" />
                </div>
                <div className="sustainability_home_container">
                    <div className="sustainability_home_heading">
                        <h1>Sustainability at Swiggy</h1>
                        <p>
                            Swiggy’s sustainability objectives are aligned with
                            our mission to elevate the quality of life of urban
                            consumers, and the United Nations Sustainable
                            Development Goals (SDGs)
                        </p>
                    </div>
                    <div className="sustainability_goals">
                        <Sustainability_Goals />
                    </div>
                    <div className="sustainability_environment">
                        <Sustainability_Environment />
                    </div>
                    <div className="sustainability_social">
                        <Sustainability_Social />
                    </div>
                    <div className="sustainability_governance">
                        <Sustainability_Governance />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sustainability_Home;
