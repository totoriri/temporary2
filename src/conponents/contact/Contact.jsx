import React from "react"
import SocialIcons from "./SocialIcons"
import "./Contact.scss"
import Social_icon1 from "../../img/github_orange.png"
import Social_icon2 from "../../img/linkedin_orange.png"
import Social_icon3 from "../../img/instagram_orange.png"


const Contact = () => {
    return (
        <div className="contact_container">
            <h1>*CONTACT ME*</h1>
            <p>Feel free to contact me if you are interested in me!</p>
            <a className="email-button"href="mailto:tktk11217@gmail.com" class="email-button">Send!</a>
            <div className="social_icons">
                <SocialIcons icon_img={Social_icon1}/>
                <SocialIcons icon_img={Social_icon2}/>
                <SocialIcons icon_img={Social_icon3} />
            </div>
        </div>
    )
}

export default Contact;