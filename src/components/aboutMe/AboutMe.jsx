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
    <div 
    className="container">
      <div className="left">
        <h1>
          <span 
          style={{
          color: `grey`
        }}
        >About
        </span> Brandon
        <span 
        style={{
          color: `grey`
        }}>.</span><br/></h1><br/><br/><br/><br/>
        <p>Upon graduation in 2019, Brandon dove head first into software sales. After working collaboratively in a sales team with individual goals/quota retirements, he quickly realized how fleeting success was within this industry.</p>
        <br/> 
        <p>After much thought, Brandon came to realize his passion didnt lie in sales, but rather in the excitement of overcoming a challenge. He left my sales role behind and to pursue a career in coding; to be an aspiring software engineer. Applying the knowledge base cultivated from college and from his experiences in sales, Brandon goal is to further develop a growth mindset; leaning into unknown endeavors, and reshaping the world one line of code at a time.</p>
        
      </div>
      <div className="right">
        <div className="clickables">
        <div className="resumeContainer">
          <a 
          href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing">
            <img 
              src="https://www.clipartmax.com/png/middle/308-3085735_cv-contract-agreement-resume-paper-document-comments-resume-icon-transparent.png">
            </img>
          </a>
          <a 
          href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing">
            <img 
              src="https://www.clipartmax.com/png/middle/308-3085735_cv-contract-agreement-resume-paper-document-comments-resume-icon-transparent.png">
            </img>
          </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
