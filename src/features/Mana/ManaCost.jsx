import ManaSymbol from './ManaSymbol';

const ManaCost = ({ manaCost }) => {
  const mana = manaCost.replaceAll('}{', '},{').split(',');

  return (
    <div className="mana-cost">
      {mana.map((m, id) => {
        const key = `${m}-${id}`;
        return <ManaSymbol mana={m} key={key} />;
      })}
    </div>
  );
};

export default ManaCost;
