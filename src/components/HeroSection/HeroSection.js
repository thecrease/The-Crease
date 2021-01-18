import React from 'react'
import "./herosection.css"

function HeroSection(props) {
    return (
        <div className={`hero_section ${props.pageClass}`}>
            <h1 className="text-white">{props.pageTitle}</h1>
        </div>
    )
}

export default HeroSection
