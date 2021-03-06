import React from 'react';
import "./menu.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Row from 'react-bootstrap'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div 
    className={"menu " + (menuOpen && "active")}
    style={{ 
      backgroundImage: `url("https://media.freestocktextures.com/cache/0d/42/0d42eeb83ad3a56c97468d69721b2c18.jpg")` 
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
        <li onClick={() => setMenuOpen(false)}>
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
        </li>
        <li onClick={() => setMenuOpen(false)}>
        </li>
      </ul>
    </div>
  )
}
