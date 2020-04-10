import React from "react"
import "./Home.scss"
import Wave_home from "../../img/wave_home.png"
import navItems from "../navigation/NavItems.jsx"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const Home = () => {
    return (
            <div id="home_container">
            <div className="banner">
                <div className="left">
                    <div className="title">
                        <h1>Hi, there!!</h1>
                        <p>I'm front end developer<br/>based in vancouver</p>
                    </div>
                    <div className="social_icon_container">
                        <div className="social_icons">
                            <a href="https://github.com/totoriri"><GitHubIcon className="icon github_icon"/></a>
                            <a href="https://www.linkedin.com/in/lisa-takata-557b52185/"><LinkedInIcon className="icon linkedin_icon"/></a>
                            <a href="https://www.instagram.com/risa_travel.jp/"><InstagramIcon className="icon instagram_icon"/></a>
                        </div>
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