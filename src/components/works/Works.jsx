import React, { useState } from 'react';
import "./works.scss"
import Arrow from "../../assets/arrow.png";
import Capstone from "../../assets/capstone.png";
import Martian from '../../assets/Martian.png';
import VALIDATE from '../../assets/VALIDATE.png';
import VALIDATEIcon from '../../assets/VALIDATEIcon.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Opine from '../../assets/Opine.png';
import OpineQuiz from '../../assets/OpineQuiz.png';

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
      title: "Opine, LLC",
      icon: `${Opine}`,
      desc: "An anonymous quizzlet with studysets and flashcards built out with the WA school district in mind",
      img: `${OpineQuiz}`,
      alt: "Quizlet for WA school district",
      link: "https://magofna68.github.io/Martian-Proj/",
    },
    {
      id: "3",
      title: "VALIDATE, LLC",
      icon: `${VALIDATEIcon}`,
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
          <Container>
            <div 
              className="item"
              style={{
                transform: `rotateY(180deg)`,
                backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/gtkekaDHpknr4beyGmbtCo-1200-80.png")`,
            }}
            >
              <Col lg={4} md={4} s={4}>
                <Row>
                  <div className="worksLogo">
                    <div className="iconContainer">
                      <img src={d.icon} alt="" height="auto" width="100%" />
                    </div>
                    <h2>{d.title}</h2>
                    <a target="_blank"  rel="noreferrer" href={d.link}>Check it out here</a>
                  </div>
                </Row>
                <br/>
                <Row>
                  <div className="textContainer">
                    <p id="cardDesc">{d.desc}</p>
                  </div>
                </Row>
              </Col>
              <Col>
              <div className="worksImages">
                <img 
                  src={d.img} 
                  alt={d.alt}
                  width="100%"
                  height="auto"
                />
                </div>
              </Col>
              <div className='mobileContainer'>
                <Col>
                  <Row>
                    <div className='mobileImgContain'>
                      <img 
                        src={d.img} 
                        alt={d.alt}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <h5 id="mobileTitle">{d.title}</h5>
                  </Row>
                  <Row>
                  <p id="mobileDesc">{d.desc}</p>
                  <br/>
                  <a target="_blank" rel="noreferrer" href={d.link}>Check it out here</a>
                  </Row>
                </Col>
              </div>
              <br/>
            </div>
            </Container>
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
