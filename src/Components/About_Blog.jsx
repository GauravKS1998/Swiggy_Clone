import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Blogs from "./Blogs.json";

function About_Blog() {
    return (
        <>
            <div className="about_blog">
                <div className="about_blog_head">
                    <h1>
                        <span></span>SWIGGY BLOG<span></span>
                    </h1>
                    <div className="blog_slide_btns">
                        <button>
                            <FaArrowLeft />
                        </button>
                        <button>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="about_all_blogs">
                    {Blogs.map((blog) => {
                        return (
                            <>
                                <div className="about_single_blog">
                                    <img src={blog.img} alt="" />
                                    <div className="about_blog_info">
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
                <button>Explore</button>
            </div>
        </>
    );
}

export default About_Blog;
