import { style } from "framer-motion/client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
function Login(prop) {
    let { value, setRight, setLogin } = prop;

    function close() {
        setRight("-37%");
        setLogin(false);
    }

    return (
        <>
            <div
                className="login_slide"
                style={{ right: value, transition: "right .5s linear" }}
            >
                <b onClick={close}>
                    <RxCross1 />
                </b>
                <div className="login_head">
                    <span>
                        <h1>Login</h1>
                        <p>
                            or <a href="#">create an account</a>
                        </p>
                        <hr />
                    </span>
                    <img src="login_img.avif" alt="" />
                </div>
                <div className="login_input">
                    <p>Phone number</p>
                    <input type="tel" />
                </div>
                <div className="login_btn">
                    <button>LOGIN</button>
                    <p>
                        By clicking on Login, I accept the{" "}
                        <a href="#">Terms & Conditions & Privacy Policy</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
