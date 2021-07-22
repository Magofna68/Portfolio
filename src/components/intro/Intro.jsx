import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/placeholder.JPG" alt="test"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Brandon Magofna</h1>
          <h3>Freelance<span></span></h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="downIcon" />
          <KeyboardArrowDownIcon className="downIcon" />
          {/* <img src="assets/down.jpeg" alt="arrow"></img> */}
        </a>
      </div>

    </div>
  )
}
