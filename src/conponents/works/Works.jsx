import React from "react" 
import WorksItem from "./WorksItem.jsx"
import "./Works.scss"

const Works = () => {
    return (
        <div className="Works_container">
            <h1>*WORKS*</h1>
            <div className="worksItem_area">
            <WorksItem />
            <WorksItem />
            <WorksItem />
            </div>
        </div>
    )
}

export default Works;