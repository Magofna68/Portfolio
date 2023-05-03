import React, { useState, useEffect } from 'react';
import "./works.scss"
import Arrow from "../../assets/arrow.png";
import Underground from '../../assets/UndergroundRoyalty.png';
import VALIDATE from '../../assets/VALIDATE.png';
import VALIDATEIcon from '../../assets/VALIDATEIcon.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Opine from '../../assets/Opine.png';
import OpineQuiz from '../../assets/OpineQuiz.png';
import Stripe from '../../assets/Stripe.png';
import OpineDash from '../../assets/OpineDash.png';
import CSV from '../../assets/CSV_Converter.png';
// import UGR from '../../assets/UGR_mobile.png';
import under100 from '../../assets/under100.png';
import Crown from '../../assets/Crown.png';
import UGR_Dash from '../../assets/UGR_Dash.png';
import UG_Details from '../../assets/UGR_Details.png';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [ activeImg, setActiveImg ] = useState(null)
  const [ activeId, setActiveId ] = useState(0);

  const data = [
    // {
    //   id: 0,
    //   title: "Capstone Project",
    //   icon: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/32/original/epicodus-ico.png",
    //   desc: "My final project at Epicodus: a 27 week coding bootcamp. This project was built with a React front end to promote and extend reach and accessibility for provided services.",
    //   img: [`${Capstone}`, , , ],
    //   alt: "Capstone project at Epicodus: website application",
    //   link: "https://magofna68.github.io/capstone/"
    // },
    {
      id: 0,
      title: 'Underground Royalty',
      icon: `${Crown}`,
      desc: 'This is a eCommerce clothing platform to imitate an online commercial shopping experience and later modified for dynamic viewing on mobile devices. Underground Royalty will provide the user with a fleshed out shopping experience, taking them from viewing products to payment processing.',
      img: [ `${UGR_Dash}`,`${Underground}`, `${under100}`, `${UG_Details}`],
      alt: 'Underground Royalty web based application',
      link: 'https://magofna68.github.io/eCommerce-front-end/'
    },
    {
      id: 1,
      title: "Opine, LLC",
      icon: `${Opine}`,
      desc: "An anonymous quizzlet with studysets and flashcards built out with the WA school district in mind",
      img: [`${OpineQuiz}`, `${Stripe}`, `${CSV}`, `${OpineDash}`, ],
      alt: "Quizlet for WA school district",
      link: "https://magofna68.github.io/Martian-Proj/",
    },
    {
      id: 2,
      title: "VALIDATE, LLC",
      icon: `${VALIDATEIcon}`,
      desc: "Worked collaboratively in a dev team to further develop a React-based app from Alpha stage to Beta version. Improved UI experience, tested feature branches, and submitted pull requests",
      img: [`${VALIDATE}`, `${OpineQuiz}`, `${VALIDATE}`, `${VALIDATE}`,],
      alt: "VALIDATE; from Alpha to Beta",
      link: "https://www.linkedin.com/company/validateclub/about/",
    },
]
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2) : 
    setCurrentSlide(currentSlide<data.length -1 ? currentSlide +1 : 0);
  };

  const imgStyles = {
    padding: '0 .5rem 0 .5rem',
    maxHeight: '100px',
  }

  useEffect(()=> {
    setActiveId(currentSlide)
    setActiveImg(null)
  }, [currentSlide])

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
        {data.map((d, index) => (
          <Container key={d.id} onClick={() => setActiveId(d.id)}>
            <div 
              className="item"
              style={{
                transform: `rotateY(180deg)`,
                backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/gtkekaDHpknr4beyGmbtCo-1200-80.png")`,
              }}
              >
              {/* {console.log("index: ", index)}
              {console.log("data: ", d)}
              {console.log("Data[index]: ", d[index])} */}

              <Col lg={4} md={4} s={4}>
                <Row>
                  <div className="worksLogo">
                    <div className="iconContainer">
                      <img src={data[index]?.icon} alt="" height="auto" width="100%" />
                    </div>
                    <h2>{data[index]?.title}</h2>
                    <a target="_blank"  rel="noreferrer" href={data[index]?.link}>Check it out here</a>
                  </div>
                </Row>
                <br/>
                <Row>
                  <div className="textContainer">
                    <p id="cardDesc">{data[index]?.desc}</p>
                  </div>
                </Row>
              </Col>
              <Col>
              <div className="worksImages">
                {console.log("activeId ", activeId)}
                {console.log("activeImg ", activeImg)}

                <img 
                  src={
                    activeId === d.id 
                    ? activeImg || d.img[0]
                    : d.img[0]
                  } 
                  alt={d.alt}
                  width="100%"
                  height="auto"
                />
                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '1rem',
                    justifyContent: 'center',
                  }}
                >
                   <span
                    style={imgStyles}
                    onClick={() =>
                      setActiveImg(activeId === d.id ? d.img[0] : null)
                    }
                  >
                    <img src={d.img[0]} alt="test" width="100px" height="100%"/>
                  </span>
                  <span
                    style={imgStyles}
                    onClick={() =>
                      setActiveImg(activeId === d.id ? d.img[1] : null)
                    }
                  >
                    <img src={d.img[1]} alt="test" width="100px" height="100%"/>
                  </span>
                  <span
                    style={imgStyles}
                    onClick={() =>
                      setActiveImg(activeId === d.id ? d.img[2] : null)
                    }
                  >
                    <img src={d.img[2]} alt="test" width="100px" height="100%"/>
                  </span>
                  <span
                    style={imgStyles}
                    onClick={() =>
                      setActiveImg(activeId === d.id ? d.img[3] : null)
                    }
                  >
                    <img src={d.img[3]} alt="test" width="100px" height="100%" />
                  </span>
                  {/* <span style={imgStyles} onClick={() => setActiveImg(data)}>
                    <img src={data[index]?.img[1]} alt="test" width="100px" />
                  </span>
                  <span style={imgStyles} onClick={() => setActiveImg(data[index]?.img[2])}>
                    <img src={data[index]?.img[2]} alt="test" width="100px" />
                  </span>
                  <span style={imgStyles} onClick={() => setActiveImg(data[index]?.img[3])}>
                    <img src={data[index]?.img[3]} alt="test" width="100px" />
                  </span> */}
                </div>
              </Col>
              {/* <div className='mobileContainer'>
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
              </div> */}
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
