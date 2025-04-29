import React from "react";
import { Head } from "./Sustainability_Goals";
import { Para } from "./Sustainability_Environment";

function Sustainability_Governance() {
    return (
        <>
            <div className="sustainability_governance_box">
                <div className="sustainability_governance_content">
                    <Head>Governance</Head>
                    <Para>
                        <b>Strong Governance:</b> Our experienced Board, led by
                        independent directors, upholds high corporate governance
                        and oversees our key business functions.
                    </Para>
                    <Para>
                        <b>Diversity at Work:</b> We foster inclusivity with
                        initiatives like permanent remote work and programs
                        celebrating women’s growth and entrepreneurship.
                    </Para>
                    <Para>
                        <b>Empowering Women:</b> Through communities like
                        Swigstree and initiatives like She the Change, we
                        support women employees and F&B entrepreneurs.
                    </Para>
                </div>
                <img src="/documents.png" alt="" />
            </div>
        </>
    );
}

export default Sustainability_Governance;
