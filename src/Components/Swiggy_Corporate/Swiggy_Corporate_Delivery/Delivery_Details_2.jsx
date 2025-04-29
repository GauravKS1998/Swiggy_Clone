import React from "react";
import { Deliver_Button } from "./Delivery_Details";

function Delivery_Details_2() {
    return (
        <>
            <div className="delivery_details_2">
                <div
                    className="delivery_detail_box"
                    style={{ padding: "14vh 0" }}
                >
                    <div className="delivery_ride_info delivery_detail_info">
                        <span>
                            <h2>Ride with Swiggy</h2>
                            <p>
                                Join our platform and earn regular payouts with
                                exciting bonuses and incentives, along with
                                other benefits
                            </p>
                        </span>
                        <Deliver_Button>Apply now</Deliver_Button>
                    </div>
                    <img src="/swiggy-ride.png" alt="" />
                </div>

                <hr className="delivery_hr" />

                <div
                    className="delivery_detail_box"
                    style={{ padding: "0 0 5vh 0" }}
                >
                    <img src="/swiggy-partner.png" alt="" />
                    <div className="delivery_partner_info delivery_detail_info">
                        <span>
                            <h2>Swiggy Restaurant Partner Programme</h2>
                            <p>
                                Our unified app approach enables our partner
                                base to benefit from a larger user base across
                                offerings, flexible and larger logistics and
                                delivery network, and tools to expand their
                                businesses.
                            </p>
                        </span>
                        <Deliver_Button>Partner with us</Deliver_Button>
                    </div>
                </div>

                <hr className="delivery_hr" />

                <div className="delivery_detail_box">
                    <div className="delivery_flavour_info delivery_detail_info">
                        <span>
                            <h2>Flavour Meets Fame</h2>
                            <p>
                                If you ever wanted to thank your favourite
                                restaurants and wondered how, here’s your chance
                                to express your love by casting a vote for them.
                            </p>
                        </span>
                        <Deliver_Button>Know more</Deliver_Button>
                    </div>
                    <img src="/swiggy-awards.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Delivery_Details_2;
