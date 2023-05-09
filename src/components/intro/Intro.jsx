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
  const text = "Hi There";
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      backDelay: 1500,
      startDelay: 0,
      typeSpeed: 150,
      showCursor: true,
      strings: ['Developer.', 'Designer.', 'Content Creator.']
    })
  }, []);
  
  return (
    <div id="introPage">
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div 
              id="imageBorder"
              style={{
                maxWidth: `90%`,
                // minWidth: `250px`,
                border: `solid`,
                borderColor: `red`,
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
                borderColor: `white`,
                margin: `10% 7%`,
                }}
                >
                  <Image src={Placeholder} fluid alt="Profile Picture"></Image>
                  {/* <img src={Placeholder} fluid alt="Profile"></img> */}

              </div>
            </div>
          </Col>
          <Col xs={12} s={12} md={12} lg={6} xl={6} id="container">
            <div id="introText">
          <Typography
            variant='h4'
            sx={{
              fontWeight: 'bold',
              color: 'rgb(0,255,255,0%)',
              WebkitTextStroke: '0.5px white',
              backgroundImage: `url('https://media1.giphy.com/media/5k00E7cigvvqnBYDdP/giphy.gif?cid=ecf05e47cde9hqvaqke38lehjfkc1r8hjs44rqvfdl6z49kb&rid=giphy.gif&ct=g')`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              transition: 'color 0.50s, -webkit-text-stroke 0.50s',
              '&: hover': {
                color: 'rgb(200,0,0,50%)',
                WebkitTextStroke: '0.5px red',
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
          <Typography
            variant='h5'
            sx={{
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
            <span ref={textRef}></span>
          </Typography>
            </div>
            </Col>
            </Row>
            <div style={{ width: '75%', marginLeft: '2rem'}}>
              <span style={{ marginLeft: '1rem', color: 'white'}}>While I reside In Oregon,</span><br/> <h1 style={{ margin: '.75rem 0 0 5rem', marginBottom: '-1.5rem', color: 'white'}}>I help create web applications</h1><br/><span style={{ margin: '1rem 0 0 20rem', color: 'white', fontSize: '1.75rem'}}>for people all over the world.</span>
            </div>
            <div id="arrowDesk">
              {/* <a href="#aboutMe">
                <DoubleArrowIcon className="downLG" />
              </a> */}
            </div>


                <a href="#aboutMe" className="customButtonEffect">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="doubleArrowIcon">
                    <DoubleArrowIcon fontSize="large" />
                  </div>
                </a>
            {/* <div id="arrowContain">
              <a href="#aboutMe">
                <DoubleArrowIcon className="downIcon" />
              </a>
            </div> */}
      </Container>
    </div>
  )
}
