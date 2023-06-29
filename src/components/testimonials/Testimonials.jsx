import React, { useEffect, useState } from 'react';
import "./testimonial.scss";
import Levi from "../../assets/LeviProfilePic.jpeg";
import Jadon from "../../assets/JadonProfilePic.jpeg";
import Deltek from "../../assets/Deltek.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OpineIcon from '../../assets/OpineIcon.png';
import BouncingIcon from '../utility/animation/BouncingIcon';

export default function Testimonial() {
  const [isOpen, setIsOpen] = useState(-1); // Initialize with -1
  const isMobile = window.innerWidth < 420;

  
  function RevealTestimonial(id) {
    setIsOpen(isOpen === id ? -1 : id);
    console.log("KEY: ", id)
  }
  
  const reviews = [
    {
      id:0,
      name: "Levi Kohler",
      title: "Solutions Engineer",
      relation: "Colleague at Deltek",
      img: `${Levi}`,
      icon: "https://images.squarespace-cdn.com/content/v1/5524448ee4b0d6f6b83ab9e2/1473199586097-9Q0FQMMH0NGMKY0LVZ60/epicodus-logo-300.png",
      alt: "Epicodus",
      desc: `"Brandon is the most organized SDR I have ever worked with, and it shows with the results he got during our time at Deltek together. If there was any objection I hadn't heard from a prospect I knew Brandon would have some record of how to best handle it and shoot for the opportunity. Listening to Brandon make calls was a work of art, I've never seen an SDR who has a great plan going into every call. Inevitably we all have calls where we are unprepared or get surprised by something on the account, but never Brandon. He joined the team over a year after me, but I couldn't be happier because within just a few short months he had already taught me things that had never even crossed my mind. He is an avid learner who is constantly trying the newest strategies from whatever book he happens to be reading at the time, and he is always more than willing to share that information with the rest of the team. I couldn't look back on our time together more fondly, and I know wherever his career opportunities lead him he will use that same intrinsic drive and thirst for knowledge to find success."`
    },
    {
      id:1,
      name: "Lee Grambush",
      title: "Senior Developer",
      relation: "Lead Developer @ Opine",
      img: 'https://media.licdn.com/dms/image/C5603AQHB5BLrD5tGww/profile-displayphoto-shrink_800_800/0/1516330813978?e=1688601600&v=beta&t=zoNVVsdajaAqgJa-piI_E52IA6O5NkzZjeLQcrJZMXk',
      icon: `${OpineIcon}`,
      alt: "Opine Icon",
      desc: `"I recommend Brandon for any software development position based on my assessment as Senior Developer. Brandon possesses great skills and expertise in developing robust web applications using React. Additionally, Brandon also showcased proficiency in deploying a Node.js backend server, showcasing his solid understanding of server-side development.
      One notable contribution Brandon has made is in writing Firebase security rules. He excels at writing secure and efficient rules to protect sensitive user data and ensure proper access control. He implemented best practices and forward-thinking approaches to mitigate potential security risks and vulnerabilities effectively.
      Furthermore, Brandon illustrated his strong understanding of APIs by successfully integrating Stripe’s payment gateway into several projects. He has implemented secure and seamless payment flows, handling various payment scenarios such as subscriptions and one-time payments. This ensures a smooth and reliable payment experience for end-users.
      Throughout our collaboration, Brandon consistently delivered high-quality code, demonstrating excellent problem-solving abilities and attention to detail. He is a dedicated team player, always willing to go the extra mile to ensure project success. Brandon effectively communicates project progress and requirements, making him an invaluable asset in any team environment.
      
      As an entry-level developer, Brandon's ability to grasp complex concepts and guide new developers is commendable. His growth mindset and eagerness to learn about the latest developments in the React ecosystem make him a reliable and adaptable developer. 
      I wholeheartedly recommend Brandon as a React software developer.
      "`,
      featured: true,
    },
    {
      id:2,
      name: "Jadon Wiersma",
      title: "Client Sales Executive",
      relation: "Colleague at Deltek",
      img: `${Jadon}`,
      icon: `${Deltek}`,
      alt: "Deltek",
      desc: `"I had the pleasure of working with Brandon for almost 2 years. Brandon was consistently one of the most prepared and introspective professionals I've worked with. His organization allowed him to be prepared for nearly any situation that popped up in the day-to-day and he went the extra mile to understand prospects and their unique situations. Brandon is always looking to improve himself with personal development and ways to improve things internally and that spirit lifted others up as well. He truly cares and puts pride in his work doing all of the little things that make a huge difference at the end of the day. He would be a fantastic asset to anyone's team both personally and professionally."`,
      // featured: true,
    },
  ]
  
  return (
    <div 
      className="testimonial" 
      id="testimonial"
      style={{
        backgroundSize: `cover`,
        repeat: `no-repeat`,
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_1280.jpg")`
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'gray'}}>
        <h1 className="testimonialTitle">Testimonials<span style={{color: 'white'}}>.</span></h1>
      </div>
        <Container fluid className="testimonialContainer">
        {reviews.map((r) => (
          isMobile ? 
          isOpen === r.id ? (
            
            <Card key={r.id} className="testimonialCard openedTestimonial">
                
                <Row className="topTestimonialCard">
                  <Col>
                    <Card.Img 
                      variant="top" 
                      src={r.img} 
                      className="testimonialCardImg"
                      />
                  </Col>
                  <Col className="testimonialIconContain">
                    <Card.Img
                      variant="top"
                      src={r.icon}
                      alt={r.alt}
                      className="testimonialCardIcon"
                      />
                    <Card.Title id="testimonialCardName">{r.name}</Card.Title>
                  </Col>
                </Row>
                <Card.Body>
                  <Row>
                  <Col>
                    <Card.Text id="testimonialCardText">
                      {r.desc}
                    </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer className="text-muted testimonialCardTitle" id="testimonialCardTitle">{r.title}</Card.Footer>
                <span onClick={() => RevealTestimonial(false)} className="collapseIconContainer">
                  <BouncingIcon />
                </span>
              </Card>

          ) : (

              <Card key={r.id} className="mobileTestimonialCard">
                <Row className="mobileTopTestimonialCard">
                    <Card.Img 
                      variant="top" 
                      src={r.img} 
                      className="mobileTestimonialCardImg"
                    />
                  <Col style={{padding: 0}} className="mobileTestimonialIconContain">
                    <Card.Img
                      variant="top"
                      src={r.icon}
                      alt={r.alt}
                      className="mobileTestimonialCardIcon"
                    />
                  <p className="mobileTestimonialCardName">
                    {r.name}
                  </p>
                  </Col>
                </Row>
                <span onClick={() => RevealTestimonial(r.id)} className="mobileExpandIconContainer">
                  <BouncingIcon />
                </span>
              </Card>
          )
          : 
          <Card key={r.id} className={r.featured ? "featuredTestimonial" : "testimonialCard"}>
                
          <Row className="topTestimonialCard">
            <Col className="imgColumn">
              <Card.Img 
                variant="top" 
                src={r.img} 
                className="testimonialCardImg"
                />
            </Col>
            <Col className="testimonialIconContain">
              <Card.Img
                variant="top"
                src={r.icon}
                alt={r.alt}
                className="testimonialCardIcon"
                />
              <Card.Title id="testimonialCardName">{r.name}</Card.Title>
            </Col>
          </Row>
          <Card.Body>
            <Row>
            <Col>
              <Card.Text id="testimonialCardText">
                {r.desc}
              </Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer className="text-muted testimonialCardTitle" id="testimonialCardTitle">{r.title}</Card.Footer>
        </Card>
        ))}
      </Container>      
    </div>
  )
}