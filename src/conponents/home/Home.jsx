import React from "react"
import "./Home.scss"
import Wave_home from "../../img/wave_home.png"
import navItems from "../navigation/NavItems.jsx"
import Social_icon2 from "../../img/linkedin-60.png"
import SocialIcons from "./SocialIcons"

const Home = () => {
    return (
            <div className="home_container">
                <div className="banner">
                <div className="title">
                    <h1>Hi, there!!</h1>
                    <p>I'm front end developer<br/>based in vancouver</p>
                </div>
                <div className="social_icon_container">
                    <div className="social_icons">
                        <SocialIcons url="https://github.com/totoriri" icon_img={Social_icon2} />
                        <SocialIcons url="https://www.linkedin.com/in/risa-takata-557b52185/" icon_img={Social_icon2}/>
                        <SocialIcons url="https://www.instagram.com/risa_travel.jp/" icon_img={Social_icon2} /> 
                    </div>
                </div>
                <div className="arrow">
                    <a href={navItems[0].url}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                </div>
                <img className="wave_img" src={Wave_home} alt="home_wave" />
            </div>
    )
}

export default Home;