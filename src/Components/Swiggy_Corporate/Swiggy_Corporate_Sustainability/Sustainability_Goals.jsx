import React from "react";
import styled from "styled-components";

const Head = styled.h1`
    color: #161a1f;
    font-size: 160%;
    font-weight: 600;
`;

export { Head };

function Sustainability_Goals() {
    return (
        <>
            <div className="sustainability_goals_box">
                <h2>Our commitment to UNSDG Goals</h2>
                <span>
                    <img src="/unsdg-1-1.png" alt="" />
                    <img src="/unsdg-2-1.png" alt="" />
                    <img src="/unsdg-3-1.png" alt="" />
                    <img src="/unsdg-4-1.png" alt="" />
                    <img src="/unsdg-5-1.png" alt="" />
                    <img src="/unsdg-6-1.png" alt="" />
                </span>
            </div>
        </>
    );
}

export default Sustainability_Goals;
