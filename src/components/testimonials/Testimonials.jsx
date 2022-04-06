import "./testimonial.scss";
import Levi from "../../assets/LeviProfilePic.jpeg";
import Jadon from "../../assets/JadonProfilePic.jpeg";
import Card from 'react-bootstrap/Card';

export default function Testimonial() {

  const reviews = [
    {
      id:0,
      name: "Levi Kohler",
      title: "Junior Developer",
      relation:
        "Colleague at Deltek",
      img: `${Levi}`,
      icon: 
        "https://images.squarespace-cdn.com/content/v1/5524448ee4b0d6f6b83ab9e2/1473199586097-9Q0FQMMH0NGMKY0LVZ60/epicodus-logo-300.png",
      alt:
        "Deltek",
      desc: 
        `"Brandon is the most organized SDR I have ever worked with, and it shows with the results he got during our time at Deltek together. If there was any objection I hadn't heard from a prospect I knew Brandon would have some record of how to best handle it and shoot for the opportunity. Listening to Brandon make calls was a work of art, I've never seen an SDR who has a great plan going into every call. Inevitably we all have calls where we are unprepared or get surprised by something on the account, but never Brandon. He joined the team over a year after me, but I couldn't be happier because within just a few short months he had already taught me things that had never even crossed my mind. He is an avid learner who is constantly trying the newest strategies from whatever book he happens to be reading at the time, and he is always more than willing to share that information with the rest of the team. I couldn't look back on our time together more fondly, and I know wherever his career opportunities lead him he will use that same intrinsic drive and thirst for knowledge to find success."`
    },
    {
      id:1,
      name: "Jadon Wiersma",
      title: "Sales Development Representative",
      relation:
        "Colleague at Deltek",
      img: `${Jadon}`,
      icon: 
        "https://cdn.freelogovectors.net/wp-content/uploads/2018/03/deltek_logo.png",
      alt:
        "Deltek",
      desc: 
        `"I had the pleasure of working with Brandon for almost 2 years. Brandon was consistently one of the most prepared and introspective professionals I've worked with. His organization allowed him to be prepared for nearly any situation that popped up in the day-to-day and he went the extra mile to understand prospects and their unique situations. Brandon is always looking to improve himself with personal development and ways to improve things internally and that spirit lifted others up as well. He truly cares and puts pride in his work doing all of the little things that make a huge difference at the end of the day. He would be a fantastic asset to anyone's team both personally and professionally."`,
      // featured: true,
    },
  ]

  return (
    <div 
    className="testimonial" 
    id="testimonial"
    style={{
      // opacity: `90%`,
      backgroundSize: `cover`,
      repeat: `no-repeat`,
      backgroundImage: `url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_1280.jpg")`
    }}>
      <h1>Testimonials<span>.</span></h1>
      <div className="container">
        {reviews.map((r) => (
          // <div className={r.featured ? "card featured" : "card"}>

          //   <div className="top">
          //     <img src={r.img} className="user" alt={r.alt}/>
          //     <img  src={r.icon} alt="" className="right"/>
          //   </div>
          //   <p>{r.relation}</p>
          //   <div className="center"> {r.desc}</div>
          //   <div className="bottom">
          //     <h3>{r.name}</h3>
          //     <h5>Current: {r.title}</h5>
          //   </div>
          // </div>

          <Card style={{ 
            width: '22rem',
            height: `95%`,
            borderRadius: `10%`,
            padding: `10px 10px 5px 10px`,
            margin: `10px 10px 0px 10px`,
          }}>
          <Card.Img variant="top" src={r.img} alt={r.alt} styles={{
            borderRadius: `60%`
          }}/>
          <Card.Body>
            <Card.Text>
              {r.desc}
            </Card.Text>
            <Card.Title>{r.name}</Card.Title>
            <Card.Text>
              Current:<br/> {r.title}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </div>
      
    </div>
  )
}