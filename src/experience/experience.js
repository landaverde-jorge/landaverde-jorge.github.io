import React from 'react'

import { Tab } from 'semantic-ui-react'


// const panes = [
//   { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
//   { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
//   { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
// ]

// const Experience = () => <div><Tab panes={panes} /></div>

const Experience = () => (
  <div className="brandName" style={{ width: '100%'}} id="experience" >
    <h1>Where I've Worked</h1>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ maxWidth: '52%' }}>
          <h3>Incoming Software Engineer Intern, Uber Inc., San Francisco, CA</h3>
      </div>
      <div>
        <h3>Start Date: June 3rd</h3>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ maxWidth: '60%' }}>
        <ul style={{ textAlign: 'left' }}>
          <h3>Front-End Developer Intern, Collide LLC, Culver City, CA</h3>
          <li>Implemented Lazy loading feature using Javascript that improved web-app load performance </li>
          <li>Help identified ways to improve and diagnose front-end bugs</li>
          <li>Helped construct, modify and configure templates, created in LESS and HTML</li>
          <h4>Technologies: Javascript, HTML/LESS, JQuery, Git/GitHub</h4>
        </ul>
      </div>
      <div>
        <h3>June 2018 – October 2018</h3>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={{ maxWidth: '60%' }}>
        <ul style={{ textAlign: 'left' }}>
          <h3>TXT Developer Co-Op, Teens eXploring Technology, Los Angeles, CA</h3>
          <li>Developed book check-out app using React Native </li>
          <li>Implemented a rest API using NodeJS and ExpressJS for book check-out app</li>
          <li>Utilized Slack’s Auth-2.0 API to authenticate a user based on their Slack profile</li>
          <h4>Technologies: React-native, Javascript, Auth2.0 Slack API, GitHub, MongoDB, ExpressJS</h4>
        </ul>
      </div>
      <div>
        <h3>August 2017 – January 2018</h3>
      </div>
    </div>
  </div>
)

export default Experience;


