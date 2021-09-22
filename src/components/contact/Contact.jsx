import "./contact.scss"
import React, {useState} from "react";


export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
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
