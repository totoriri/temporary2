import React from "react"
import "./Home.scss"
import Wave_home from "../../img/wave_home.png"
import  navItems from "../navigation/NavItems.jsx"

const Home = () => {
    return (
            <div className="home_container">
                <div className="banner">
                <div className="title">
                    <h1>Hi, there!!</h1>
                    <p>I'm front end developer<br/>based in vancouver</p>
                </div>
                <div className="arrow">
                    <a href={navItems[0].url}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                </div>
                <img src={Wave_home} alt="home_wave" />
            </div>
    )
}

export default Home;