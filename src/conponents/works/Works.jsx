import React from "react" 
import WorksItem from "./WorksItem.jsx"
import "./Works.scss"
import React_img from "../../img/react_white.jpg"

const Works = () => {
    return (
        <div className="Works_container">
            <h1>*WORKS*</h1>
            <div className="worksItem_area">
            <WorksItem img={React_img}/>
            <WorksItem img={React_img}/>
            <WorksItem img={React_img}/>
            </div>
        </div>
    )
}

export default Works;