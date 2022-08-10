/* eslint-disable max-len */
/* eslint-disable radix */
// import cards from '../../data/squirrels.json';
// import cards from '../../data/missing.json';
import cards from '../../data/kamigawa.json';
// import cards from '../../data/new-capenna-2.json';
import MtgCard from '../Card/MtgCard';

// const need = [12, 21, 33, 35, 37, 87, 96, 106, 127, 129, 142, 145, 153, 156, 166, 223, 224, 229, 231, 233, 251, 264, 274, 276, 293, 294, 297, 298, 299, 300, 301];

// const need = [15, 27, 172, 179, 190, 225];
// const need = [61, 307];
const setsToInclude = ['Neon Dynasty Commander', 'New Capenna Commander'];

const CardBuilder = () => {
  window.cards = cards;
  const cleaned = cards
    // .slice(175, 200)
    // .filter((card) => parseInt(card.Count) + parseInt(card['Foil count']) === 0)
    // .filter((card) => need.includes(card.Number))
    // .filter((card) => card.Type.includes('Planeswalker'))
    // .filter((card) => card['Maybeboard count'] === 0)
    // .filter((card) => setsToInclude.includes(card.Set))
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
