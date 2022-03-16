import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../assets/placeholder.JPG";
// import Arrow from "../../assets/arrow.png";
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
          <Col xs={12} s={12} md={12} lg={7} xl={7}>
            <div 
              id="imageBorder"
              style={{
                maxWidth: `600px`,
                minWidth: `250px`,
                border: `solid`,
                borderColor: `white`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
                borderRadius: `30%`,
                margin: `5%`,
                overflow: `visible`
            }}>
              <div 
                id="imgContain"
                style={{
                opacity: '90%',
                maxWidth: `350`,
                maxHeight: `300`,
                minWidth: `200`,
                borderRadius: `30px`,
                border: `solid`,
                borderColor: `white`,
                margin: `10% 7%`,
                }}
                >
                  <Image src={Placeholder} fluid alt="Profile Picture"></Image>
              </div>
            </div>
          </Col>
          <Col xs={12} s={12} m={12} lg={5} xl={5} id="container">
            {/* <div id="container"> */}
              <div id="introText">
                <h2>Hi There,</h2>
                <h1><span id="smallText">I'm</span> Brandon Magofna.</h1>
                <h3><span id="iType" ref={textRef}></span></h3>
              {/* </div> */}
              <a href="#aboutMe" id="arrowContain">
                <DoubleArrowIcon className="downIcon" />
              </a>
              </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} m={6}>
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
          </Col>
        </Row>
        {/* <Row> */}
          {/* <a href="#aboutMe">
             <DoubleArrowIcon className="downIcon" />
          </a> */}
        {/* </Row> */}
      </Container>
    </div>


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
