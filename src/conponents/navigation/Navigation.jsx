import React, { useState } from "react"
// import useWindowScrollPosition from "@rehooks/window-scroll-position";

import "./Navigation.scss"

const Navigation = () => {
    return (
        <div className="navigation_container">
            <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">works</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            {/* <div className="nav_underbar"></div> */}
        </div>
    )
}

export default Navigation;