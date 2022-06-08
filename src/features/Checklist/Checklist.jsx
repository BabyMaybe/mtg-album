import { useGetAllCardsInSetQuery } from '../../api/scryfall/card.api';
import ListCard from './ListCard';
import './Checklist.scss';

const Checklist = ({ setCode, main }) => {
  // console.log('checklist :>> ');
  console.log('setCode :>> ', setCode);
  const { data, isLoading, error } = useGetAllCardsInSetQuery(setCode);

  // console.log('data :>> ', data);
  // console.log('isLoading :>> ', isLoading);
  // console.log('error :>> ', error);

  if (isLoading) return <h1>Loading...</h1>;

  const { cards, set } = data;
  // console.log('cards :>> ', cards);
  // console.log('set :>> ', set);
  const start = main ? 0 : set.printed_size;
  const end = main ? set.printed_size : set.card_count;

  return (
    <div className="checklist">
      {/* <table>
        <thead>
          <tr>
            <th>Own</th>
            <th>Number</th>
            <th>Name</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody> */}

      {cards.slice(start, end).map((card) => <ListCard card={card} set={set} />)}
      {/* </tbody>
      </table> */}
    </div>
  );
};
export default Checklist;
