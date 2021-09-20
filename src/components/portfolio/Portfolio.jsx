import { ListItem } from "@material-ui/core";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import React, {useState, useEffect} from 'react';
import { featuredPortfolio } from "../data" ;

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState();

  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "branding",
      title: "Branding",
    },
    {
      id: "design",
      title: "Design",
    },
 ];

 useEffect(() => {
    switch(selected){
      case "featured": 
        setData(featuredPortfolio);
        break;
      case "mobile": 
        setData(featuredPortfolio);
        break;
      case "web": 
        setData(featuredPortfolio);
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
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
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
            alt="modern desk with coffee"></img>
            <h3>{d.title}</h3>
          </div>
          ))}
        </div>
    </div>
  );
}
