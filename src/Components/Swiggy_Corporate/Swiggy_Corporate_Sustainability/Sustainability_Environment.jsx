import React from "react";
import styled from "styled-components";
import { Head } from "./Sustainability_Goals";

const Para = styled.p`
    font-size: 110%;
    color: #414449;
`;

export { Para };

function Sustainability_Environment() {
    return (
        <>
            <div className="sustainability_environment_box">
                <div className="sustainability_environment_content">
                    <Head>Environment</Head>
                    <Para>
                        <b>Green Deliveries:</b> We’re driving sustainability
                        with EVs, better charging access, and partnerships for
                        greener journeys.
                    </Para>
                    <Para>
                        <b>Less Plastic:</b> Ditching single-use plastic, we
                        champion compostable bags and reusable packaging.
                    </Para>
                    <Para>
                        <b>Eco-Saver:</b> Smart order batching slashes costs,
                        ups efficiency, and rewards users with discounts.
                    </Para>
                </div>
                <img src="/swiggy-delivery.webp" alt="" />
            </div>
        </>
    );
}

export default Sustainability_Environment;
