import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "./assets/Logo.png";
import avatar from "./assets/avatar.png";

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return(

        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className='nav__logo'
                src={logo}
                alt="Movie Logo"
            />

            <img 
                className='nav__avatar'
                src={avatar}
                alt="Avatar"
            />
        </div>
    )
}

export default Navbar;