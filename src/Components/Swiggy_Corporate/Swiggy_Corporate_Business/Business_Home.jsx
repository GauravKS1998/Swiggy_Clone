import React from "react";
import Swiggy_Businesses from "./Swiggy_Businesses.json";

function Business_Home() {
    return (
        <>
            <div className="business_home">
                <h1>OUR BUSINESSES</h1>
                <div className="business_home_container">
                    {Swiggy_Businesses.map((item) => {
                        return (
                            <>
                                <div
                                    className="business_box"
                                    style={{
                                        gridTemplateRows:
                                            item.grid_template_rows,
                                    }}
                                >
                                    <div className="business_img">
                                        <img
                                            src={item.img}
                                            alt=""
                                            style={{
                                                maxWidth: item.max_width,
                                                bottom: item.bottom,
                                            }}
                                        />
                                    </div>
                                    <div className="business_title">
                                        <h2>{item.title}</h2>
                                        <hr />
                                    </div>
                                    <div className="business_content">
                                        <p>{item.content}</p>
                                        <button>{item.button}</button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Business_Home;
