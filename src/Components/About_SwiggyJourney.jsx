import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const journeyData = [
    {
        year: 2024,
        content: ["Swiggy platform crossed 110 million ever transacted users"],
        img: "i2024.png",
    },
    {
        year: 2023,
        content: ["Launch of Swiggy HDFC Bank co-branded credit card"],
        img: "i2023.png",
    },
    {
        year: 2022,
        content: [
            "Acquisition and integration of Dineout on Swiggy app",
            "Launch of Swiggy Minis",
        ],
        img: "i2022.png",
    },
    {
        year: 2021,
        content: ["Launch of membership programme Swiggy One"],
        img: "i2021.png",
    },
    {
        year: 2020,
        content: ["Launch of Swiggy Instamart and Swiggy Genie"],
        img: "i2020.png",
    },
    {
        year: 2014,
        content: ["Launch of our Food Delivery business"],
        img: "i2014.png",
    },
];

const AboutSwiggyJourney = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { year, content, img } = journeyData[currentIndex];

    const handleNavigation = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex =
                direction === "next" ? prevIndex + 1 : prevIndex - 1;
            return (newIndex + journeyData.length) % journeyData.length;
        });
    };

    return (
        <div className="about_swiggyJourney">
            <h1 className="section-title">
                <span></span> THE SWIGGY JOURNEY <span></span>
            </h1>
            <div className="swiggy_yearRecord">
                <div className="year_record">
                    <h1>{year}</h1>
                    <div className="record_box">
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <img src={img} alt={`Swiggy Journey ${year}`} />
                    </div>
                </div>
                <div className="journey_slide_btn">
                    <button onClick={() => handleNavigation("prev")}>
                        <FaArrowLeft />
                    </button>
                    <button onClick={() => handleNavigation("next")}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutSwiggyJourney;
