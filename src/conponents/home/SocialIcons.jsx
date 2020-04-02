import React from "react"

const SocialIcons = ({url,icon_img}) => {
    return (
        <div className="social_icon_item">
            <a href={url}><img src={icon_img} alt="social_icons" /></a>
        </div>
    )
}

export default SocialIcons;