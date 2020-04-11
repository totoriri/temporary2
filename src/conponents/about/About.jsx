import React from "react"
import "../about/About.scss"
import risa_photo2 from "../../img/risa_photo.jpg"
import Skill_icon from "./Skill_icon.jsx"
import REACT from "../../img/skill_icons/react.png"
import JAVASCRIPT from "../../img/skill_icons/javascript.png"
import HTML from "../../img/skill_icons/html5.png"
import CSS from "../../img/skill_icons/css3.png"
import SASS from "../../img/skill_icons/sass.png"
import BOOTSTRAP from "../../img/skill_icons/bootstrap.png"
import JAVA from "../../img/skill_icons/java.png"
import GIT from "../../img/skill_icons/git.png"
import TYPESCRIPT from "../../img/skill_icons/typescript.png"
import NODEJS from "../../img/skill_icons/nodejs.png"

const About = () => {
    return (
            <div id="about_container">
            <h1 className="section_title">*ABOUT ME*</h1>
                <div className="top_part">
                <img src={risa_photo2} alt="my_picture" />
                    <div className="top_left_part">
                        <div className="my_story">
                            <h1><span>#who...?</span></h1>
                            <p>My name is Lisa Takata. I'm a Japanese Front End Developer based in Vancouver,Canada.
                            I’m passionate about creating looking beautiful and user-friendly apps backed by concise code.
                            I love working with React , Javascript,HTML5, CSS3/Sass, Responsive Design and animation!!!
                            I never stop learning and keep improving with newly-learned skills!
                            </p>
                        </div>
                            {/* <div className="my_education">
                                <h1><span>#Education</span></h1>
                                <p><span>Web & Mobile App Development Co-Op Diploma</span> <br/>Cornerstone International Community College of Canada(CICCC) May. 2019 ~ Apr. 2020</p>
                                <p><span>Web & Mobile App Development Co-Op Diploma</span> <br/>Cornerstone International Community College of Canada(CICCC) May. 2019 ~ Apr. 2020</p>
                            </div> */}
                    </div>
                </div>
                <div className="my_skills">
                <h1><span>#My skills</span></h1>
                    <div className="skill_icon_area">
                    <Skill_icon img={REACT} text="React"/>
                    <Skill_icon img={JAVASCRIPT} text="JavaScript"/>
                    <Skill_icon img={HTML} text="HTML"/>
                    <Skill_icon img={CSS} text="CSS"/>
                    <Skill_icon img={SASS} text="SASS"/>
                    <Skill_icon img={BOOTSTRAP} text="Bootstrap"/>
                    <Skill_icon img={JAVA} text="Java"/>
                    <Skill_icon img={GIT} text="GIT"/>
                    <Skill_icon img={TYPESCRIPT} text="Typescript"/>
                    <Skill_icon img={NODEJS} text="Node.js"/>
                    </div>
                </div>
            </div>
    )
}

export default About;