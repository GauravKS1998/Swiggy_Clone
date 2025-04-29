import { img } from "framer-motion/client";
import React from "react";

const initiatives = [
    {
        img: "/initiative_1.png",
        title: "She The Change",
        content:
            "Launched in March 2024, ‘She the Change: From vision to venture’ is a programme which puts a spotlight on women entrepreneurs in the F&B industry.",
        img_size: "120px",
    },
    {
        img: "/initiative_2.png",
        title: "Swiggy Delivering Safely: A charter for all delivery partners",
        content:
            "In March 2024, Swiggy launched a nationwide road safety charter to strengthen our commitment towards the safety of our delivery partners",
        img_size: "130px",
    },
    {
        img: "/initiative_3.png",
        title: "Swiggy Pawlice - Reuniting hoomans with their lost pets",
        content:
            "This service empowers pet parents to report a missing pet directly on the Swiggy app.",
        img_size: "100%",
        height: "100%",
    },
];

function Sustainability_Initiatives() {
    return (
        <>
            <div className="sustainability_initiatives">
                <img src="/Burger_speaker.png" alt="" />
                <h2>Our initiatives</h2>
                <div className="sustainability_initiatives_container">
                    {initiatives.map((data, index) => {
                        return (
                            <div
                                className="sustainability_initiatives_box"
                                key={index}
                            >
                                <div className="initiative_img">
                                    <img
                                        src={data.img}
                                        alt=""
                                        style={{
                                            width: data.img_size,
                                            height: data.height,
                                        }}
                                    />
                                </div>
                                <div className="initiative_content">
                                    <h3>{data.title}</h3>
                                    <p>{data.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Sustainability_Initiatives;
