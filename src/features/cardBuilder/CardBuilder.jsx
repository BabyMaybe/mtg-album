/* eslint-disable max-len */
/* eslint-disable radix */
import cards from '../../data/missing.json';
import Card from '../Card/Card';
import MtgCard from '../Card/MtgCard';

const CardBuilder = () => {
  window.cards = cards;
  const cleaned = cards
    // .filter((card) => parseInt(card.Count) + parseInt(card['Foil count']) + parseInt(card['Special foil count']) === 0)
    .filter((card) => card.Type === 'Enchantment - Saga')
    .map((card) => ({
      ...card,
      name: card.Name,
      number: card.Number,
      manaCost: card['Mana cost'],
    }));

  window.cleaned = cleaned;

  const pageArray = [];
  for (let i = 0; i < cleaned.length; i += 9) {
    pageArray.push(cleaned.slice(i, i + 9));
  }
  // console.log('pageArray', pageArray)

  // console.log('cards :>> ', cleaned);
  return (
    <>

      {pageArray.map((page) => (
        <div className="page" key={Math.random()}>
          {page.map((card) => (

            <MtgCard key={card.name + card.number} card={card} />

          ))}
        </div>
      ))}
    </>
  );
};
export default CardBuilder;
