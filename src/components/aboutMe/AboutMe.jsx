import React from 'react';
import aboutMe from "./aboutMe.scss";
import Resume from "../../assets/Resume.png";
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container fluid>
        <Row>
          <Col>
            <h1>
              <span style={{ color: `grey`, padding: `15% 0 0 0` }}><br/>
                About </span>Brandon
              <span style={{ color: `grey`, }}>.</span><br/>
            </h1>
            <br/>
            <p>
              After graduating with a GSS degree from U of O in 2019,
              Brandon quickly landed a job in selling software. After
              working collaboratively in sales to achieve individual 
              and team performance metrics, along with quota retirements,
              Brandon quickly realized how fleeting success was within 
              the sales industry.
            </p>
            <p>
              After much thought, Brandon came to realize his passion didnt
              lie in sales, but rather in the excitement of overcoming a 
              challenge. He left his sales role behind to pursue a career in
              coding; to be an aspiring software developer and designer. 
              Applying the knowledge base cultivated from U of O and leaning 
              into his experiences in sales, Brandon's goal is to further 
              develop a growth mindset; leaning into unknown endeavors, and 
              reshaping the world one line of code at a time.
            </p>
            <p>
              With exposure and repetition to best practices for over the better
              part of a year, Brandon has been building up his technical and 
              nontechnical skills to place him in a position to overcome complex
              challenges.<br/>The strong push for effective, collaborative-work, 
              has honed his interpersonal skills and have granted him insight to
              alternative perspectives and methodologies while overcoming challenges.
            </p>
            <p>
              <strong>While he doesn't boast to have the most experience writing
              code, Brandon is confident in leveraging his abilities as a 
              self-starter to learn and fulfill all communicated objectives, 
              while maintaining best practices along the way. Brandon is focused
              on strengthening his coding abilities by working on side projects 
              and is currently listed as an individual contributor for VALIDATE, 
              a marketing and data analysis React web application that was nearly 
              ready for Beta launch.</strong>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
          <a 
            target="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"
            href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing">
            <img src={Resume} alt="resume_link">
            </img>
            {/* <br/>
            <br/>
            <br/> */}
            <h3>Checkout my <br/>resume</h3>
          </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

{/* <h1>
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
<p id="mobileP1">
  After graduating with a GSS degree from U of O in 2019, Brandon quickly landed a job in selling software. After working collaboratively in sales to achieve individual and team performance metrics, along with quota retirements, Brandon quickly realized how fleeting success was within the sales industry.
</p>
<br/>
<p id="mobileP2">
  After much thought, Brandon came to realize his passion didnt lie in sales, but rather in the excitement of overcoming a challenge. He left his sales role behind to pursue a career in coding; to be an aspiring software developer and designer. Applying the knowledge base cultivated from U of O and leaning into his experiences in sales, Brandon's goal is to further develop a growth mindset; leaning into unknown endeavors, and reshaping the world one line of code at a time.
<br/>
<br/>
  With exposure and repetition to best practices for over the better part of a year, Brandon has been building up his technical and nontechnical skills to place him in a position to overcome complex challenges. 
  <br/>The strong push for effective, collaborative-work, has honed his interpersonal skills and have granted him insight to alternative perspectives and methodologies while overcoming challenges.
</p>
<br/>

<br/>
<p>
<strong>While he doesn't boast to have the most experience writing code, Brandon is confident in leveraging his abilities as a self-starter to learn and fulfill all communicated objectives, while maintaining best practices along the way. Brandon is focused on strengthening his coding abilities by working on side projects and is currently listed as an individual contributor for VALIDATE, a marketing and data analysis React web application that is nearly ready for its Beta launch.</strong>
</p>
<br/>
<br/>
</div>
<div className="right">
<div className="clickables">
<div className="resumeContainer">
<a 
  target="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing"
  href="https://docs.google.com/document/d/1oaRwK2RvkR2c0hmXVDrE1k8jNoHA_CdWvMhrpSNsVuM/edit?usp=sharing">
  <img src={Resume} alt="resume_link">
  </img>
  <br/>
  <br/>
  <br/>
  <h3>Checkout my <br/>resume</h3>
</a>
</div>
</div>
</div>
</div> */}