import ManaCost from '../Mana/ManaCost';

const ListCard = ({ card, set }) => {
  const collectorNum = card.collector_number.padStart(set.card_count.toString().length, '0');
  let frame;
  if (card.frame_effects) {
    frame = card.frame_effects?.filter((effect) => effect !== 'legendary').sort().join('-').replace('extendedart', 'extended art');
  }

  const rarity = card.rarity[0].toUpperCase();
  return (
    <div className="list-card">
      <span className="own-box">
        <input type="checkbox" name="own" id="own" />
      </span>

      <span className={`rarity ${rarity}`}>
        {/* {rarity} */}
      </span>

      <span className="collector-num">
        {` [${collectorNum}] `}

      </span>

      <span className="card--name">
        {card.name}
      </span>

      <span className="mana-cost">
        <ManaCost manaCost={card.mana_cost} />
      </span>
      {' '}

      {frame
      && (
        <span className="frame-effects">
          {` (${frame}) `}
        </span>
      )}

    </div>
    // <tr>
    //   <td>[ ]</td>
    //   <td>{`[${collectorNum}]`}</td>

  //   <td>{card.name}</td>

  //   <td>{card.rarity[0].toUpperCase()}</td>
  // </tr>
  );
};
export default ListCard;
