import React from "react";

const statsData = [
    { value: "3 Billion+", label: "orders delivered" },
    { value: "220k+", label: "restaurant partners" },
    { value: "520k+", label: "delivery partners" },
    { value: "680+", label: "cities in India" },
];

const AboutIndustryNumberCount = () => {
    return (
        <>
            <div className="stats-container">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-box">
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                        {index < statsData.length - 1 && (
                            <div className="divider" />
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default AboutIndustryNumberCount;
