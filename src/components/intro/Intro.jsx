import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import Placeholder from "../../public/assets/placeholder.JPG";
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';



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
      strings: ['Developer', 'Designer', 'Content Creator']
    })
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Placeholder} alt="test"></img>
        <Grid item xs={3}>
          <Paper sx={{p:1}}>
            <Grid 
            container 
            spacing={8}
            // direction="row"
            >
              <Grid item>
                <Paper> <FacebookIcon/> </Paper>
                <Paper> <GitHubIcon/> </Paper>
                <Paper> <InstagramIcon/> </Paper>                
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Brandon Magofna.</h1>
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <div className="wrapper">
          <a href="#portfolio">
            <DoubleArrowIcon className="downIcon" onClick="" />
          </a>
        </div>
      </div>

    </div>
  )
}
