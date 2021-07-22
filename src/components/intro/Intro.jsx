import "./intro.scss"
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { init } from 'ityped';
import { useEffect, useRef } from "react";

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
          <img src="assets/placeholder.JPG" alt="test"></img>
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
