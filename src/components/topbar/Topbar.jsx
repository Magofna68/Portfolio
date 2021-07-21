import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";

export default function topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>3927 4938 39</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>Magofna68@genius.com </span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
