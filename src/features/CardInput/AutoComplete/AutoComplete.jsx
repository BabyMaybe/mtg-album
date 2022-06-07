/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useAutoCompleteQuery } from '../../../api/scryfall/card.api';
import Suggestions from './Suggestions';
import './autocomplete.scss';

const AutoComplete = () => {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState('');
  const { data, isLoading, error } = useAutoCompleteQuery(input);
  console.log('selected :>> ', selected);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="autocomplete">
      <input value={input} onChange={handleChange} />
      <Suggestions data={data?.data} onClick={setSelected} />
    </div>
  );
};

export default AutoComplete;
