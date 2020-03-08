import React from "react"
import SocialIcons from "./SocialIcons"
import "./Contact.scss"
import Social_icon1 from "../../img/github_orange.png"
import Social_icon2 from "../../img/linkedin_orange.png"
import Social_icon3 from "../../img/instagram_orange.png"


const Contact = () => {
    return (
        <div id="contact_container">
            <h1 className="section_title">*CONTACT ME*</h1>
            <p>Thank you for visiting my website!!Feel free to contact me via email or linked in.</p>
            <a className="email-button"href="mailto:tktk11217@gmail.com" class="email-button">Send a message!</a>
            <div className="social_icons">
                <SocialIcons url="https://github.com/totoriri" icon_img={Social_icon1} />
                <SocialIcons url="https://www.linkedin.com/in/risa-takata-557b52185/" icon_img={Social_icon2}/>
                <SocialIcons url="https://www.instagram.com/risa_travel.jp/" icon_img={Social_icon3} />
            </div>
        </div>
    )
}

export default Contact;