import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";




export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}
    style={{ 
      backgroundImage: `url("https://media.freestocktextures.com/cache/0d/42/0d42eeb83ad3a56c97468d69721b2c18.jpg")` 
    }}>
      <div className="wrapper">
        <a 
          href="#intro" 
          rel="noreferrer"
          id="logo">
          <span className="topbarIcon">Let's</span><br/> 
          <span className="blackText">Connect</span>
          <span className="topbarIcon">.</span>
        </a>
          <div className="itemContainer">
          <a href="mailto:Magofna68@gmail.com">
            <Mail className="icon"/>
            <span id="mobile">Email</span>
          </a>
          </div>
          <div className="itemContainer">
            <Person className="icon" />
            <span id="mobile">503-269-2656</span>
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
