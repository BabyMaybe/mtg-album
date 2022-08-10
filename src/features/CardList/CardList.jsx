const CardList = ({ data }) => {
  if (!data) return null;
  console.log('data', data);
  const { data: cards, not_found: notFound } = data;
  console.log('cards :>> ', cards);
  return (
    <div>
      <h2>Found</h2>
      <ul>
        {cards?.map((card) => (<li key={card.id}>{card.name}</li>))}
      </ul>
      <h2>Not Found</h2>
      <ul>
        {notFound?.map((card) => (<li key={card.name}>{card.name}</li>))}
      </ul>

    </div>
  );
};
export default CardList;
