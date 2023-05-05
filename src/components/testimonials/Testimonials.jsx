import "./testimonial.scss";
import Levi from "../../assets/LeviProfilePic.jpeg";
import Jadon from "../../assets/JadonProfilePic.jpeg";
import Deltek from "../../assets/Deltek.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OpineIcon from '../../assets/OpineIcon.png';

export default function Testimonial() {

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
      desc: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
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
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'gray'}}>
        <h1 className="testimonialTitle">Testimonials<span style={{color: 'white'}}>.</span></h1>
      </div>
      <Container fluid className="testimonialContainer">
        {reviews.map((r) => (
          <Card className={r.featured ? "featuredTestimonial" : "testimonialCard"}> 
            <Row className="topTestimonialCard">
              <Col style={{ padding: 0 }}>
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
              </Col>
              <Card.Title id="testimonialCardName">{r.name}</Card.Title>
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