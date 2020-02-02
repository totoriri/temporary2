import React from "react"

const WorksItem = ({url,img,title,description,language}) => {
    return (
        <div className="works_item">
            <div className="works-descrition">
            <a href={url}><img src={img} alt="works_img" /></a>
            </div>
            <h1>{title}</h1>
                <p>{description}<span>{language}</span></p>
        </div>
    )
}
export default WorksItem;

