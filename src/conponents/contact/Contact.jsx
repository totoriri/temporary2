import React from "react"
import "./Contact.scss"

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {
    return (
        <div id="contact_container">
            <h1 className="section_title">*CONTACT ME*</h1>
            <p>Thank you for visiting my website!!Feel free to contact me via email or linked in.</p>
            <a className="email-button"href="mailto:tktk11217@gmail.com" class="email-button">Send a message!</a>
            <div className="social_icons">
                <a href="https://github.com/totoriri"><GitHubIcon className="icon github_icon"/></a>
                <a href="https://www.linkedin.com/in/lisa-takata-557b52185/"><LinkedInIcon className="icon linkedin_icon"/></a>
                <a href="https://www.instagram.com/risa_travel.jp/"><InstagramIcon className="icon instagram_icon"/></a>
            </div>
        </div>
    )
}

export default Contact;