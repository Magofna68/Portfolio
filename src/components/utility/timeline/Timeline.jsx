import React from 'react'
import {timelineElements} from '../../utility/timeline/timelineElements';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@mui/icons-material/Work';
import './timeline.scss';
import HistoryIcon from '@mui/icons-material/History';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import FileDownload from '../fileDownload/FileDownload';

export default function Timeline() {
  let workIconStyles = {background: '#06d6a0'}
  let schoolIconStyles = {background: '#f9c74f'}
  let resumeIconStyles = { background: '#E5E7E7'}
  

  return (
    <div className="timelineContainer">
      <VerticalTimeline>
        {
          timelineElements.map((element => {
            let isWorkIcon = element.icon === 'Work';
            let isSchoolIcon = element.icon === 'School'
            let showButton = 
              element.buttonText !== undefined &&
              element.buttonText !== '';

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName='date'
                iconStyle={isWorkIcon ? workIconStyles : (isSchoolIcon ? schoolIconStyles : resumeIconStyles)}
                icon={isWorkIcon ? <WorkIcon /> : (isSchoolIcon ? <SchoolIcon/> : <HistoryIcon />)}
              >
                <h3 
                  className='vertical-timeline-element-title' 
                  style={{ color: isWorkIcon ? '#06d6a0' : (isSchoolIcon ? '#f9c74f' : '#E5E7E7') }}
                >
                  {element.title}
                </h3>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                {
                  element.img ?
                  <>
                    <br/><img src={element.img} width='100%' alt='resume'></img><br/><br/>
                    <FileDownload />
                  </>
                  :
                  null
                }
                {
                  element.points ?
                  <>
                    <p id="description">{element.description}</p>
                    <ul className='timelinePoints'>
                    {element.points.map((point, index) => 
                      <li key={index}>{point}</li>
                      )}
                    </ul>
                  </>
                  :
                  <p id="description">{element.description}</p>
                }
                {
                  showButton && (<a className={`timelineButton onHover ${isWorkIcon ? 'workButton' : (isSchoolIcon ? 'schoolButton' : 'resumeButton')}`} target='_blank' rel="noreferrer" href={element.link}>{element.buttonText}</a>)
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
      </VerticalTimeline>
    </div>
  )
}
