import React from "react"

const SocialIcons = ({icon_img}) => {
    return (
        <div className="social_icon_item">
            <img src={icon_img} alt="social_icons" />
        </div>
    )
}

export default SocialIcons;