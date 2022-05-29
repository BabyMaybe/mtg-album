import { useGetAllSymbolsQuery } from '../../api/scryfall.api';

const ManaSymbols = ({ manaCost }) => {
  const { data: allSymbols, isLoading } = useGetAllSymbolsQuery();
  // console.log('mana cost :>> ', manaCost);

  if (isLoading || !manaCost) return <h1>loading...</h1>;
  const symbols = manaCost.replaceAll('}{', '},{').split(',');
  // const symbolData = allSymbols[symbol];
  // console.log('symbolData :>> ', symbolData);
  // console.log('symbols :>> ', symbols);
  return (
    <>
      {symbols.map((s) => {
        // console.log('s :>> ', s);
        const symbol = allSymbols[s];
        // console.log('symbol :>> ', symbol);
        // console.log('url :>> ', symbol.url);
        return <img src={symbol.url} alt={s} className="mana-symbol" />;
      })}
    </>
  );
};

// { symbols && Object.keys(symbols)?.map((symbol) => (

export default ManaSymbols;
