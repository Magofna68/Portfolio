import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../assets/placeholder.JPG";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Typography } from "@mui/material";
import CustomTypography from '../utility/typography/Typography';

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
        <Row>
          {/* <Col xs={12} sm={12} md={9} lg={6} xl={6}> */}
            <div 
              id="imageBorder"
              style={{
                maxWidth: `90%`,
                // minWidth: `250px`,
                border: `solid`,
                borderColor: '',
                opacity: '.75',
                alignItems: `center`,
                justifyContent: `center`,
                // backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
                borderRadius: `30%`,
                // margin: `5%`,
                // marginTop: `15%`,
                overflow: `visible`
            }}>
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
                  {/* <img src={Placeholder} fluid alt="Profile"></img> */}

              </div>
            </div>
          {/* </Col> */}
          <Col xs={12} s={12} md={12} lg={6} xl={6} style={{ margin: 0, padding: 0,}}>
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
                  // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
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
                  // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
                >
                  <span ref={textRef}></span>
                </Typography>
              </div>

              <div className="introTextLocation">
                <span className="introTextOregon">
                  Based out of Oregon,
                </span>
                <br/>
                <h2 className="introTextTransform">
                  I help transform<br/>
                </h2>
                  <span className="textInnovative" >
                    innovative &nbsp;&nbsp;Ideas,
                  </span>
                <br/>
                <span className="introTextTangibles">into tangible</span><br/>
                <h1 className="introTextRealities">realities.</h1>
              </div>
            </>
            :
      // mobile View
            <>
              <div id="introText">
                <Typography
                variant='h5'
                sx={{
                  fontWeight: 'bold',
                  background: 'gray',
                  color: 'rgb(0,255,255,0%)',
                  WebkitTextStroke: '1px white',
                  // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
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
                variant='h3'
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
                <span style={{ color: 'white', margin: '-3.25% 0'}}><hr style={{height: '3px', width: '70%'}} /></span>
                <Typography
                variant='h5'
                sx={{
                  color: 'rgb(0,255,255,0%)',
                  background: 'gray',
                  WebkitTextStroke: '0.75px white',
                  // backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
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
          </Col>
          </Row>


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
