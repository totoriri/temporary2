import React from "react"
import Home from "./home/Home"
import About from "./about/About"
import Works from "./works/Works"
import Contact from "./contact/Contact"
// import Vlog from "./vlog/Vlog"
import Footer from "./footer/Footer"
import "../css/index.scss"


const IndexPage = () => {
    return (
        <div>
            <Home />
            <About />
            <Works />
            {/* <Vlog /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default IndexPage;