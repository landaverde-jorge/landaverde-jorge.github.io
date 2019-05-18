import React from 'react'

import Typer from "../typer"
// import semiFormal from "../images/semi-formal2.jpg"
// import semiFormal from "../images/profpic.jpg"
import semiFormal from "./profpicsquare.jpg"
import './styles.css'



const Home = () => (
    <div>
        <span id="home">
            <Typer
                heading={'I am'}
                dataText={[
                    'Proactive.',
                    'Purposeful.',
                    'a Quick learner.',
                    'Patient.',
                    'Sociable.',
                    'Respectful.',
                    'Open-minded.',
                ]}
            />
        </span>
        <div className="homeDiv">
            <div>
                <img src={semiFormal} style={{ borderRadius: `120px 20px 120px 20px`, maxWidth: `450px`, maxHeight: `auto` }}></img>
            </div>
            <div style={{ maxWidth: `50%` }}>
                <p style={{textAlign: "left"}} id="brandName">
                    Hello! I'm Jorge Landaverde, I enjoy networking, helping people understand new technical concepts and host great sessions of technical problem solving.
                    <br/><br/>
                    I am currently a student at San Francisco State University(SFSU), working towards a Bachelor's of Science in Computer Science. I am working with the SFSU 
                    SHPE(Society of Hispanic Professional Engineers) chapter on helping students polish their technical and presentational skills through weekly meetings. 
                    I am leading these meetings because I have noticed that many students lack the professionalism that is needed to present themselves and showcase their skills. 
                    Prior to starting these sessions, I used my free time to tutor core computer science concepts to students in a variety of classes such as: Data Structures and Machine structure to name a couple.                    
                    <br/><br/>  
                    I am originally from El Salvador, so I try to take advantage of as many resources that were not available to me while I was in El Salvador. If I am not working on class projects, 
                    personal projects or helping classmates; I attend events that are hosted by different tech companies in order expand my knowledge of different areas in computer science. 
                    I now and then manage to make some time to go out and explore new places and have some fun while learning as much as I can.  
                </p>
            </div>
        </div>
    </div>
)

export default Home;