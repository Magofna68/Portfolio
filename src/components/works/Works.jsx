import React, {useState, useEffect} from 'react';
import "./works.scss"
import Arrow from "../../assets/arrow.png";
// import Desk from "../../assets/desk.jpeg";
import Capstone from "../../assets/capstone.png";
import Martian from '../../assets/Martian.png';
import VALIDATE from '../../assets/VALIDATE.png';


export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [

    {
      id: "1",
      title: "Capstone Project",
      icon: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/32/original/epicodus-ico.png",
      desc: "My final project at Epicodus: a 27 week coding bootcamp. This project was built with a React front end to promote and extend reach and accessibility for provided services.",
      img: `${Capstone}`,
      alt: "Capstone project at Epicodus: website application",
      link: "https://magofna68.github.io/capstone/"
    },
    {
      id: "2",
      title: "Martian-Project",
      icon: "https://icon-library.com/images/nasa-icon/nasa-icon-10.jpg",
      desc: "A collaborative dev-team project focused around APIs. Features numerous API calls for dynamic information updates, photos, and a video of the Mars landing from NASA in April 2021.",
      img: `${Martian}`,
      alt: "Nasa API collab project",
      link: "https://magofna68.github.io/Martian-Proj/",
    },
    {
      id: "3",
      title: "VALIDATE, LLC",
      icon: "https://media-exp1.licdn.com/dms/image/C4E0BAQGZYBwSEs2zUQ/company-logo_200_200/0/1565048189782?e=1642636800&v=beta&t=igVrMLRHrKjcCzn52VTSo3NjkbWTfxWqf9GV1HMi2cg",
      desc: "Worked collaboratively in a dev team to further develop a React-based app from Alpha stage to Beta version. Improved UI experience, tested feature branches, and submitted pull requests",
      img: `${VALIDATE}`,
      alt: "VALIDATE; from Alpha to Beta",
      link: "https://www.linkedin.com/company/validateclub/about/",
    },
]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);
  };
  return (
    <div 
    className="works" 
    id="works"
    style={{
      // opacity: `90%`,
      backgroundSize: `cover`,
      transform: `rotateY(180deg)`,
      repeat: `no-repeat`,
      backgroundImage: `url("https://i2.wp.com/files.123freevectors.com/wp-content/original/142906-cool-grey-wave-business-background-vector-art.jpg?w=800&q=95")`
    }}>
        <div 
        className="slider" 
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
        >
          {data.map((d) => (
            <div className="container">
              <div 
              className="item"
              style={{
                transform: `rotateY(180deg)`,
                backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/gtkekaDHpknr4beyGmbtCo-1200-80.png")`
              }}
              >
                <div className="left">
                  <div className="leftContainer">
                  <div className="iconContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <div className="descText">
                    <p>{d.desc}</p>
                    <br/>
                    <a target="_blank" href={d.link}>Check it out here</a>
                  </div>
                </div>
              </div>
                <div className="right">
                  <div className="worksImages">
                    <img 
                      src={d.img} 
                      alt={d.alt}
                      styles={{
                        width: "300px"
                      }}
                    />
                  </div>
                  <div className="mobile">
                    {d.desc}
                    <br/>
                    <br/>
                    <a target="_blank" href={d.link}>Check it out here</a>
                  </div>
                </div>
                <div className="imgPreview">
                  <img 
                    src={d.img} 
                    alt={d.alt}
                    // className="imgPreview"
                    style={{
                      width: "260px",
                      position: "absolute",
                      bottom: "1%",
                      right: "12%",
                      transition: "1.5s ease",
                      borderLeft: "solid 3px black",
                      borderRight: "solid 3px black",
                      borderBottom: "solid 3px",
                      borderColor: "gray",
                    }}
                    />
                  </div>
                  <br/>
              </div>
            </div>
          ))}
          </div>
          <img 
            className="arrow left"
            style={{
              color: "white",
            }}
            src={Arrow} 
            alt= "" onClick={()=> handleClick("left")}
          />
          <img 
            className="arrow right"
            src={Arrow} 
            alt="page right" onClick={()=> handleClick("right")}
            />
        </div>
  )
}
