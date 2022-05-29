import React from 'react';
import { useGetRandomCardQuery } from './api/scryfall.api';
import './App.css';
import CardBuilder from './features/cardBuilder/CardBuilder';
import ManaSymbol from './features/Mana/ManaSymbols';

const App = () => {
  console.log('app');
  return (
    <div className="App">
      {/* <ManaSymbol manaCost="{W}{B}{B}{R}{G}" /> */}
      <CardBuilder />
    </div>
  );
};

export default App;
