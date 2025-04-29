import React from "react";
import { Head } from "./Sustainability_Goals";
import { Para } from "./Sustainability_Environment";

function Sustainability_Social() {
    return (
        <>
            <div className="sustainability_social_box">
                <img src="/social.png" alt="" />
                <div className="sustainability_social_content">
                    <Head>Social</Head>
                    <Para>
                        <b>Delivery Partners’ Welfare:</b> We’re fostering safer
                        roads with initiatives that encourage responsible
                        driving habits.
                    </Para>
                    <Para>
                        <b>Road Safety Workshops:</b> Through the “Drive Safely”
                        campaign, we’ve trained delivery partners with workshops
                        and a road safety charter across states.
                    </Para>
                    <Para>
                        <b>SafeCity Initiative:</b> Partnering with NGOs, we
                        raise awareness on gender biases and harassment through
                        training videos and a reporting app.
                    </Para>
                </div>
            </div>
        </>
    );
}

export default Sustainability_Social;
