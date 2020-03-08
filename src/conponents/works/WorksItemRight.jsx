import React from "react"

const WorksItemRight = ({url,img,title,description,language}) => {
    return (
        <div className="works_item">
            <a href={url}><img src={img} alt="works_img" /></a>
            <div className="works-descrition">
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Website</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}
export default WorksItemRight;
