import React from 'react';
import { useGetAllSymbolsQuery, useGetRandomCardQuery } from './api/scryfall.api';
import './App.css';
import CardBuilder from './features/cardBuilder/CardBuilder';

const App = () => {
  // const {data } = useGetRandomCardQuery();
  const { data: symbols } = useGetAllSymbolsQuery();
  console.log('symbols', symbols);
  // console.log(data)
  return (
    <div className="App">

      <div className="symbol-list">

        {symbols && Object.keys(symbols)?.map((symbol) => (
          <div className="symbol-box">
            <span className="symbol-name">
              {symbols[symbol].english}
            </span>
            <img src={symbols[symbol].url} alt="" className="symbol" />
          </div>
        ))}
        {/* <CardBuilder /> */}
      </div>
    </div>
  );
};

export default App;
