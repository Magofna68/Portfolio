import React, {useState, useEffect} from 'react';
import "./works.scss"
import Arrow from "../../assets/arrow.png";
// import Desk from "../../assets/desk.jpeg";
import Capstone from "../../assets/capstone.png";
import Martian from '../../assets/Martian.png';


export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [

    {
      id: "1",
      title: "Capstone Project @ Epicodus",
      icon: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/32/original/epicodus-ico.png",
      desc: "My final project at Epicodus: built for marketing purposes to extend reach and accessibility for potential clientele.",
      img: `${Capstone}`,
    },
    {
      id: "2",
      title: "Martian-Project",
      icon: "https://icon-library.com/images/nasa-icon/nasa-icon-10.jpg",
      desc: "A collaborative project focused around API's: features photos, info, and a video on the Mars landing from NASA.",
      img: `${Martian}`,
    },
    {
      id: "3",
      title: "yes",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      desc: "Lorem adipisicing elit. Libero, optio labore? Cupiditateipsum dolor sit amet ",
      img: "https://assets.weforum.org/article/image/ti3O0eGP60ScE_PpvYwtIYMd3us18yFd3HQqFw-k8rk.jpg",
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
                  </div>
                  {/* <span>Projects</span>
                  <ul>
                    <li>one</li>
                    <li>two</li>
                  </ul> */}
                </div>
              </div>
                <div className="right">
                  <img 
                    src={d.img} 
                    alt=""
                    className="sliderImage"
                  />
                </div>
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
