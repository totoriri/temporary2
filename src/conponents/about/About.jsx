import React from "react"
import "../about/About.scss"
import risa_photo from "../../img/risa_photo.jpg"

const About = () => {
    return (
        <div>
            <div className="about_container">
                <h1>*ABOUT ME*</h1>
                <div className="my_area">
                <img src={risa_photo} alt="my_picture" />
                <div className="my_description">
                    <h1>#who...?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias omnis iste amet quo quia sint soluta aliquam sapiente dolores consequuntur eaque beatae delectus consequatur, odio rerum temporibus. Maxime, error sunt!</p>
                    <h1>#what is...?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt exercitationem ipsa nemo excepturi sapiente ab voluptatem nam temporibus, asperiores ea in? Labore sunt optio sint non nemo quos reiciendis?</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;