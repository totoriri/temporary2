import React from "react"
import Home from "./home/Home"
import About from "./about/About"
import Works from "./works/Works"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"
import "../css/index.scss"
import  VisibilitySensor from 'react-visibility-sensor';


const IndexPage = ({ checkCurrentSection }) => {

    const onChange = (isVisible, id) => {
        isVisible && checkCurrentSection(id);
    }
    
    return (
        <React.Fragment>
            <Home />
            <VisibilitySensor onChange={(e) => onChange(e,"101")} partialVisibility >
            <About />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"102")} partialVisibility >
            <Works />
            </VisibilitySensor>
            <VisibilitySensor onChange={(e) => onChange(e,"103")} partialVisibility >
            <Contact />
            </VisibilitySensor>
            <Footer />
        </React.Fragment>
    )
}

export default IndexPage;