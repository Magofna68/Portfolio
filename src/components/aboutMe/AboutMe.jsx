import React from 'react';
import "./aboutMe.scss"
import Resume from "../../assets/Resume.png";
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutMe() {
  return (
    <div 
      className="aboutMe"
      id="aboutMe"
    //   style={{
    //   backgroundSize: `cover`,
    //   repeat: `no-repeat`,
    //   backgroundImage: `url("https://i2.wp.com/files.123freevectors.com/wp-content/original/142906-cool-grey-wave-business-background-vector-art.jpg?w=800&q=95")`
    // }}
    >
      <div fluid className="aboutMeContainer">
        <div className="aboutMeTitle">
          <span style={{ color: `grey`}}>About &nbsp;</span>
            Brandon
          <span style={{ color: `grey`, }}>.</span>
        </div>

          <div className='aboutMeTextContainer'>
            <p className='grayBackground para-1'>
              <span className='largeLettering'>A</span>fter working in sales since the completion of college, in 2021, Brandon made the
              jump from sales to pursue a career in coding. Brandon enrolled at Epicodus, and received hands-on
              experience & exposure with: Javascript, C#, and React. 
            </p>

            <p className='aboutMeBorder para-2'>
              <span className='largeLettering'>A</span>fter Epicodus & his internship at VALIDATE, 
              Brandon's focus shifted to side projects, mastering new tools, and learning new tech stacks. 
              Brandon is confident in leveraging his knowledge of React, while
              maintaining best practices & fulfilling communicated objectives along the way.
            </p>

            <p className='aboutMeBorder borderDesktop para-3'>
              <span className='largeLettering'>W</span>ith exposure and repetition of best practices at Epicodus, Brandon has been building up his technical and 
              nontechnical skills to place him in a position to revel in complex
              challenges.<br/>The strong push for effective, collaborative-work, 
              has honed his interpersonal skills and have granted him insight to
              alternative perspectives and methodologies while overcoming challenges.
            </p>

            <p className='grayBackground para-4'>
              <span className='largeLettering'>I</span>n 2022, Brandon began at Opine, an online learning platform 
              curated for students in the WA School District. <br/>Since joining Opine, Brandon has added value by:<br/><br/> 
              - Devlopment of a Node backend server<br/>- Creation of Firebase security rules for app<br/>
              - Stripe integration for payment processing
            </p>
          </div>

          <div className="aboutMeClickables">
            <div className="resumeContainer">
              <span className="aboutMeTextContainer">
                <h3>Checkout</h3>
                <h6>my</h6>
                <h2>Resume</h2>
              </span>
              <a 
                target="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"
                href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"
              >
                <img 
                  src={Resume} 
                  alt="resume_link" 
                  width="175px"
                  id="resume"
                />
              </a>
            </div>
          </div>
          
      </div>
    </div>
  )
}