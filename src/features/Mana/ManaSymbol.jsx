import { useGetAllSymbolsQuery } from '../../api/scryfall/symbols.api';

const ManaSymbol = ({ mana }) => {
  const { data: allSymbols, isLoading } = useGetAllSymbolsQuery();

  if (isLoading || !mana) return <p>loading...</p>;

  const symbol = allSymbols[mana];
  return (
    <img src={symbol.url} alt={symbol.name} className="mana-symbol" />
  );
};

export default ManaSymbol;
