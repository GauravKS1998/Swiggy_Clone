import React from "react";
import Mangement_team from "./Management_team.json";
import { FaArrowRight } from "react-icons/fa6";

function Management_members() {
    return (
        <>
            {Mangement_team.map((member) => {
                return (
                    <>
                        <div className="member_box">
                            <img src={member.img} alt="" />
                            <div className="member_info">
                                <span>
                                    <h3>{member.name}</h3>
                                    <p>{member.position}</p>
                                </span>
                                <button>
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default Management_members;
