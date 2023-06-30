import "./contact.scss"
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import Placeholder from "../../assets/placeholder.JPG";
// import ReactPlayer from 'react-player';


export default function Contact() {
  const form = useRef();
  console.log("Form: ", form.current)

  const sendEmail = (e) => {
    e.preventDefault();

    // if (!form.current) {
    //   // add notyf for notifications
    //   document.getElementById('contactBtn').disabled = true;
    //   console.log("No form data: button should be disabled: ", form)
    // } else {
    emailjs.sendForm('service_orkfipy', 'template_oetq44p', form.current, 'E8gbKgeE-esRKWWXh')
      .then((result) => {
        console.log("Did it work?: ", result.text);
        console.log("form: ", form)
        form.current = null;
      }, (error) => {
        console.log("Error: ", error.text);
      })

      form.reset();
    // }
  };
  return (
    <div className="contact" id="contact">
      <div className="contactTitle">Contact.</div>
      <div className="formContainer">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputContain">
            <div className="contactInput">
              <label>Name:</label>
              <input type='text' name="user_name" />
            </div>

            <div className="contactInput">
              <label>Email:</label>
              <input type='text' name="user_email" />
            </div>

            <div className="contactInput">
              <label>Company:</label>
              <input type="text" name="user_company" />
            </div>

            <div className="contactInput">
              <label>Job Title:</label>
              <input type="text" name="user_title" />
            </div>
          </div>
          <label>Message:</label>
          <textarea name="message" placeholder="Send me a message.."/>
          <button id='contactBtn' className="contactButtonEffect" type="submit" value="Send">Send Message</button>
        </form>
       </div>
     </div>
  );
};
