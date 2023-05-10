import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../assets/placeholder.JPG";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { Typography } from "@mui/material";
import JS from '../../assets/JS-Portfolio.png';
import CSS from '../../assets/CSS.png';
import React from '../../assets/React.png';
import HTML from '../../assets/HTML.png';
import Location from '../../assets/Location.png';

export default function Intro() {
  const textRef = useRef(null);
  const windowSize = window.innerWidth; 

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      backDelay: 1500,
      startDelay: 0,
      typeSpeed: 150,
      showCursor: true,
      strings: ['React Developer.', 'Designer.', 'Content Creator.']
    })
  }, []);
  
  return (
    <div id="introPage">
      <Container fluid>
        <div id="imageBorder">
          <div 
            id="imgContain"
            style={{
            opacity: '90%',
            borderRadius: `30px`,
            border: `solid`,
            borderColor: `gray`,
            margin: `10% 7%`,
            }}
            >
              <Image src={Placeholder} fluid alt="Profile Picture"></Image>
          </div>
        </div>

        {/* Desktop */}
          {
            windowSize > 420
            ?
            <>
              <div className="introText">
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 'bold',
                    background: 'gray',
                    color: 'rgb(0,255,255,0%)',
                    WebkitTextStroke: '1px white',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    transition: 'color 0.50s, -webkit-text-stroke 0.50s',
                    '&: hover': {
                      color: 'rgb(0,0,0,100%)',
                      WebkitTextStroke: '1px gray',
                      cursor: 'arrow',
                      userSelect: 'none'
                    }
                  }}
                >
                  Hey, I'm
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    position: 'relative',
                    fontWeight: 'bold',
                    color: 'rgb(0,255,255,0%)',
                    WebkitTextStroke: '0.5px white',
                    backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
                    '&: hover': {
                      color: 'rgb(200,0,0,50%)',
                      WebkitTextStroke: '0.5px red',
                      cursor: 'arrow',
                      userSelect: 'none'
                    }
                  }}
                >
                  Brandon Magofna
                </Typography>
                <span><hr className="divider" /></span>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'rgb(0,255,255,0%)',
                    background: 'gray',
                    WebkitTextStroke: '0.75px white',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  <span ref={textRef}></span>
                </Typography>
              </div>
              <div className="introBottomSection" style={{ display: 'flex', flexDirection: 'row'}}>
                <div className="bottomIntroTextContainer">
                  <div className="introTextLocation">

                    <span className="introTextOregon">
                      Based out of Oregon, 
                      <span>
                        <img style={{}} src={Location} alt="Location Icon" width="40px" /> 
                      </span>
                    </span><br/>

                    <h2 className="introTextTransform">
                      I help transform<br/>
                    </h2>

                    <span className="textInnovative" >
                      innovative &nbsp;&nbsp;Ideas,
                    </span>

                    <span className="textInnovativeDesktop">innovative Ideas, into tangible</span>
                    <br/>
                    <span className="introTextTangibles">into tangible</span><br/>
                    <h1 className="introTextRealities">realities.</h1>
                  </div>
                  <div className="whiteLines" style={{ width: '35%'}} >
                    <div className="whiteLines" style={{ marginLeft: '.25rem', width: '98%'}}>
                      <div style={{ width: '100%', overflow: 'hidden', marginLeft: '1rem'}}>
                        <span className="introIconContainer">
                          <img src={JS}  alt="Javascript" width="100%" />
                        </span>
                        <span className="introIconContainer">
                          <img src={CSS}  alt="Cascading Style Sheets" width="100%" />
                        </span>
                        <span className="introIconContainer">
                          <img src={HTML}  alt="HTML5" width="100%" />
                        </span>
                        <span className="introIconContainer">
                          <img src={React}  alt="React Framework" width="100%" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </>
            :
            // mobile View
            <>
              <div className="introTypographyContainer" id="introText">
                <Typography
                  variant='h5'
                  sx={{
                    marginBottom: '-1%',
                    fontWeight: 'bold',
                    background: 'gray',
                    color: 'rgb(0,255,255,0%)',
                    WebkitTextStroke: '1px white',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    transition: 'color 0.50s, -webkit-text-stroke 0.50s',
                    '&: hover': {
                      color: 'rgb(0,0,0,100%)',
                      WebkitTextStroke: '1px gray',
                      cursor: 'arrow',
                      userSelect: 'none'
                    }
                  }}
                >
                  Hey, I'm
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    marginBottom: '-5%',
                    position: 'relative',
                    fontWeight: 'bold',
                    color: 'rgb(0,255,255,0%)',
                    WebkitTextStroke: '0.5px white',
                    backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
                    '&: hover': {
                      color: 'rgb(200,0,0,50%)',
                      WebkitTextStroke: '0.5px red',
                      cursor: 'arrow',
                      userSelect: 'none'
                    }
                  }}
                >
                  Brandon
                </Typography>
                <Typography
                  variant='h2'
                  sx={{
                    position: 'relative',
                    fontWeight: 'bold',
                    color: 'rgb(0,255,255,0%)',
                    WebkitTextStroke: '0.5px white',
                    backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    transition: 'color 0.50s, left 0.50s, -webkit-text-stroke 0.50s',
                    '&: hover': {
                      color: 'rgb(200,0,0,50%)',
                      WebkitTextStroke: '0.5px red',
                      cursor: 'arrow',
                      userSelect: 'none'
                    }
                  }}
                >
                   Magofna
                </Typography>
                <span><hr className="divider" /></span>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'rgb(0,255,255,0%)',
                    background: 'gray',
                    WebkitTextStroke: '0.75px white',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  <span ref={textRef}></span>
                </Typography>
              </div>

              <div className="introTextLocation">
                <span className="introTextTransform">I &nbsp;&nbsp;transform </span><br/>
                <h3 className="introTextInnovative">innovative</h3>
                <span className="introTextIdea">Ideas,</span><br/>
                <span className="introTextInto">into tangible</span><br/>
                <span className="introTextRealities"><span className="capitalLetter">R</span>ealities.</span>
              </div>
            </>
          }
          <a href="#aboutMe" className="customButtonEffect">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="doubleArrowIcon">
              <DoubleArrowIcon fontSize="large" />
            </div>
          </a>
      </Container>
    </div>
  )
}
