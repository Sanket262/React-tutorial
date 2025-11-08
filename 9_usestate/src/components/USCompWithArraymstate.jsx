/*

  🌀 First render — initial state.

✅ You clicked button — all three setNames() called.

⚠️ Inside same event → React batched them.

React applied only one render at the end (after event finished).

👀 Only last update ('vishal') won — because all 3 used same old state.


You called 3 updates.

React does not immediately re-render after each one.

It collects all 3 (this is batching).

At the end of the event, React re-renders only once.

All 3 updates used the same old value of names.
So only the last one (["sanket", "ajay", "pratik", "vishal"]) survives.



The last update overwrites the previous two.
*/

/*
this below code has a probelm bcs of all 3 pfates uses same old value of names

import React, { useState } from 'react';
function USCompWithArraymstate() {
  const [names, setNames] = useState(['sanket', 'ajay', 'pratik']);
  console.log('🌀 Component rendered:', names);

  const addName = () => {
    
    console.log('Before update:', names); // old value
    setNames([...names, 'vijay']);
    setNames([...names,"anshul"])
    setNames([...names,"vishal"])
    console.log('After update (still old):', names); // old value (not updated yet!)
  };

  return (
    <div>
      <h2>Names List</h2>
      <button onClick={addName}>Add Vijay</button>
      <ul>
        {names.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}

export default USCompWithArraymstate;

*/

//Solution — Use Functional Update (with prev)
//ensures that every state update is based on the latest version
//next state depends on the previous one.
import React, { useState } from 'react';
function USCompWithArraymstate() {
  const [names, setNames] = useState(['sanket', 'ajay', 'pratik']);
  console.log('🌀 Component rendered:', names);

  const addName = () => {
    console.log('Before update:', names); // old value
    setNames(prev=>[...prev, 'vijay']);
    setNames(prev=>[...prev,"anshul"])
    setNames(prev=>[...prev,"vishal"])
    console.log('After update (still old):', names); // old value (not updated yet!)
  };

  return (
    <div>
      <h2>Names List</h2>
      <button onClick={addName}>Add Vijay</button>
      <ul>
        {names.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </div>
  );
}

export default USCompWithArraymstate;