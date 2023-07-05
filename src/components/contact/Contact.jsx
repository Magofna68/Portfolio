import "./contact.scss"
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Mail} from "@material-ui/icons";

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
    <section className="contact" id="contact">
      <div className="contactInfoContain">
        <div className="contactTitle">
          <span className="contactTitleSpan">Lets get in </span>
          Contact.
        </div>
        {
          windowSize > 420 
          ?
            <div className="contactSubTextContain">
              <div className="contactSocialContain">
                <div className='iconContain'>
                  <a 
                    target="_blank" 
                    href="https://www.instagram.com/bmagofna68/"
                    id="iconTest"
                    rel="noreferrer"
                    className="topbarIcon"
                  >
                    <InstagramIcon 
                      fontSize="large"
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                  />
                  </a>
                  </div>
                  <div className='iconContain'>
                  <a 
                    href="https://www.facebook.com/brandon.magofna.5"
                    rel="noreferrer"
                    target="_blank" 
                    className="topbarIcon"
                  >
                  <FacebookIcon 
                        fontSize="large"
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      />
                  </a>
                  </div>
                  <div className='iconContain'>
                  <a 
                    target="_blank" 
                    href="https://github.com/Magofna68"
                    rel="noreferrer"
                    className="topbarIcon"
                  >
                    <GitHubIcon
                      fontSize="large"
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    />
                  </a>
                  </div>
              </div>
              <span className="contactSubText">
                <h2>Location:</h2>
                <p>Salem, Oregon</p>
                <h2>Contact:</h2>
                <p>Magofna68@gmail.com</p>
              </span>
            </div>
          :
          // <div className="mobileContactSocialContain">
          //       <div className='iconContain'>
          //         <a 
          //           target="_blank" 
          //           href="https://www.instagram.com/bmagofna68/"
          //           id="iconTest"
          //           rel="noreferrer"
          //           className="topbarIcon"
          //         >
          //           <InstagramIcon 
          //             fontSize="large"
          //             direction="row"
          //             justifyContent="center"
          //             alignItems="center"
          //         />
          //         </a>
          //         </div>
          //         <div className='iconContain'>
          //         <a 
          //           href="https://www.facebook.com/brandon.magofna.5"
          //           rel="noreferrer"
          //           target="_blank" 
          //           className="topbarIcon"
          //         >
          //         <FacebookIcon 
          //               fontSize="large"
          //               direction="row"
          //               justifyContent="center"
          //               alignItems="center"
          //             />
          //         </a>
          //         </div>
          //         <div className='iconContain'>
          //         <a 
          //           target="_blank" 
          //           href="https://github.com/Magofna68"
          //           rel="noreferrer"
          //           className="topbarIcon"
          //         >
          //           <GitHubIcon
          //             fontSize="large"
          //             direction="row"
          //             justifyContent="center"
          //             alignItems="center"
          //           />
          //         </a>
          //         </div>
          //     </div>
          null
        }
      </div>
        <div className="formContainer">
            <span className="formTitle"><h2>Lets Connect!</h2></span>
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputContain"> 
            {
              windowSize > 420
              ?
              // Desktop View:
              <>
                <div className="contactInput">
                  <label>First:</label>
                  <input type='text' name="user_first_name" placeholder="John.." required/>
                </div>

                <div className="contactInput">
                  <label>Last:</label>
                  <input type='text' name="user_last_name" placeholder="Smith..." required/>
                </div>
                
                <div className="contactInput">
                  <label>Company:</label>
                  <input type="text" name="user_company" placeholder="Nike.." required/>
                </div>
                
                <div className="contactInput">
                  <label>Job Title:</label>
                  <input type="text" name="user_title" placeholder="Senior Developer.." required/>
                </div>
                
                <div className="contactInput">
                  <label>Email:</label>
                  <input type='text' name="user_email" placeholder="email@example.com.." required/>
                </div>
              </>
              :
              // mobile view:
              <>
                <div className="contactInput">
                  <input type='text' name="user_first_name" placeholder="First Name" required/>
                </div>

                <div className="contactInput">
                  <input type='text' name="user_last_name" placeholder="Last Name" required/>
                </div>
                
                <div className="contactInput">
                  <input type="text" name="user_company" placeholder="Company" required/>
                </div>
                
                <div className="contactInput">
                  <input type="text" name="user_title" placeholder="Job Title" required/>
                </div>
                
                <div className="contactInput">
                  <input type='text' name="user_email" placeholder="Email" required/>
                </div>
              </>
            }
            </div>

            <label>Message:</label>
            <textarea name="message" placeholder="Send me a message.." required />
            <button id='contactBtn' className="contactButtonEffect" type="submit" value="Send">Send Message <Mail /></button>
          </form>
        </div>
    </section>
      );
    };
    