import React from 'react';
import "./menu.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Row from 'react-bootstrap'
import { Person, Mail } from "@material-ui/icons";


export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div 
    className={"menu " + (menuOpen && "active")}
    style={{ 
      // backgroundImage: `url("https://media.freestocktextures.com/cache/0d/42/0d42eeb83ad3a56c97468d69721b2c18.jpg")` 
    }}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#aboutMe">About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Testimonials</a>
        </li>
        {/* <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
        <li 
          onClick={() => setMenuOpen(false)}
          className="socialContainer"
        >
          <div className='iconContain'>
          <a 
            href="https://www.facebook.com/brandon.magofna.5"
            rel="noreferrer"
            target="_blank" 
            className="topbarIcon"
          >
          <FacebookIcon 
                fontSize="large"
                direction="row"
                justifyContent="center"
                alignItems="center"
              />
          </a>
          </div>
          <div className='iconContain'>
          <a 
            target="_blank" 
            href="https://www.instagram.com/bmagofna68/"
            id="iconTest"
            rel="noreferrer"
            className="topbarIcon"
          >
            <InstagramIcon 
              fontSize="large"
              direction="row"
              justifyContent="center"
              alignItems="center"
          />
          </a>
          </div>
          <div className='iconContain'>
          <a 
            target="_blank" 
            href="https://github.com/Magofna68"
            rel="noreferrer"
            className="topbarIcon"
          >
            <GitHubIcon
              fontSize="large"
              direction="row"
              justifyContent="center"
              alignItems="center"
            />
          </a>
          </div>
          <div className="iconContain">
          <a 
            className='topbarIcon'
            href='mailto:Magofna68@gmail.com'>
            <Mail 
              className='icon'
              fontSize="large"
              direction="row"
              justifyContent="center"
              alignItems="center"
            />
          </a>
        </div>
        </li>
        <li onClick={() => setMenuOpen(false)}>
        </li>
          <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Person className='icon' />
            <span style={{fontSize: '.9rem'}}>503-269-2656</span>
          </div>
      </ul>
    </div>
  )
}
