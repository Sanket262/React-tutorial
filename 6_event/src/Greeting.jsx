import React from "react";

function Greeting({ name, handleClick }) {
  return (
    <div>
      <h2>Hello, {name ? name : "Guest"}!</h2>
      <button onClick={(e) => handleClick(name, e)}>
        Say Hello 👋
      </button>
    </div>
  );
}

export default Greeting;
