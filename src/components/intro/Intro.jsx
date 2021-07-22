import "./intro.scss"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

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
          <h3>Freelance <span>Designer</span></h3>
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
