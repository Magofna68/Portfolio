import "./contact.scss"
import React, {useState} from "react";
import Placeholder from "../../assets/placeholder.JPG";
import ReactPlayer from 'react-player';




export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div 
    className="contact" 
    id="contact"
    // style={{
    //   backgroundRepeat: `no-repeat`,
    //   backgroundColor: `black`,
    //   backgroundPositionX: `94%`,
    //   backgroundPositionY: `5%`,
    //   // float: `right`,
    //   position: `absolute`,
    //   backgroundImage: `url("https://c.tenor.com/EhXBLBx7n9sAAAAd/planet-earth.gif")`
    // }}
    >
      <div 
        className="left"
        style={{
          backgroundImage: `url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX25806764.jpg")`,
          opacity: '80%'
        }}>
          {/* format for rendering a video-- */}
          {/* <video controls autoPlay loop muted>
            <source src={Martian} type="video/mp4"></source>
          </video> */}
        <img src={Placeholder} alt="hiking face shot"/>
      </div>
      <div className="right">
        <h2>Contact<span>.</span></h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Email.."></input>
          <textarea placeholder="Enter Message.."></textarea>
          <button type="submit">Send</button>
        </form>
          {message && <span> Thanks for your interest. <br/>I will get back to you shortly.<br/><br/>    - Brandon<br/><br/></span>}
      </div>
        {/* <div className="aboutMe">
          <h2>About Me<span>.</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, recusandae ipsa aliquam accusamus maiores illum voluptatum ex ipsam fuga repellendus magni aperiam nesciunt libero earum iusto at eaque porro alias!</p>
        </div> */}

    </div>
  )
}
