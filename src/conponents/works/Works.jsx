import React from "react" 
import WorksItemRight from "./WorksItemRight.jsx"
import WorksItemLeft from "./WorksItemLeft.jsx"
import CountDown from "./CountDown.jsx"
import "./Works.scss"
import Whack_a_mole from "../../img/whack_a_mole.png"
import Brickhouse from "../../img/Brickhouse.png"
import React_img from "../../img/react_white.jpg"


const langObj = {
    whack_a_mole: ["react", "redux","javascript","hooks"],
    Brickhouse:["scss","react","javascript","typescript"]
}

// const languages1 = [ "react", "javascript"]

const Works = () => {
    return (
        <div id="works_container">
            <h1 className="section_title">*WORKS*</h1>
            <WorksItemRight url="https://totoriri.github.io/whack-a-mole/" img={Whack_a_mole} title="whack a mole" description="A game of hitting moles which come out from holes at random." languages={langObj.whack_a_mole}/>
            <WorksItemLeft url="https://vigorous-visvesvaraya-70500e.netlify.com/" img={Brickhouse} title="Team project" description="A school project to create a client website ." languages={langObj.Brickhouse}/>
            <WorksItemRight url="https://vigorous-visvesvaraya-70500e.netlify.com/" img={Brickhouse} title="Team project" description="A school project to create a client website ." languages={langObj.whack_a_mole} />
            <WorksItemLeft url="https://vigorous-visvesvaraya-70500e.netlify.com/" img={Brickhouse} title="Team project" description="A school project to create a client website ." languages={langObj.Brickhouse} />
            
            {/* <div className="works_item">
                <div className="works-descrition">
                <h1>Coming soon!</h1>
                <p>React Application</p>
                <CountDown targetDate="Jan 01, 2020" targetTime="18:00:00" />
                </div>
               <img src={React_img} alt="works_img" />
            </div> */}
        </div>
    )
}

export default Works;

