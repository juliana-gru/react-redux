import React, { useEffect, useContext, useState } from 'react';
import StoreContext from '../contexts/storeContext';

function Bugs() {
  const store = useContext(StoreContext);
  const [ bugs, setBugs ] = useState([]);


  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const bugsInStore = store.getState().entities.bugs.list;
      if (bugs !== bugsInStore) 
        setBugs(bugsInStore);
    });

    return unsubscribe;
  }, [store]);

  return ( 
    <div>Bugs</div>
   );
}

export default Bugs;