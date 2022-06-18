/* eslint-disable jsx-a11y/alt-text */
import { Link, useParams } from 'react-router-dom';
import { useGetSetByCodeQuery } from '../../api/scryfall/set.api';
import Checklist from '../Checklist/Checklist';
import './SingleSet.scss';

const SingleSet = () => {
  const { setId } = useParams();
  const { data, error, isLoading } = useGetSetByCodeQuery(setId);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="single-set">
      <div className="single-set-header">
        <div className="set-icon">

          <img src={data.icon_svg_uri} alt="" />
          <span className="set-code">
            {`[${data.code.toUpperCase()}]`}
          </span>
        </div>
        <h1>
          {' '}
          {data.name}
        </h1>
        <div className="set-stats">
          <h2>{`Cards: ${data.card_count}`}</h2>
          <h3>
            (
            {data.released_at}
            )
          </h3>
        </div>
      </div>
      <ul>
        <li>Checklist</li>
        <li>Placeholders</li>
        <li>Collection</li>
      </ul>
      <Link to="..">Meow</Link>
      <h1>Main Set</h1>
      <Checklist setCode={setId} main />
      <h1>Collectors</h1>
      <Checklist setCode={setId} />
    </div>

  );
};
export default SingleSet;
