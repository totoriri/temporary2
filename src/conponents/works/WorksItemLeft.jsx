import React from "react"

const WorksItemLeft = ({url,img,title,description,languages}) => {
    return (
        <div className="works_item">
            <div className="works-descrition">
                <h1>{title}</h1>
                <ul>
                    {languages.map((language,index) => <li key={index}>{language}</li>)}
                </ul>
                <p>{description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit, dolor ullam at vel laboriosam ea officiis quod assumenda, excepturi dolorum iure neque? Amet, molestias beatae optio mollitia consequatur ad.</p>
                <button>Website</button>
                <button>GitHub</button>
            </div>
            <a href={url}><img src={img} alt="works_img" /></a>
        </div>
    )
}
export default WorksItemLeft;

