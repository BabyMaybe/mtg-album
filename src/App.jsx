import './App.css';
import CardBuilder from './features/cardBuilder/CardBuilder';
import AutoComplete from './features/CardInput/AutoComplete/AutoComplete';
import CardInput from './features/CardInput/CardInput';

const App = () => {
  console.log('app');
  return (
    <div className="App">
      <CardInput />
      <AutoComplete />
    </div>
  );
};

export default App;
