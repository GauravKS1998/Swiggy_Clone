import React from "react";
import Board_of_directors from "./Board_of_directors.json";
import { FaArrowRight } from "react-icons/fa6";

function Board_members() {
    return (
        <>
            {Board_of_directors.map((member) => {
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

export default Board_members;
