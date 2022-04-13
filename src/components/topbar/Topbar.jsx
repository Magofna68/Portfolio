import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}
    style={{ 
      backgroundImage: `url("https://media.freestocktextures.com/cache/0d/42/0d42eeb83ad3a56c97468d69721b2c18.jpg")` 
    }}>
      <div className="wrapper">
        <div className="left">
          <a 
            href="#intro" 
            id="logo" 
            rel="noreferrer">
            <span className="tomorrowLogo">Tomorrow</span>
            <br/>begins today.
          </a>
          <div className="socials">
            <a 
              target="_blank" 
              href="https://www.facebook.com/brandon.magofna.5"
              rel="noreferrer"
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
            >
              <GitHubIcon
                fontSize="large"
                direction="row"
                justifyContent="center"
                alignItems="center"
              />
            </a>
        </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span id="mobile">503-269-2656</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span id="mobile1">Magofna68@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span>className="line1"</span>
            <span>className="line2"</span>
            <span>className="line3"</span>
          </div>
        </div>
      </div>
    </div>
  )
}
