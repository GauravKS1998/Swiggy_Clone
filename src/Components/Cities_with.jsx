import React from "react";
import cities from "./Cities.json";

function Cities_with() {
    return (
        <>
            <div className="cities_with">
                <div className="food_delivery">
                    <h2>Cities with food delivery</h2>
                    <div className="cities">
                        {cities.map((city) => {
                            return (
                                <div key={city.id} className="city">
                                    <p>Order food online in {city.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="grocery_delivery">
                    <h2>Cities with grocery delivery</h2>
                    <div className="cities">
                        {cities.map((city) => {
                            return (
                                <div key={city.id} className="city">
                                    <p>Order grocery delivery in {city.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cities_with;
