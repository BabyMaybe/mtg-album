/* eslint-disable jsx-a11y/alt-text */
import { Link, useParams } from 'react-router-dom';
import { useGetSetByCodeQuery } from '../../api/scryfall/set.api';
import Checklist from '../Checklist/Checklist';

const SingleSet = () => {
  const { setId } = useParams();
  const { data, error, isLoading } = useGetSetByCodeQuery(setId);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="set">
      <h1>
        [
        {data.code.toUpperCase()}
        ]
        {' '}
        {data.name}
      </h1>
      <h3>
        (
        {data.released_at}
        )
      </h3>
      <h2>{`Cards: ${data.card_count}`}</h2>
      <img className="svg" src={data.icon_svg_uri} alt="" />
      <Link to="..">Meow</Link>
      <h1>Main Set</h1>
      <Checklist setCode={setId} main />
      <h1>Collectors</h1>
      <Checklist setCode={setId} />
    </div>

  );
};
export default SingleSet;
