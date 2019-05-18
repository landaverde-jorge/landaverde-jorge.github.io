import React from 'react'

import cppLogo from "./cpp.svg"
import pythonLogo from "./python.svg"
import javaLogo from "./java1.svg"
import jsLogo from "./js.svg"
import reactLogo from "./reactB.svg"
import githubLogo from "./github_logo.svg"
import htmlLogo from "./html5.svg"
import cssLogo from "./css.svg"

import './styles.css'



const Skills = () => (
    <div id="skills">
        <h1>Skills</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <img src={cppLogo} style={{ width: "150px" }}></img>
            </div>
            <div>
                <img src={pythonLogo} style={{ width: "150px" }}></img>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <img src={githubLogo} style={{ width: "150px", paddingLeft: `70px` }}></img>
            </div>
            <div>
                <img src={reactLogo} style={{ width: "150px", paddingRight: `70px` }}></img>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p id="brandName" style={{ maxWidth: `60%`}}>
                In the past few years, before transfering to SFSU, I managed to obtain two internship opportunities in spite of the fact that most companies do not
                look for interns at the community college level. While being at those companies I managed to work on different skills in different industries. Some of the skills
                I learned are the Business Canvas Model, Design Thinking Process, Full-stack Development and Front-end Development. I continue to look for different ways in which I can develop my
                skills within my classes and externally from school, I recently accepted an offer for an internship with Uber for the summer of 2019, which I believe, that it will be very rewarding.
                I think this opportunity will give me the chance to learn new skills while strengthening my current skills.
            </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <img src={jsLogo} style={{ width: "150px", paddingLeft: `70px` }}></img>
            </div>
            <div>
                <img src={javaLogo} style={{ width: "150px", paddingRight: `70px` }}></img>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <img src={htmlLogo} style={{ width: `150px`, height: `auto` }}></img>
            </div>
            <div>
                <img src={cssLogo} style={{ width: "150px" }}></img>
            </div>
        </div>

    </div>
)

export default Skills;