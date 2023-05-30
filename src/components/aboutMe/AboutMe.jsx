import React from 'react';
import "./aboutMe.scss"
import Resume from "../../assets/Resume.png";
import { Container, Row, Col } from 'react-bootstrap';
import aboutMeVideo from '../../assets/aboutMeVideo.mp4'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import OpineIcon from '../../assets/OpineIcon.svg';
import VALIDATEIcon from '../../assets/VALIDATEIcon.png';
// import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline';
import "react-perfect-scrollbar/dist/css/styles.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from '@mui/icons-material/Work';
import Timeline from '../utility/timeline/Timeline';

// import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'

export default function AboutMe() {
  const isMobile = 420;

  const p1 = 'Im an ex-salesman who loves building things with Javascript, particularly, utilizing React as a framework.';
  const p2 = 'My fascination with coding began in 2021 when I was introduced to Javascript and React. Following my successful completion of Epicodus, a rigorous 27-week bootcamp centered around Javascript, C#, and CSS, I eagerly embraced an internship opportunity with VALIDATE.';
  const p3 = 'This marked the initial phase of a remarkable journey that would ultimately prove to be the most rewarding career decision I have ever made—an audacious leap of faith into a new professional path.';
  const p4 = 'I\'m currently working at Opine as a React Web Developer and have been honing my skills with Opine since 2022. One of my biggest weaknesses i\'ve been improving, is having the confidence to be vulnerable, ask questions, and lean on my team for support.';

  return (
    <>
      {
        window.innerWidth < isMobile ?
        <div className="mobileAboutMeContainer">
          <div className="mobileAboutMeTitleContain">
            My&nbsp;<span className='grayTextAboutMe'>Time</span>line<span className='grayTextAboutMe'>.</span>
          </div>
          <div className='mobileTimelineContainer'>
          <Timeline />
          </div>
        </div>
        :
    <div className="aboutMeContainer" id="aboutMe">
      <>
      <div className="aboutMeTitleContain">
        <span className='grayTextAboutMe'>About</span><span>Brandon</span><span className='grayTextAboutMe'>.</span>
      </div>
      <div style={{ marginRight: '2.5%', justifyContent: 'flex-start', width: '45%', flexDirection: 'column', display: 'flex'}}>
      {/* <> */}
      <div className="aboutMeBio">
        <div className='aboutMeTextContainer'>
          {/* <p>{p1}</p> */}
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          {/* <p>I first became enthralled with coding in 2021, where I was first exposed to Javascript & React. After the completion of Epicodus, a 27 week bootcamp focused on Javascript, C# & CSS, I dove head first into my internship with VALIDATE, embarking on the first chapter of what would later be the best decision of my career, taking a leap of faith and opting for a change of career.</p> */}
          {/* <p>My passion is traveling and working on projects. Whether it's coding out an application, or making content, media, & videography; being able to contribute as the project comes together is one of my favorite experiences.</p> */}
          {/* <p>My most recent adventure was a 2 month backpacking trip around Bali / Thailand where I had the opportunity to dive into the traditions, food, and customs of each culture.</p><p>Checkout my video for more details</p> */}
        </div>
        {/* <br/>
        <br/>
        <br/> */}
        <div className="aboutMeVideoContain">
          <video width="100%" height="100%" controls>
            <source src={aboutMeVideo} aria="Bali / Thailand 2022"></source>
          </video>
      </div>
        {/* <div className='aboutMeTextContainer'>
          <p>Hey Im Brandon, Im currently working at Opine as a React Web Developer. I've been a software developer since 2021 and love what I do.</p>
          <p>My passion is traveling and working on projects. Whether it's coding out an application, or making content, media, & videography; being able to watch as the project comes together is one of my favorite experiences.</p>
          <p>My most recent adventure was a 2 month backpacking trip around Bali / Thailand where I had the opportunity to dive into the traditions, food, and customs of each culture.</p><p>Checkout my video for more details</p>
        </div> */}
      </div>
        {/* </> */}
      </div>
      <div className='aboutMeRightContainer'>
      <div className="timeLineContainer">
        <h6>THE STORY SO FAR..</h6>
        <Timeline />
      </div>
        <div className='aboutMeTextContainer' style={{ marginTop: '5%'}}>
        <p>My passion is traveling and working on projects. Whether it's coding out an application, or making content, media, & videography; being able to contribute as the project comes together is one of my favorite experiences.</p>
          <p>My most recent adventure was a 2 month backpacking trip around Bali / Thailand where I had the opportunity to dive into the traditions, food, and customs of each culture.</p><p>Checkout my video for more details</p>
        </div>
      </div>


    {/* <video width={360} height={240} controls>
      <source src={aboutMeVideo} aria="Bali / Thailand 2022"></source>
    </video> */}
      {/* <div fluid className="aboutMeContainer">
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
        </div> */}
          
      {/* </div> */}
      </>
      </div>
    }
    </>
  )
}