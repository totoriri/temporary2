import React from "react"

const WorksItemRight = ({url,git,img,title,description,languages}) => {
    return (
        <div className="works_item">
            <a href={url}><img src={img} alt="works_img" /></a>
            <div className="works-descrition">
                <h1>{title}</h1>
                <ul className="work-language">
                    {languages.map((language) => <li>{language}</li>)}
                </ul>
                <p>{description} </p>
                <ul className="work_button">
                    <li className="work_button"><a href={url}>Website</a></li>
                    <li className="work_button"><a href={git}>GitHub</a></li>
                </ul>
            </div>
        </div>
    )
}
export default WorksItemRight;

