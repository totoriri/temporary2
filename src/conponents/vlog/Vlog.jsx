import React from "react"
import VlogItem from "./VlogItem"
import  "./Vlog.scss"

const Vlog = () => {
    return (
        <div className="vlog_container">
            <h1>*BLOG*</h1>
            <div className="vlog_item">
                <VlogItem />
                <VlogItem />
                <VlogItem />
            </div>
        </div>
    )
}

export default Vlog;