import "./intro.scss"
// import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../assets/placeholder.JPG";
import Arrow from "../../assets/arrow.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Intro() {

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
          <div id="mobileView">
              <Image src={Placeholder} fluid alt="Profile Picture"></Image>
          </div>
            <div id="mobileSocial">
              <a 
            target="_blank" 
            href="https://www.facebook.com/brandon.magofna.5"
            rel="noreferrer">
              <FacebookIcon 
                fontSize="large"
                direction="row"
                justifyContent="center"
                alignItems="center"
              />
            </a>
            <a 
            target="_blank" 
            href="https://www.instagram.com/bmagofna68/"
            id="iconTest"
            rel="noreferrer">
                <InstagramIcon 
                  fontSize="large"
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                />
            </a>
            <a 
            target="_blank" 
            href="https://github.com/Magofna68"
            rel="noreferrer">
                <GitHubIcon
                  fontSize="large"
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                />
            </a>
            </div>
          <Col>
            <div 
              id="imageBorder"
              style={{
                maxWidth: `1000px`,
                minWidth: `250px`,
                border: `solid`,
                borderColor: `white`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
                borderRadius: `30%`,
                margin: `10%`
            }}>
              <div 
                id="imgContain"
                style={{
                opacity: '90%',
                maxWidth: `550px`,
                borderRadius: `30px`,
                border: `solid`,
                borderColor: `white`,
                margin: `10% 10%`,
                }}
                >
                  <Image src={Placeholder} fluid alt="Profile Picture"></Image>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>

      </Container>
    </div>

    // <div 
    //   className="intro" 
    //   id="intro"
    //   style={{ 
    //     backgroundImage: `url("https://cdn.wallpapersafari.com/83/6/DY9RHb.gif")`,
    //     backgroundRepeat: `no-repeat`,
    //     justifyContent: `center`,
    //     backgroundColor: `black`,
    //     opacity: `90%`,
    //     backgroundSize: `cover`
        
    //   }}>
    //   <div className="left">
    //     <div 
    //       className="imgContainer"
    //         style={{
    //         backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
    //         opacity: '80%',
    //       }}
    //       >
    //         <Image src={Placeholder} fluid alt="Profile Picture"></Image>
    //       {/* <img src={Placeholder} alt="test"></img> */}
    //     </div>
    //   </div>
    //   <div className="right">
    //     <div className="wrapper">
    //       <h2>Hi There, I'm </h2>
    //       <h1>Brandon Magofna.</h1>
    //       <h3><span ref={textRef}></span></h3>
    //     </div>
    //     <div className="wrapper">
    //       <a href="#aboutMe">
    //         <DoubleArrowIcon className="downIcon" onClick="" />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="mobileArrow">
    //     <a href="#aboutMe">
    //       <DoubleArrowIcon className="downIconMobile" onClick="" />
    //     </a>
    //   </div>
    // </div>
  )
}
