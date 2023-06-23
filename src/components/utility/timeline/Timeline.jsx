import React from 'react'
import {timelineElements} from '../../utility/timeline/timelineElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@mui/icons-material/Work';
import './timeline.scss';
import HistoryIcon from '@mui/icons-material/History';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

export default function Timeline() {
  let workIconStyles = {background: '#06d6a0'}
  let schoolIconStyles = {background: '#f9c74f'}

  return (
    <div className="timelineContainer">
      {/* <h1 className="timelineTitle">Timeline</h1> */}
      <VerticalTimeline>
        {
          timelineElements.map((element => {
            let isWorkIcon = element.icon === 'Work';
            let showButton = 
              element.buttonText !== undefined &&
              // element.buttonText !== null && 
              element.buttonText !== '';

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName='date'
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon/>}
              >
                <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                {
                  element.img ?
                  <>
                  <br/><img src={element.img} width='100%' alt='resume'></img><br/><br/>
                  </>
                  :
                  null
                }
                {
                  element.points ?
                  <>
                    <p id="description">{element.description}</p>
                    <ul className='timelinePoints'>
                    {element.points.map((point) => 
                      <li>{point}</li>
                      )}
                    </ul>
                  </>
                  :
                  <p id="description">{element.description}</p>
                }
                {
                  showButton && (<a className={`timelineButton ${isWorkIcon ? 'workButton' : 'schoolButton'}`} target='_blank' rel="noreferrer" href={element.link}>{element.buttonText}</a>)
                }
                {
                  element.description ?
                  <p className="timelineDate">{element.date}</p>
                  :
                  null
                }

              </VerticalTimelineElement>
            )
          }))
        }
            {/* <VerticalTimelineElement>
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
            </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  )
}
