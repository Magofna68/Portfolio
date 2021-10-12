import "./works.scss"
// import {ArrowForwardIosIcon, ArrowBackIosIconNew} from '@material-ui/icons'
import Arrow from "../../assets/arrow.png";
import Desk from "../../assets/desk.jpeg";
import capstone from "../../assets/capstone.png"
// import Skyscrapers from "portfolio/src/assets/skyscrapers.jpeg";
import Skyscrapers from "../../assets/skyscrapers.jpeg";

import React, {useState, useEffect} from 'react';




export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [

    {
      id: "2",
      title: "two",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, optio labore? Cupiditate.",
      img: {capstone},
    },
    {
      id: "3",
      title: "Frantic",
      icon: "https://cdn.mos.cms.futurecdn.net/izXa9hiiSTbnNtwSp2ixKC.jpg",
      desc: "Loadipisicing elit. Libero, optio labore? Cu dolor sit amet consectetur adipisicing elit. Libero, optio labore? Cupiditate.",
      img: "http://imgs.abduzeedo.com/files/articles/beautiful-3d-nature-scenes/1229926_large.jpg",
    },
    {
      id: "1",
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
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  {/* <h2>Title</h2> */}

                  <p>{d.desc}</p>
                  <span>Projects</span>
                  <ul>
                    <li>one</li>
                    <li>two</li>
                  </ul>
                </div>
              </div>
                <div className="right">
                  <img 
                    src={d.img} 
                    // src="https://thumbs.dreamstime.com/b/agile-software-development-business-internet-techology-concept-100573268.jpg"
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
