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
    className="portfolio" 
    id="portfolio"
    style={{
      opacity: `90%`,
      backgroundSize: `cover`,
      repeat: `no-repeat`,
      backgroundImage: `url("https://cdn.pixabay.com/photo/2019/11/14/13/01/abstract-4626113_1280.jpg")`
    }}>
        <h1>Portfolio<span>.</span></h1>
        <br/>
        <ul>
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
            <Card class="img-responsive" style={{
              borderRadius: `10%`,
              padding: `10px 10px 5px 10px`,
              margin: `10px 10px 0px 10px`,
            }}>
              <Card.Img 
                variant="top"
                src={d.img}
                alt={d.alt} 
                />
              <Card.Body>
                <Card.Title>{d.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{d.subtitle}</Card.Subtitle>
                <a href={d.link} rel="noreferrer" target="_blank"><Button vaiant="danger">View Project</Button></a>
                <a href={d.link2} rel="noreferrer" target="_blank"><Button variant="success">View Code</Button></a>
              </Card.Body>
              </Card>
          ))}
          </>
          </div>   
        <p style={{
            fontWeight: `500`,
        }}>
             Epicodus has provided a framework of over 250 hours of experience, and nearly 20 projects in each of the following: C#/.Net, Javascript, & React.<br/>
             The above projects are a few of those.
        </p>
    </div>
  );
}
