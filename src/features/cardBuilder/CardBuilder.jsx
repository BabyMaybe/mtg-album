import cards from "../../data/missing.json";
import Card from "../Card/Card";


const CardBuilder = () => {
  window.cards = cards;
  const cleaned = 
  cards
  .filter(card => parseInt(card.Count) + parseInt(card['Foil count']) + parseInt(card['Special foil count'])
  === 0)
  .map(card => {
    return {
      name: card.Name,
      number: card.Number,
    }
  })

  const pageArray = [];
  for (let i=0; i<cleaned.length; i+=9) {
    pageArray.push(cleaned.slice(i, i+9));
  }
  console.log('pageArray', pageArray)
  

  console.log('cards :>> ', cleaned);
  return (
    <>
    {pageArray.map(page => {
      console.log('page :>> ', page);
      return (
    <div className="page">
      {page.map(card => (
        
        <Card key={card.name + card.number} card={card} />
        
        ))}
    </div>
      )
    })}
        </>
  )
}
export default CardBuilder
