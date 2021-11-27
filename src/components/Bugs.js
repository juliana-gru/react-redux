import React, { useEffect, useContext, useState } from 'react';
import StoreContext from '../contexts/storeContext';
import { loadBugs }from '../store/bugs';

function Bugs() {
  const store = useContext(StoreContext);
  const [ bugs, setBugs ] = useState([]);


  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (bugs !== bugsInStore) 
        setBugs(bugsInStore);
    });

    store.dispatch(loadBugs());

    return unsubscribe;
  }, [store]);

  return ( 
    <ul>{bugs.map(bug => 
      <li key={bugs.id}>{bug.description}</li>
    )}</ul>
   );
}

export default Bugs;