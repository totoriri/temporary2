import React from "react" 
import WorksItemRight from "./WorksItemRight.jsx"
import WorksItemLeft from "./WorksItemLeft.jsx"
import CountDown from "./CountDown.jsx"
import "./Works.scss"
import Whack_a_mole from "../../img/whack_a_mole.png"
import Brickhouse from "../../img/Brickhouse.png"
import React_img from "../../img/reactImg.png"
import mindPerch from "../../img/mindPerch.png"

const langObj = {
    whack_a_mole: ["HTML", "CSS", "Javascript"],
    mindPerch:["React","Javascript"],
    Brickhouse: ["React", "Javascript", "SASS"],
    comingSoon:["React","Redux","Typescript","SASS","firebase"]
}

const Works = () => {
    return (
        <div id="works_container">
            <h1 className="section_title">*WORKS*</h1>
            <WorksItemRight url="https://totoriri.github.io/whack-a-mole/" git="https://github.com/totoriri/whack-a-mole" img={Whack_a_mole} title="whack a mole" description="A game of hitting moles which come out from holes at random." languages={langObj.whack_a_mole}/>
            <WorksItemLeft url="https://brave-mayer-82fc7b.netlify.com/" git="https://github.com/totoriri/book-context-final-version" img={mindPerch} title="mindPerch" description="A app of searching picture books that match the user's mood. The best thing about this app is the theme color changes depending on the mood the user chooses." languages={langObj.mindPerch}/>
            <WorksItemRight url="https://vigorous-visvesvaraya-70500e.netlify.com/" git="https://github.com/ShotaTogawa/Brickhouse-shcool-project" img={Brickhouse} title="Team project" description="A website of a venture company that invest in early stage sports and entertaiment technology companies. My role was coding this in React and Sass and giving a presentation to the client. " languages={langObj.Brickhouse} />
            <div className="works_item reverse_work_item">
                <div className="works-descrition">
                    <h1>Coming soon!</h1>
                    <ul className="work-language">
                        {langObj.comingSoon.map((language,index) => <li key={index}>{language}</li>)}
                    </ul>
                    <CountDown targetDate="May 05, 2020" targetTime="18:00:00" />
                </div>
                <a><img className="react_img" src={React_img} alt="works_img" /></a>
            </div>
        </div>
    )
}

export default Works;
