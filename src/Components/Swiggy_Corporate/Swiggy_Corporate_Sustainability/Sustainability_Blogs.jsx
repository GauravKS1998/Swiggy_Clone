import { title } from "framer-motion/client";
import React from "react";
import { Contact_Button } from "../Swiggy_Corporate_Contact/Contact_Home";

const Esg_blogs = [
    {
        img: "/esg_blog_1.png",
        date: "October 19, 2023",
        title: "Bowled Over: How one Swiggy delivery executive delivered on and off the cricket field",
    },
    {
        img: "/esg_blog_2.jpg",
        date: "October 3, 2023",
        title: "Swiggy’s Capital Assist: Empowering Restaurants with Financial Solutions",
    },
    {
        img: "/esg_blog_3.png",
        date: "September 12, 2023",
        title: "Here’s how Swiggy’s new learning tool is helping its restaurant partners grow",
    },
];

function Sustainability_Blogs() {
    return (
        <>
            <div className="sustainability_blogs">
                <h1>
                    <span></span>ESG Blogs<span></span>
                </h1>
                <div className="esg_all_blogs">
                    {Esg_blogs.map((blog) => {
                        return (
                            <>
                                <div className="esg_single_blog">
                                    <img src={blog.img} alt="" />
                                    <div className="esg_blog_info">
                                        <span>
                                            <p>{blog.date}</p>
                                            <h3>{blog.title}</h3>
                                        </span>
                                        <button>Read more</button>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <button>View All Blogs</button>
                <img src="/checklist.png" alt="" />
            </div>
        </>
    );
}

export default Sustainability_Blogs;
