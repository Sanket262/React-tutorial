import React, { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [name, setName] = useState("Sanket");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick(personName, e) {
    alert("Hello " + personName + " 👋");
    console.log("Event Type:", e.type); // check in console
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Greeting Card App 💌</h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <Greeting name={name} handleClick={handleClick} />
    </div>

);
}

export default App;
