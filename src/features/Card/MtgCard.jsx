/* eslint-disable no-unused-expressions */
import {
  useGetCardByNameQuery,
  useGetSetByCodeQuery,
  useGetCardByTcgIdQuery,
  useGetCardByCardmarketIdQuery,
} from '../../api/scryfall.api';
import logo from '../../assets/magic_logo.svg';
import ManaCost from '../Mana/ManaCost';
import './MtgCard.css';
import RulesText from './RulesText';

const MtgCard = ({ card }) => {
  const {
    data: cardData,
    cardError,
    isLoading: cardLoading,
  } = useGetCardByCardmarketIdQuery(card['Cardmarket ID']);
  const {
    data: setData,
    error: setError,
    isLoading: setLoading,
  } = useGetSetByCodeQuery(cardData?.set ?? '');

  if (cardLoading) {
    return (
      <div className="card">
        Loading
      </div>
    );
  }

  const displayCard = cardData.card_faces ? cardData.card_faces[0] : cardData;

  return (
    <div className="mtg-card">

      {/* Header */}
      <div className="mtg-card-header">
        <h1 className="card-name">
          {displayCard.name}
        </h1>
        {displayCard.mana_cost
        && (<ManaCost manaCost={displayCard.mana_cost} />)}
      </div>

      {/* Image */}
      <div className="card-image">
        <img src={logo} alt="mtg logo" className="mtg-logo" />
      </div>

      {/* Type Line and Set Symbol */}
      <h2 className="card-type">
        {displayCard.type_line}
        <img className="set-icon" src={setData?.icon_svg_uri} alt="" />
      </h2>

      {/* Text and Flavor */}
      <div className="card-text">
        <RulesText rules={displayCard.oracle_text} flavor={displayCard.flavor_text} />
      </div>

      {/* Card Info */}
      <div className="footer">
        {setData && (
          <div className="set-info">
            {cardData.collector_number}
            /
            {setData.card_count}
            {' '}
            {cardData.rarity[0].toUpperCase()}
            {' - '}
            {cardData.set.toUpperCase()}
            {' - '}
            {displayCard.artist}
          </div>
        )}
      </div>

      {/* Power and Toughness */}
      {displayCard.power && (
      <div className="card-stats">
        <span className="card-power">{displayCard.power}</span>
        /
        <span className="card-toughness">{displayCard.toughness}</span>
      </div>
      )}
    </div>
  );
};

export default MtgCard;
