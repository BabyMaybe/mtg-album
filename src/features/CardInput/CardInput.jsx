/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useGetCollectionMutation } from '../../api/scryfall/card.api';
import CardList from '../CardList/CardList';
import './CardInput.scss';

const CardInput = () => {
  const [cardNames, setCardNames] = useState('1 Sol Ring\n1 Lightning Bolt');
  const [getCollection, { isLoading, data: cardList, error }] = useGetCollectionMutation();
  const handleChange = (e) => {
    setCardNames(e.target.value);
  };

  const handleSubmit = (e) => {
    const cards = cardNames.split('\n').map((card) => {
      const parts = card.split(/(\d+)/).filter(Boolean);
      console.log('parts :>> ', parts);
      const cardObject = {
        count: parts[0],
        name: parts[1].trim(),
      };
      return cardObject;
    });
    getCollection(cards);
  };

  console.group('lookup');
  isLoading && console.log('Loading');
  cardList && console.log('data :>> ', cardList);
  error && console.log('error :>> ', error);
  console.groupEnd();

  return (
    <div className="card-input">
      <h1>Input Cards</h1>
      <label htmlFor="card-list" className="input-field">
        <h3>Enter Card Names</h3>
        <textarea id="card-list" cols={50} rows={30} value={cardNames} onChange={handleChange} />

      </label>
      <button type="submit" onClick={handleSubmit}> submit </button>
      <CardList data={cardList} />
    </div>

  );
};

export default CardInput;
