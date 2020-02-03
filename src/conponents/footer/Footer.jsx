import React from "react"
import "../footer/Footer.scss"
import Wave_bottom from "../../img/wave_footer.png"

const Footer = () => {
    return (
        <div className="footer_container">
            <p>&copy;risa.takata</p>
            <img src={Wave_bottom} />
        </div>
    )
}

export default Footer;