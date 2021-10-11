import React from 'react';
import aboutMe from "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div 
      className="aboutMe"
      id="aboutMe"
      style={{
      backgroundSize: `cover`,
      repeat: `no-repeat`,
      backgroundImage: `url("https://i2.wp.com/files.123freevectors.com/wp-content/original/142906-cool-grey-wave-business-background-vector-art.jpg?w=800&q=95")`
    }}>
          <h1>
            <span 
            style={{
            color: `grey`,
            padding: `15% 0 0 0`
          }}
          >About
          </span> Brandon
          <span 
          style={{
            color: `grey`,
          }}>.</span><br/></h1>
          <br/><br/><br/>
      <div className="container">
        <div className="left">
          {/* <br/><br/> */}
          <p>
            Upon graduation in 2019, Brandon dove head first into software sales. After working collaboratively in a sales team with individual goals/quota retirements, he quickly realized how fleeting success was within the sales industry.
          {/* </p> */}
          <br/>
          <br/>
          {/* <p> */}
            After much thought, Brandon came to realize his passion didnt lie in sales, but rather in the excitement of overcoming a challenge. He left my sales role behind and to pursue a career in coding; to be an aspiring software engineer. Applying the knowledge base cultivated from college and from his experiences in sales, Brandon goal is to further develop a growth mindset; leaning into unknown endeavors, and reshaping the world one line of code at a time.
          {/* </p> */}
          <br/>
          <br/>
          {/* <p> */}
            With exposure and repetition to best practices for over the better part of a year, Brandon has been building up his technical and nontechnical skills to place him in a position to overcome complex challenges. 
            <br/>The strong push for effective, collaborative-work, has honed his interpersonal skills and have granted him insight to alternative perspectives and methodologies while overcoming challenges.
          {/* </p> */}
          <br/>
          <br/>
          {/* <p> */}
            Epicodus has provided a framework for over 250 hours of experience, and nearly 20 projects in each of the following languages: C#/.Net, React, & Javascript. He is currently working as an individual contributor for VALIDATE, LLC, working on a React web application that is nearly ready for its beta launch.
          {/* </p> */}
          <br/>
          <br/>
            </p>
        <p style={{
            fontWeight: `500`
          }}>
            While I don't boast to have the most experience writing code, as a representation of myself, have confidence in leveraging my abilities as a self-starter to learn and fulfill all communicated objectives, while maintaining best practices along the way.
             {/* (GIT, pair-programming, CRUD, REST) */}
          </p>
      </div>
      <div className="right">
        <div className="clickables">
        <div className="resumeContainer">
          <a 
            target="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"
            href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing">
            <img 
              src="https://thumbs.dreamstime.com/b/hand-holding-resume-cartoon-vector-illustration-employment-paper-document-titled-isolated-grey-background-human-resource-87505699.jpg">
            </img>
            <br/>
            <br/>
            <br/>
            <h3>Checkout my <br/>resume</h3>
          </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}