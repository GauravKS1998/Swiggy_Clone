import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Management_members from "./Management_members";
import Board_members from "./Board_members";

function About_Team() {
    const [isBoardOpen, setIsBoardOpen] = useState(false);

    function openManagement() {
        setIsBoardOpen(false);
    }

    function openBoard() {
        setIsBoardOpen(true);
    }

    return (
        <div className="about_team">
            <div className="about_team_btns">
                <div className="team_switch_btns">
                    <button
                        onClick={openManagement}
                        className={!isBoardOpen ? "active" : ""}
                    >
                        Management Team
                    </button>
                    <button
                        onClick={openBoard}
                        className={isBoardOpen ? "active" : ""}
                    >
                        Board of Directors
                    </button>
                </div>
                <div className="team_slide_btns">
                    <button>
                        <FaArrowLeft />
                    </button>
                    <button>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className="team_members">
                {isBoardOpen ? <Board_members /> : <Management_members />}
            </div>
        </div>
    );
}

export default About_Team;
