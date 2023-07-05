import "./contact.scss"
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function Contact() {
  const notyf = new Notyf();
  const form = useRef();
  const windowSize = window.innerWidth;

  const showAlert = (status, message) => {
    status === 200 ?
      notyf.success({
        message: message,
        duration: 5000,
        dismissable: true,
      })
    :
      notyf.error({
        message: message,
        duration: 5000,
        dismissible: true,
      })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_orkfipy', 'template_oetq44p', form.current, 'E8gbKgeE-esRKWWXh')
      .then((result) => {
        console.log("Did it work?: ", result.text);
        console.log("form: ", form)
        form.current = null;
        showAlert(200, "Message Sent Successfully")
      }, (error) => {
        showAlert("Fail", "Error sending message: ", error.text)
        console.log("Error: ", error.text);
      })

      form.current.reset();
  };

  return (
    <div className="contact" id="contact">
        <div className="contactTitle">Contact.</div>
        <div className="formContainer">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputContain"> 
            {
              windowSize > 420
              ?
              // Desktop View:
              <>
                <div className="contactInput">
                  <label>Name:</label>
                  <input type='text' name="user_name" placeholder="John Smith..." required/>
                </div>
                
                <div className="contactInput">
                  <label>Email:</label>
                  <input type='text' name="user_email" placeholder="email@example.com.." required/>
                </div>
                
                <div className="contactInput">
                  <label>Company:</label>
                  <input type="text" name="user_company" placeholder="Nike.." required/>
                </div>
                
                <div className="contactInput">
                  <label>Job Title:</label>
                  <input type="text" name="user_title" placeholder="Senior Developer.." required/>
                </div>
              </>
              :
              // mobile view:
              <>
                <div className="contactInput">
                  <input type='text' name="user_name" placeholder="Name" required/>
                </div>
                
                <div className="contactInput">
                  <input type='text' name="user_email" placeholder="Email" required/>
                </div>
                
                <div className="contactInput">
                  <input type="text" name="user_company" placeholder="Company" required/>
                </div>
                
                <div className="contactInput">
                  <input type="text" name="user_title" placeholder="Job Title" required/>
                </div>
              </>
            }
            </div>

            <label>Message:</label>
            <textarea name="message" placeholder="Send me a message.." required />
            <button id='contactBtn' className="contactButtonEffect" type="submit" value="Send">Send Message</button>
          </form>
        </div>
    </div>
      );
    };
    