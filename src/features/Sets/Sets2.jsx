import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetAllSetsQuery } from '../../api/scryfall/set.api';
import { updateSet } from '../../app/app.slice';
import './sets2.scss';

const Sets2 = () => {
  const { data, isLoading } = useGetAllSetsQuery();
  const dispatch = useDispatch();

  window.setData = data;
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <h1>Loading...</h1>;

  console.log('data :>> ', data);
  return (
    <>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value.toUpperCase())} />
      <div className="sets2">
        {/* {blocks?.map(block => block.block)} */}

        {
      Object.entries(data)
        .map(([type, setList]) => (
          <>

            <h1>
              {type}
              {' '}
              [
              {setList.length}
              ]
            </h1>
            <div className="set-section" key={type}>
              {
              setList
                .filter((set) => set.code.toUpperCase().includes(searchTerm)
                || set.name.toUpperCase().includes(searchTerm))
                .map((set) => (
                  <Link to={`${set.code}`} className="set" key={set.code}>
                    [
                    {set.code}
                    ]
                    <br />
                    {' '}
                    {set.name}
                  </Link>
                ))
}
            </div>
          </>
        ))
      }
      </div>
    </>
  );
};
export default Sets2;
