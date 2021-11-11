import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../assets/placeholder.JPG";
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Arrow from "../../assets/arrow.png";



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
    <div 
      className="intro" 
      id="intro"
      style={{ 
        backgroundImage: `url("https://cdn.wallpapersafari.com/83/6/DY9RHb.gif")`,
        backgroundRepeat: `no-repeat`,
        justifyContent: `center`,
        backgroundColor: `black`,
        opacity: `90%`,
        backgroundSize: `cover`
        
      }}>
      <div className="left">
        <div 
          className="imgContainer"
            style={{
            backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
            opacity: '80%',
          }}
          >
          <img src={Placeholder} alt="test"></img>
            <div className="socials">
              <Grid item xs={12}>
                  <Grid 
                    item 
                    fontSize="large" 
                    direction="row" 
                    spacing={8} 
                    alignItems="center"
                  >
                    <a target="_blank" href="https://www.facebook.com/brandon.magofna.5">
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
                    id="iconTest">
                        <InstagramIcon 
                          fontSize="large"
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        />
                    </a>
                    <a target="_blank" href="https://github.com/Magofna68">
                        <GitHubIcon
                          fontSize="large"
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        />
                    </a>
                  </Grid>
          </Grid>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Brandon Magofna.</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <div className="wrapper">
          <a href="#aboutMe">
            <DoubleArrowIcon className="downIcon" onClick="" />
          </a>
        </div>
      </div>
      <div className="mobileArrow">
          <a href="#aboutMe">
            <DoubleArrowIcon className="downIconMobile" onClick="" />
          </a>
        </div>

    </div>
  )
}
