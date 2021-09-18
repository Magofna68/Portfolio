import { ListItem } from "@material-ui/core";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"

export default function Portfolio() {

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

  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList title={item.title}/>
          ))}
        </ul>
        <div className="container">
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
          <div className="item">
            <img src="https://images.all-free-download.com/images/graphiclarge/apple_coffee_computer_cup_desk_diagram_drink_iphone_597609.jpg"
            alt="modern desk with coffee"></img>
            <h3>Modern App</h3>
          </div>
        </div>

    </div>
  )
}
