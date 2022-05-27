import "./Card.css";

import logo from "../../assets/magic_logo.svg"

const Card = ({card}) => {
  return (
    <div className="card">
      <img src={logo} alt="mtg logo" className="mtg-logo" />
     <h3>{card.name} ({card.number})</h3>
    </div>
  )
}
export default Card
