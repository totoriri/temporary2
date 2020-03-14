import React from "react"
import "../footer/Footer.scss"
import Wave_bottom from "../../img/wave_footer.png"

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="licence">
                <h5>&copy;risa.takata</h5>
        　　　　　<p>Icons from <a target = "_blank" href = "https://icons8.com">Icons8</a ></p>
             </div>
            <img src={Wave_bottom} />
        </div>
    )
}

export default Footer;
