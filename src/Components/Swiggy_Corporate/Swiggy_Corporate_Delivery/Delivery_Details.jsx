import React from "react";
import styled from "styled-components";

const Deliver_Button = styled.button`
    justify-self: start;
    padding: 14px 20px;
    border-radius: 15px;
    font-size: 100%;
    font-weight: 600;
    background-color: #ff5200;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
`;

export { Deliver_Button };

function Delivery_Details() {
    return (
        <>
            <div className="delivery_details">
                <div className="delivery_swiggy_one">
                    <img src="/swiggy-delivery.webp" alt="" />
                    <div className="delivery_swiggy_one_info">
                        <span>
                            <h2>Swiggy One</h2>
                            <p>
                                Swiggy One is our membership programme,
                                accessible across offerings, that offers members
                                discounts and promotions on our platform,
                                including free delivery on select orders. Users
                                can become Swiggy One members by paying a
                                membership fee.
                            </p>
                        </span>
                        <Deliver_Button>Know more</Deliver_Button>
                    </div>
                </div>
                <div className="delivery_hdfc_bank">
                    <div className="delivery_hdfc_bank_info">
                        <span>
                            <h2>HDFC Bank Credit Card</h2>
                            <p>
                                Get ready to experience the awesome world of
                                cashback and benefits with the Swiggy HDFC Bank
                                Credit Card!
                            </p>
                        </span>
                        <Deliver_Button>Apply now</Deliver_Button>
                    </div>
                    <img src="/hdfcs-card.webp" alt="" />
                </div>
            </div>
        </>
    );
}

export default Delivery_Details;
