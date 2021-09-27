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
        <h1>About Brandon:<br/></h1><br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, necessitatibus, alias maiores eligendi doloremque illum asperiores quia modi impedit blanditiis quasi itaque nulla quo? Ducimus culpa veritatis quas fugiat laborum.</p>
        
      </div>
      <div className="right">
        <a src="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"></a>
        </div>
      </div>
    </div>
  )
}
