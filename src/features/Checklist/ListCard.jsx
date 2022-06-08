const ListCard = ({ card, set }) => {
  // meow
  const x = 0;

  const collectorNum = card.collector_number.padStart(set.card_count.toString().length, '0');
  let frame;
  if (card.frame_effects) {
    frame = card.frame_effects?.filter((effect) => effect !== 'legendary').sort().join('-').replace('extendedart', 'extended art');
  }

  return (
    <div className="list-card">
      <span className="own-box">
        <input type="checkbox" name="own" id="own" />
      </span>

      <span className="collector-num">
        {` [${collectorNum} `}
      </span>

      <span className="rarity">

        {card.rarity[0].toUpperCase()}
        ]
      </span>
      {' '}
      <span className="card--name">
        {card.name}
      </span>

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
