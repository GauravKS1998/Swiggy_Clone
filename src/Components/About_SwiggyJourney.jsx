import { h1, img } from "framer-motion/client";
import React, { useState } from "react";
import { GiDiamonds } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const journeyData = [
    {
        year: 2020,
        content: ["Launch of Swiggy Instamart and Swiggy Genie"],
        img: "i2020.png",
    },
    {
        year: 2021,
        content: ["Launch of membership programme Swiggy One"],
        img: "i2021.png",
    },
    {
        year: 2022,
        content: [
            "Aquisition and integration of Dineout on Swiggy app",
            "Launch of Swiggy Minis",
        ],
        img: "i2022.png",
    },
    {
        year: 2023,
        content: ["Launch of Swiggy HDFC Bank co-branded credit card"],
        img: "i2023.png",
    },
    {
        year: 2024,
        content: ["Swiggy platform crossed 110 million ever transacted users"],
        img: "i2024.png",
    },
    {
        year: 2014,
        content: ["Launch of our Food Delivery business"],
        img: "i2014.png",
    },
    // Add more years as needed
];

function About_SwiggyJourney() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < journeyData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const { year, content, emoji } = journeyData[currentIndex];

    return (
        <>
            <div className="about_swiggyJourney">
                <h1>
                    <span></span>THE SWIGGY JOURNEY<span></span>
                </h1>
                <div className="swiggy_yearRecord">
                    {journeyData.map((data) => {
                        return (
                            <div className="year_record" key={data.year}>
                                <h1>{data.year}</h1>
                                <div className="record_box">
                                    <ul>
                                        {data.content.map((list) => {
                                            return (
                                                <>
                                                    <li>{list}</li>
                                                </>
                                            );
                                        })}
                                    </ul>
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                        );
                    })}
                    <div className="journey_slide_btn">
                        <button>
                            <FaArrowLeft />
                        </button>
                        <button>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About_SwiggyJourney;
