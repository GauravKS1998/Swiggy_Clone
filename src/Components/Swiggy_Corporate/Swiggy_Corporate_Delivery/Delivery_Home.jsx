import React from "react";
import Delivery_Home_options from "./Delivery_Home_options.json";

function Delivery_Home() {
    return (
        <>
            <div className="delivery_home">
                <div className="delivery_home_head">
                    <h1>DELIVERING FOR EVERYONE</h1>
                    <p>
                        Multiple benefits across the ecosystem for consumers,
                        partners and riders
                    </p>
                </div>
                <div className="delivery_home_container">
                    {Delivery_Home_options.map((item, index) => {
                        return (
                            <div className="delivery_option_box" key={index}>
                                <div className="delivery_box_img">
                                    <img src={item.img} alt="" />
                                </div>
                                <span>{item.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Delivery_Home;
