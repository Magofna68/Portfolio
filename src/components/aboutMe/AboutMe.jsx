import React, { useEffect, useRef } from 'react';
import "./aboutMe.scss"
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '../utility/timeline/Timeline';

export default function AboutMe() {
  const isMobile = 420;

  const bioStyles = {
    margin: '5% auto 0 auto', 
    justifyContent: 'space-between', 
    width: '45%',
    maxWidth: '550px',
    flexDirection: 'column', 
    display: 'flex',
  }

  const p2 = 'My fascination with coding began in 2021 when I was introduced to Javascript and React. This marked the initial phase of a remarkable journey that would ultimately prove to be the most rewarding career decision I have ever made—an audacious leap of faith into a new professional path.';
  const p3 = 'Following my successful completion of Epicodus, a rigorous 27-week bootcamp centered around Javascript, C#, and CSS, I eagerly embraced an internship opportunity with VALIDATE.';
  const p4 = 'I\'m currently working as a React Web Developer and have been honing my skills with Opine since 2022. One of my biggest weaknesses I\'ve been consciously working on improving is having the confidence to be vulnerable, ask questions, and lean on my team to leverage their knowledge for support.';
  const p5 = 'My passion is traveling and working on projects. Whether it\'s coding out an application or making content, media, & videography, being able to contribute and add value as the project comes together is one of my favorite experiences.';

  const aboutMeTextContainerRef = useRef(null);
  const paragraphsRefs = useRef([]);

  useEffect(() => {
    const aboutMeTextContainer = aboutMeTextContainerRef.current;
    const paragraphs = paragraphsRefs.current;

    if (aboutMeTextContainer && paragraphs.length > 0) {
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
    }
  }, []);

  return (
    <>
      {
        window.innerWidth < isMobile ?
          <div className="mobileAboutMeContainer" id="aboutMe">
            <div className="mobileAboutMeTitleContain">
              <span className='mobileAboutMeTitle'>My Timeline.</span>
            </div>
            <div className='mobileTimelineContainer'>
              <Timeline />
            </div>
            <div className="aboutMeTextLocation">
                <span className="introTextTransform">I &nbsp;&nbsp;transform </span><br/>
                <h3 className="introTextInnovative">innovative Ideas,</h3>
                {/* <span className="introTextIdea">Ideas,</span><br/> */}
                <span className="introTextInto">into tangible</span><br/>
                <span className="introTextRealities"><span className="capitalLetter">R</span>ealities.</span>
              </div>
          </div>
        :
        <>
          <div className="aboutMeContainer" id='aboutMe'>
            <div className="aboutMeTitleContain">
              {/* <span className='grayTextAboutMe'>About</span><span>Brandon</span><span className='grayTextAboutMe'>.</span> */}
              <span style={{ fontFamily: 'cursive'}}>So, Who Am I?</span>
            </div>
            <div style={bioStyles}>
              <div className="aboutMeBio">
                <div ref={aboutMeTextContainerRef} className="aboutMeTextContainer">
                  <p ref={ref => paragraphsRefs.current[0] = ref} className="p1">{p2}</p>
                  <p ref={ref => paragraphsRefs.current[1] = ref} className="p2">{p3}</p>
                  <p ref={ref => paragraphsRefs.current[2] = ref} className="p3">{p4}</p>
                  <p ref={ref => paragraphsRefs.current[3] = ref} className="p4">{p5}</p>
                </div>
              </div>

            </div>
            <div className='aboutMeRightContainer'>
              <div className="timeLineContainer">
                <h6 style={{
                    background: 'linear-gradient(to bottom, #ffffff, #616161)',
                    webkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}>THE STORY SO FAR..</h6>
                <Timeline />
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}