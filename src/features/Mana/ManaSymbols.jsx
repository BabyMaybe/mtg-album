import { useGetAllSymbolsQuery } from '../../api/scryfall.api';

const ManaSymbols = ({ manaCost }) => {
  const { data: allSymbols, isLoading } = useGetAllSymbolsQuery();

  if (isLoading || !manaCost) return <p>loading...</p>;
  const symbols = manaCost.replaceAll('}{', '},{').split(',');

  return (
    <div className="mana-cost">
      {symbols.map((s, id) => {
        const key = `${s}-${id}`;
        const symbol = allSymbols[s];
        return <img src={symbol.url} alt={s} key={key} className="mana-symbol" />;
      })}
    </div>
  );
};

// { symbols && Object.keys(symbols)?.map((symbol) => (

export default ManaSymbols;
