import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import React, {useState, useEffect} from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Card, Button } from 'react-bootstrap/';

import { featuredPortfolio, featuredReact, featuredC } from "../../components/data" ;

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);

  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "c",
      title: "C#",
    }
  ];
  
  useEffect(() => {
    switch(selected){
      case "featured": 
      setData(featuredPortfolio);
      break;
      case "react": 
      setData(featuredReact);
      break;
      case "c": 
      setData(featuredC);
      break;
      default:
        setData(featuredPortfolio);
      }
    }, [selected])

  return (
    <div  
      id="portfolio"
      style={{
        opacity: `90%`,
        backgroundSize: `cover`,
        repeat: `no-repeat`,
        backgroundImage: `url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_1280.jpg")`
      }}
    >
        <span className="portfolioHeader"><h1>Portfolio<span>.</span></h1></span>
        {/* <br/> */}
        <ul className="portfolioCategory">
          {list.map((item) => (
            <PortfolioList 
              title={item.title} 
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
        <div className="container">
          <>
          {data.map((d) => (
            <Card class="img-responsive portfolioCard">
              <Card.Img 
                variant="top"
                src={d.img}
                alt={d.alt} 
                width="100%"
                height="100%"
                />
              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted portfolioSubtitle">{d.subtitle}</Card.Subtitle>
                <span className="cardButtonContainer">
                  <a href={d.link} rel="noreferrer" target="_blank"><Button>View Project</Button></a>
                  <a href={d.link2} rel="noreferrer" target="_blank"><Button variant="success">View Code</Button></a>
                </span>
              </Card.Body>
              </Card>
          ))}
          </>
          </div>
          <div className="portfolioTextContainer">
            <p className="portfolioText">
              Epicodus has provided over 250 hours of experience, and nearly 20 projects in C#/.Net, Javascript, & React.<br/>
              The above projects are a few of those.
            </p>
          </div>   
    </div>
  );
}
