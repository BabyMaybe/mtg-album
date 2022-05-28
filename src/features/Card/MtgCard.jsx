/* eslint-disable no-unused-expressions */
import { useGetCardByNameQuery, useGetSetByCodeQuery } from '../../api/scryfall.api';
import logo from '../../assets/magic_logo.svg';
import './MtgCard.css';

const MtgCard = ({ card }) => {
  console.log('card :>> ', card);
  const {
    data: cardData,
    cardError,
    isLoading: cardLoading,
  } = useGetCardByNameQuery(card.Name);
  const {
    data: setData,
    error: setError,
    isLoading: setLoading,
  } = useGetSetByCodeQuery(cardData?.set);
  cardData && console.log(`card Data :>> ${card.Name}`, cardData);
  setData && console.log('setData :>> ', setData);
  if (cardLoading) {
    return (
      <div className="card">
        Loading
      </div>
    );
  }

  return (
    <div className="mtg-card">

      <div className="header">
        <h1 className="card-name">
          {cardData.name}
          <span className="mana-cost">{cardData.mana_cost}</span>
        </h1>

      </div>

      <div className="card-image">
        <img src={logo} alt="mtg logo" className="mtg-logo" />
      </div>

      <h2 className="card-type">
        {cardData.type_line}
        <img className="set-icon" src="https://c2.scryfall.com/file/scryfall-symbols/sets/neo.svg?1653278400" alt="" />

      </h2>

      <div className="card-text">

        <p className="card-body">{cardData.oracle_text}</p>
        {cardData.flavor_text
          && (
          <>
            <hr />
            <p className="card-flavor">{cardData.flavor_text}</p>
          </>
          )}
      </div>

      <div className="footer">
        {setData && (
          <div className="set-info">
            {cardData.set.toUpperCase()}
            {' '}
            {cardData.collector_number}
            /
            {setData.card_count}
            {' '}
            {cardData.rarity[0].toUpperCase()}
          </div>
        )}
        {cardData.power && (

        <div className="card-stats">
          <span className="card-power">{cardData.power}</span>
          /
          <span className="card-toughness">{cardData.toughness}</span>
        </div>

        )}
      </div>
    </div>
  );
};

export default MtgCard;
