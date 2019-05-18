import React from 'react'

import './styles.css'
import fbYoPuedoProg from "./fbYoPuedoProg.jpg"
import NasaCollage from "./NasaCollage.jpg"
import QualcommHackJuntos from "./QualcommHackJuntos.jpg"


const Extrac = () => (
  <div style={{ paddingBottom: '200px' }} id="extracurricular">
    <h1>Extracurricular</h1>
    <div >
      <div className="extraDiv" style={{ paddingTop: `25px` }}>
        <div>
          <h1>Latin@FB - May 2019</h1>
          <img src={fbYoPuedoProg} style={{ borderRadius: `120px 20px 120px 20px`, maxWidth: `500px`, maxHeight: `auto` }}></img>
        </div>
        <div style={{ maxWidth: `50%` }}>
          <p style={{ textAlign: "left" }}>
            I was invited to this Facebook event through a recruiter I had been in touch in the past. I was not sure if I wanted to attend but 
            I decided that this type of event would potentially help me identify skills that I am currently lacking. I very much enjoyed the experience
            I manage to get into an event that was specifically for people like me, Hispanic. The event had a panel of engineers explaining their journey
            and the obstacles they had to overcome. They also spoke about how went about preparing for interviews and tech challenges. 
            <br/><br/>
            I learned a lot from them since they made me notice that there things I am doing right and also made me realize that it is not impossible
            to be part of a great company like Facebook. I also learned new techniques on planning and technical skill practice. I also managed to get in touch with some
            of them after the event and connect. I plan on asking for advice and continue to grow the relationship we started at the event.
          </p>
        </div>
      </div>
      <div className="extraDiv" style={{ paddingTop: `25px` }}>
        <div style={{ maxWidth: `50%` }}>
          <p style={{ textAlign: "left" }}>
            I initially got into this program when I was at El Camino College, the community college I transferred from, through a student ambassador of this program.
            I applied during the Spring semester and thought I was not going to get in but I managed to get a spot in the program. I attended orientation and was told that if I did well in the program,
            I would be invited to the NASA Ames research center. I was graded based on seminars and quizzes followed by a final project in which I had to either:
            create a 3D blueprint of a rover that would be sent to Mars, create a plan for an expedition to Mars or explain in detail how one of the previous the missions took place.
            I have always enjoyed designing and creating things, therefore, I decided to create a 3D blueprint of a rover I would send to Mars. The project was intense and it took a lot of
            my time but I did not mind since I was learning a lot of things about 3D models and NASA in general. After many hours of sketching and drafting, I managed to finish my 3D model and
            a paper explaining everything about my rover. After submitting my paper I continued to learn about 3D models and after some time I received an e-mail congratulating my efforts and
            telling me I had been selected from a large group of students to attend the NASA Ames research center.
            <br/><br/>
            I went on this trip that would push me even further by testing my teamwork skills and technical skills while also giving me the chance to learn more about the NASA Ames research center.
            I was placed into a team of 10 and was given the role of Software Engineer of a company that was trying to obtain a contract from NASA for the next Mars expedition.
            We had to create a rover within a specific budget and that could retrieve samples of minerals from Mars. I was encharged of programming a microcontroller to give proper functionality to several stepper motors
            to move forward and backward and two bring down a claw to retrieve minerals while avoiding obstacles in a field. I also had to receive information from multiple sensors that detected proximity to objects and 
            specific colors on the field. After receiving points based on minerals identified and samples retrieved, My team managed to obtain second place in this competition. The whole experience was great, it pushed me
            to learn new skills while working in a team and following specific guidelines. 
          </p>
        </div>
        <div>
          <h1>NASA NCAS onsite visit - June 2018</h1>
          <img src={NasaCollage} style={{ borderRadius: `20px 120px 20px 120px`, maxWidth: `550px`, maxHeight: `auto` }}></img>
        </div>
      </div>
      <div className="extraDiv" style={{ paddingTop: `25px` }}>
        <div>
          <h1>Qualcomm HackJuntos - November 2017</h1>
          <img src={QualcommHackJuntos} style={{ borderRadius: `120px 20px 120px 20px`, maxWidth: `500px`, maxHeight: `auto` }}></img>
        </div>
        <div style={{ maxWidth: `50%` }}>
          <p style={{ textAlign: "left" }}>
            I had been in contact with Qualcomm from a previous hackathon. I found out through a friend  I met at that same hackathon and this time this event was being held at the Qualcomm's headquarters which is located in San Diego. 
            I am originally from Los Angeles and had no way of getting to San Diego so I spoke to a friend we decided to drive there together. At this hackathon, we could be in a team with friends or find a group of people there and make a team.
            I decided to find new people to connect with and make a team from scratch. We were initially provided with a list of possible topics in which we had to solve a problem. My team and I decided to work
            on the health topic. 
            <br/><br/>  
            I was in charge of creating a mobile application that took input from different sensors that were connected to an Arduino. The problem we decided to tackle was indoor navigation for the elderly and the blind.
            The way the idea worked was by creating multiple nodes that communicated with each other and then communicate with the cellphone to provide navigation to a specific location.
            Through the app, I managed to read input information from sensors and I decided to make it say turn left or turn right based on how far the person was from the node and also based on the location. My team and I got the best health hack
            since this gave independence back to disabled people and elderly people. By using this technology they did not have to ask for help to get around to new places.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Extrac;