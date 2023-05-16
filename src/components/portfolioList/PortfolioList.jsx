import "./portfolioList.scss"

export default function PortfolioList({title, active, setSelected, id}) {
  return (
  <li
    className={active ? "portfolioList active" : "portfolioList"}
    // className={active ? "active glow-on-hover" : " glow-on-hover"}

    type="button"
    onClick={()=> setSelected(id)}
  >
    {title}
  </li> 
  );
}
