import React from "react"

const WorksItemLeft = ({url,img,title,description,languages}) => {
    return (
        <div className="works_item reverse_work_item">
            <div className="works-descrition">
                <h1>{title}</h1>
                <ul>
                    {languages.map((language,index) => <li key={index}>{language}</li>)}
                </ul>
                <p>{description}</p>
                <button>Website</button>
                <button>GitHub</button>
            </div>
            <a href={url}><img src={img} alt="works_img" /></a>
        </div>
    )
}
export default WorksItemLeft;

