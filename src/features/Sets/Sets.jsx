/* eslint-disable  */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useGetAllSetsQuery } from '../../api/scryfall/set.api';
import { updateSet } from '../../app/app.slice';
import './sets.scss';

const Sets = () => {
  const { data } = useGetAllSetsQuery();
  const dispatch = useDispatch();
  
  window.setData = data;
const [searchTerm, setSearchTerm] = useState('');
  // const blocks =  data?.reduce((acc, val) => {
  //     if (acc[val.block]) {
  //       acc[val.block].push(val);
  //     } else {
  //       acc[val.block] = [val];
  //     }
  //     return acc;
  //   }, {});

  const handleNav = (set) => {
    console.log('weeeeee')
    dispatch(updateSet(set))
  }

  console.log('data :>> ', data);
  return (
    <>
       <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

    <div className="setList">
    {/* {blocks?.map(block => block.block)} */}

    {
      Object.entries(data)
      .map( ([type, setList]) => {
        return (
          <div className="set-section">
            <h1>{type}</h1>
            { 
              setList.map((set) => {
                return (
                  <Link to={`${set.code}`} className="set" key={set.code}>
                    {set.code}
                  </Link>
                )
              }
      )}
          </div>
          ) 
        }
        )
      }
    {/* TYPE ONE SETUP */}
      {/* {data?.filter(set => {

        return set.code.toUpperCase().includes(searchTerm.toUpperCase()) || set.name.toUpperCase().includes(searchTerm.toUpperCase());
      })
      .map((set) => (
        <Link to={`${set.code}`} className="set" key={set.code} onClick={() => handleNav(set)}>
          <span className="set-name">
            <p>
              {set.name}
              </p>
          </span>
          :
          <span className="set-code">
            [
            {set.code}
            ]
          </span>
          
          <p>
                Block Code: {set.block_code} <br/>
                Block: {set.block} <br/>
                Parent: {set.parent_set_code} <br/>
                Type: {set.set_type}
              </p>
        </Link>
      ))} */}
      {/* END TYPE ONE */}
    </div>
    <Outlet />
    </>
  );
};
export default Sets;
