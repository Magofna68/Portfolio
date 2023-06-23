// import React from 'react';
// import "./aboutMe.scss"
// import 'react-vertical-timeline-component/style.min.css';
// import Timeline from '../utility/timeline/Timeline';

// export default function AboutMe() {
//   const isMobile = 420;
//   const quoteStyle = {
//     fontSize: ''
//   }
//   const bioStyles = {
//     margin: '5% auto% 0 auto', 
//     justifyContent: 'space-between', 
//     width: '45%',
//     maxWidth: '550px',
//     flexDirection: 'column', 
//     display: 'flex',

//   }
//   // const p1 = 
//   const p2 = 'My fascination with coding began in 2021 when I was introduced to Javascript and React. This marked the initial phase of a remarkable journey that would ultimately prove to be the most rewarding career decision I have ever made—an audacious leap of faith into a new professional path.';
//   const p3 = 'Following my successful completion of Epicodus, a rigorous 27-week bootcamp centered around Javascript, C#, and CSS, I eagerly embraced an internship opportunity with VALIDATE.';
//   const p4 = 'I\'m currently working as a React Web Developer and have been honing my skills with Opine since 2022. One of my biggest weaknesses i\'ve been consciously working on improving, is having the confidence to be vulnerable, ask questions, and lean on my team to leverage their knowledge for support.';
//   const p5 = 'My passion is traveling and working on projects. Whether it\'s coding out an application, or making content, media, & videography; being able to contribute and add value as the project comes together is one of my favorite experiences.';


//   const aboutMeTextContainer = document.querySelector('.aboutMeTextContainer');
//   const paragraphs = Array.from(document.querySelectorAll('.aboutMeTextContainer p'));

//   const options = {
//     rootMargin: '0px',
//     threshold: 0.2
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         aboutMeTextContainer.classList.add('animate');
//         paragraphs.forEach(p => p.classList.add('animate'));
//         observer.unobserve(entry.target);
//       }
//     });
//   }, options);

//   observer.observe(aboutMeTextContainer);

//   return (

import React, { useEffect } from 'react';
import "./aboutMe.scss"
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../utility/timeline/Timeline';

export default function AboutMe() {
  const isMobile = 420;
  const quoteStyle = {
    fontSize: ''
  }
  const bioStyles = {
    margin: '5% auto% 0 auto', 
    justifyContent: 'space-between', 
    width: '45%',
    maxWidth: '550px',
    flexDirection: 'column', 
    display: 'flex',
  }
  // const p1 = 
  const p2 = 'My fascination with coding began in 2021 when I was introduced to Javascript and React. This marked the initial phase of a remarkable journey that would ultimately prove to be the most rewarding career decision I have ever made—an audacious leap of faith into a new professional path.';
  const p3 = 'Following my successful completion of Epicodus, a rigorous 27-week bootcamp centered around Javascript, C#, and CSS, I eagerly embraced an internship opportunity with VALIDATE.';
  const p4 = 'I\'m currently working as a React Web Developer and have been honing my skills with Opine since 2022. One of my biggest weaknesses I\'ve been consciously working on improving is having the confidence to be vulnerable, ask questions, and lean on my team to leverage their knowledge for support.';
  const p5 = 'My passion is traveling and working on projects. Whether it\'s coding out an application or making content, media, & videography, being able to contribute and add value as the project comes together is one of my favorite experiences.';

  useEffect(() => {
    const aboutMeTextContainer = document.querySelector('.aboutMeTextContainer');
    const paragraphs = Array.from(document.querySelectorAll('.aboutMeTextContainer p'));

    const options = {
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutMeTextContainer.classList.add('animate');
          paragraphs.forEach(p => p.classList.add('animate'));
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(aboutMeTextContainer);

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs only once

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
          <div className="aboutMeTitleContain">
            {/* <span className='grayTextAboutMe'>About</span><span>Brandon</span><span className='grayTextAboutMe'>.</span> */}
            <span style={{ fontFamily: 'cursive'}}>So, Who Am I?</span>
          </div>
          <div style={bioStyles}>
            <div className="aboutMeBio">
              <div className='aboutMeTextContainer'>
                <p className="p1">{p2}</p>
                <p className="p2">{p3}</p>
                <p className="p3">{p4}</p>
                <p className="p4">{p5}</p>
                {/* <p>{p1}</p> */}
              </div>
            </div>
          </div>
          <div className='aboutMeRightContainer'>
            <div className="timeLineContainer">
              <h6>THE STORY SO FAR..</h6>
              <Timeline />
            </div>
          </div>
        </div>
      }
    </>
  )
}