import React from "react" 
import WorksItem from "./WorksItem.jsx"
import CountDown from "./CountDown.jsx"
import "./Works.scss"
import Whack_a_mole from "../../img/whack_a_mole.png"
import Brickhouse from "../../img/Brickhouse.png"
import React_img from "../../img/react_white.jpg"


const Works = () => {
    return (
        <div className="Works_container">
            <h1>*WORKS*</h1>
            <div className="worksItem_area">
            <WorksItem url="https://totoriri.github.io/whack-a-mole/" img={Whack_a_mole} title="whack a mole" description="A game of hitting moles which come out from holes at random." language="HTML/CSS/JavaScript"/>
            <WorksItem url="https://vigorous-visvesvaraya-70500e.netlify.com/" img={Brickhouse} title="Team project" description="A school project to create a client website ." language="React/Sass"/>
            <div className="works_item">
                <img src={React_img} alt="works_img" />
                <h1>Coming soon!</h1>
                <p>React Application</p>
                <CountDown targetDate="Jan 01, 2020" targetTime="18:00:00" />
            </div>
            </div>
        </div>
    )
}

export default Works;

