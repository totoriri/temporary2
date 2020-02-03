import React from "react"

const Skill_icon =({img,text})=>{
    return(
        <div className="skill_icon_item">
            <img src={img} alt="skill_icon"/>
            <p>{text}</p>
        </div>
    )
}

export default Skill_icon