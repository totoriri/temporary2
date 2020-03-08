import React from "react"

const WorksItemLeft = ({url,img,title,description,language}) => {
    return (
        <div className="works_item">
            <div className="works-descrition">
                <h1>{title}</h1>
                <p>{description}<span>{language}</span></p>
                <button>Website</button>
                <button>GitHub</button>
            </div>
            <a href={url}><img src={img} alt="works_img" /></a>
        </div>
    )
}
export default WorksItemLeft;

