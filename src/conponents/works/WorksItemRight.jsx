import React from "react"

const WorksItemRight = ({url,img,title,description,languages}) => {
    return (
        <div className="works_item">
            <a href={url}><img src={img} alt="works_img" /></a>
            <div className="works-descrition">
                <h1>{title}</h1>
                <ul>
                    {languages.map((language) => <li>{language}</li>)}
                </ul>
                <p>{description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id, amet optio dicta maxime, cumque aperiam nam esse quas illo eligendi praesentium repellat voluptate laudantium voluptatem asperiores a impedit reiciendis?</p>
                <button>Website</button>
                <button>GitHub</button>
            </div>
        </div>
    )
}
export default WorksItemRight;
