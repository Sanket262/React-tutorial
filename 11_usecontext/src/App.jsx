import React, { createContext } from 'react'
import CompA from './components/CompA'
import './App.css'

// ✅ Step 1: Create context (outside component)
export const NameContext = createContext();

function App() {
  return (
    <>
      {/* ✅ Step 2: Provide the context value */}
      <NameContext.Provider value="Sanket">
        <CompA />
      </NameContext.Provider>
    </>
  );
}

export default App;
