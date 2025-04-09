import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Food_types() {
    return (
        <>
            <div className="food_types">
                <div className="type_scroll_btns">
                    <button>
                        <FaArrowLeft />
                    </button>
                    <button>
                        <FaArrowRight />
                    </button>
                </div>
                <div className="food_all_types">
                    <img src="Biryani.avif" alt="" />
                    <img src="Kebab.avif" alt="" />
                    <img src="Pizza.avif" alt="" />
                    <img src="Ice Cream.avif" alt="" />
                    <img src="Burger_2.avif" alt="" />
                    <img src="Noodles.avif" alt="" />
                    <img src="North_Indian.avif" alt="" />
                    <img src="Parotta.avif" alt="" />
                    <img src="Momo_2.avif" alt="" />
                    <img src="Chinese.avif" alt="" />
                    <img src="Paratha.avif" alt="" />
                    <img src="Khichdi.avif" alt="" />
                    <img src="Rolls.avif" alt="" />
                    <img src="Salad.avif" alt="" />
                    <img src="Chole Bhature.avif" alt="" />
                    <img src="Pasta.avif" alt="" />
                    <img src="Cake.avif" alt="" />
                    <img src="Juice.avif" alt="" />
                    <img src="Dosa.avif" alt="" />
                    <img src="Pure Veg.avif" alt="" />
                </div>
            </div>
        </>
    );
}

export default Food_types;
