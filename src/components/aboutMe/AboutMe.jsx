import React from 'react';
import "./aboutMe.scss"
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
          {/* <Col md={2} lg={2}> */}
            <div id="title">
              <h2>
                <span style={{ color: `grey`, padding: `0% 0 0 0` }}><br/>
                  About </span>Brandon
                <span style={{ color: `grey`, }}>.</span><br/>
              </h2>
            </div>
          {/* </Col> */}
          <br/>
          <Col>
          {/* <Container id="textContainer"> */}
            <p>
              After graduating with a GSS degree from U of O in 2019,
              Brandon quickly landed a job in selling software. After
              working collaboratively in sales to achieve individual 
              and team performance metrics, along with quota retirements,
              Brandon quickly realized how fleeting success was within 
              the sales industry.
            </p>
            <p id="galaxyFold" className='grayBackground'>
              After much thought, Brandon came to realize his passion didnt
              lie in sales, but rather in the excitement of overcoming a 
              challenge. He left his sales role behind to pursue a career in
              coding. 
              Applying the knowledge base cultivated from U of O and leaning 
              into his experiences with teamwork and collaboration, Brandon's goal is to further 
              develop a growth mindset; leaning into unknown endeavors, and 
              reshaping the world one line of code at a time.
            </p>
            <p>
              With exposure and repetition of best practices at Epicodus, Brandon has been building up his technical and 
              nontechnical skills to place him in a position to revel in complex
              challenges.<br/>The strong push for effective, collaborative-work, 
              has honed his interpersonal skills and have granted him insight to
              alternative perspectives and methodologies while overcoming challenges.
            </p>
            <p className='grayBackground'>
              While he doesn't boast to have the most experience writing
              code, Brandon is confident in leveraging his abilities as a 
              self-starter; to learn and fulfill all communicated objectives 
              while maintaining best practices along the way. After his internship at VALIDATE, 
              Brandon is focusing on side projects, mastering new tools, and learning new tech stacks. 
            </p>
          </Col>
        </Row>
        <Container fluid>
          <Row>
            <div className="clickables">
              <div className="resumeContainer">
                <Col xs={5} s={6} m={6} lg={6}>
                  <div id="text">
                    <h3>Checkout</h3><h6>my</h6><h2>Resume</h2>
                  </div>
                </Col>
                <Col xs={7} s={6} m={6} lg={6}>
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
                </Col>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </div>
  )
}