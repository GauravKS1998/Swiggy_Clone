import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { PiSealPercentFill } from "react-icons/pi";
import restaurants from "./Restaurants.json";

function Restaurant_home() {
    return (
        <>
            <div className="restaurant_home">
                <div className="restaurant_scroll_btns">
                    <h2>Discover best restaurants on Dineout</h2>
                    <span>
                        <button>
                            <FaArrowLeft />
                        </button>
                        <button>
                            <FaArrowRight />
                        </button>
                    </span>
                </div>
                <div className="all_restaurants">
                    {restaurants.map((data) => {
                        return (
                            <div key={data.id} className="restaurant">
                                <div
                                    className="img_part"
                                    style={{
                                        background: `url(${data.image}) ,linear-gradient(180deg, rgba(255, 255, 255, 0.44) 0%, rgba(255,255,255,0) 29%, rgba(0,0,0,1) 100%)`,
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <h2>{data.name}</h2>
                                    <div>
                                        <b>
                                            <MdStars />
                                        </b>
                                        <h2>{data.rating}</h2>
                                    </div>
                                </div>
                                <div className="details_part">
                                    <div>
                                        <span>
                                            <p>{data.cuisine}</p>
                                            <p>₹{data.price} for two</p>
                                        </span>
                                        <span>
                                            <p>{data.address}</p>
                                            <p>{data.distance} km</p>
                                        </span>
                                    </div>
                                    <span className="rest_discount">
                                        <p>
                                            <b>
                                                <PiSealPercentFill />
                                            </b>
                                            Flat {data.discount} off on
                                            {data.discount_on}
                                        </p>
                                        <p>+ {data.no_of_benifits} more</p>
                                    </span>
                                    <span className="rest_offer">
                                        <p>Up to 10% off with bank offers</p>
                                    </span>
                                    <span>
                                        <b>
                                            Get extra {data.extra_off} off using
                                            {data.extra_off_code}
                                        </b>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Restaurant_home;
