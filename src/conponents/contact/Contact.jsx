import React from "react"
import SocialIcons from "./SocialIcons"
import "./SocialIcon.scss"

const Contact = () => {
    return (
        <div className="contact_container">
            <h1>*CONTACT ME*</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo omnis eos totam vel possimus natus quis ea pariatur facilis. Ratione neque, deserunt iusto suscipit tempora voluptas officia aut natus.</p>
            <div className="social_icons">
                <SocialIcons />
                <SocialIcons />
                <SocialIcons />
            </div>
        </div>
    )
}

export default Contact;