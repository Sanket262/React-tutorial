import React, { useState } from 'react';

function USCompWithArray() {
  const [names, setNames] = useState(['sanket', 'ajay', 'pratik']);
  console.log('🌀 Component rendered:', names);

  const addName = () => {
    console.log('Before update:', names); // old value
    setNames([...names, 'vijay']);
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

export default USCompWithArray;
