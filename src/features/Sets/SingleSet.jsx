/* eslint-disable jsx-a11y/alt-text */
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useGetCardsInSetQuery } from '../../api/scryfall/card.api';
import { useGetSetByCodeQuery } from '../../api/scryfall/set.api';
import { selectSet } from '../../app/app.slice';

const SingleSet = () => {
  const params = useParams();
  const { data: setData } = useGetSetByCodeQuery(params.setId);
  const { data: setCards } = useGetCardsInSetQuery(params.setId);
  console.log('data :>> ', setData);
  console.log('setCards :>> ', setCards);
  if (!setData) return null;

  return (
    <div className="set">
      <h1>
        [
        {setData.code.toUpperCase()}
        ]
        {' '}
        {setData.name}
      </h1>
      <h3>
        (
        {setData.released_at}
        )
      </h3>
      <h2>{`Cards: ${setData.card_count}`}</h2>
      <img className="svg" src={setData.icon_svg_uri} alt="" />
      <Link to="..">Meow</Link>
    </div>

  );
};
export default SingleSet;
