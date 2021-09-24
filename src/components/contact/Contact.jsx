import "./contact.scss"
import React, {useState} from "react";


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
    style={{
      backgroundRepeat: `no-repeat`,
      backgroundColor: `black`,
      backgroundPositionX: `94%`,
      backgroundPositionY: `5%`,
      // float: `right`,
      position: `absolute`,
      backgroundImage: `url("https://c.tenor.com/EhXBLBx7n9sAAAAd/planet-earth.gif")`
    }}>
      <div className="left">
        <img src="https://memegenerator.net/img/instances/68186355.jpg" alt="businessmen shaking hands"/>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"></input>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
          {message && <span> Thanks for your interest. <br/>I will get back to you shortly.<br/><br/>    - Brandon</span>}
      </div>

    </div>
  )
}
