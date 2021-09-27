import { ListItem } from "@material-ui/core";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import React, {useState, useEffect} from 'react';
import { featuredPortfolio, featuredWebApp } from "../data" ;

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState();

  const [data, setData] = useState([]);

  const list = [
    // potential list of different languages? C#/javascript/ect.
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "design",
      title: "Design",
    }
  ];
    
 useEffect(() => {
    switch(selected){
      case "featured": 
        setData(featuredPortfolio);
        break;
      // case "mobile": 
      //   setData(featuredMobile);
      //   break;
      case "web": 
        setData(featuredWebApp);
        break;
      case "branding": 
        setData(featuredPortfolio);
        break;
      case "featured": 
        setData(featuredPortfolio);
        break;
      case "design":
        setData(featuredPortfolio);
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
        <h1>Portfolio</h1>
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
          {data.map((d) => (
          <div className="item">
            <img src={d.img}
            alt={d.alt}></img>
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
    </div>
  );
}
