import React, { Component } from 'react'
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

import "./styles.css"
import resumePDF from "./jorge_antonio_landaverde_resume.pdf"

class NavBar extends Component {
    state = {};
    render() {
        return (
            <div style={{position: 'sticky', top: '0'}}>
                <div style={{ fontSize: '70px', backgroundColor: 'rgba(0, 0, 0, 0.877)', color: '#0E2DB5' }} id="brandName">
                    <Link 
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    >  Jorge Landaverde </Link>
                </div>
                <div className="header" id="brandName">
                    <Link className="navItem"
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    > Home </Link>
                    <Link className="navItem"
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    > Skills </Link>
                    <Link className="navItem"
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    > Experience </Link >
                    <Link className="navItem"
                        activeClass="active"
                        to="extracurricular"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    > Extracurricular </Link >
                    <Link className="navItem"
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-144}
                        duration={700}
                    > Contact </Link >
                    <button className="resumeButton">
                        <a href={resumePDF} target="_blank" type="application/pdf">Resume</a>
                    </button>
                </div>
            </div>
        )
    }
}

export default NavBar;
