import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  function increaseNumber(e) {
    e.stopPropagation();
    setNumber(number + 1);
    console.log(number);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increaseNumber}>Add</button>
    </div>
  );
};

export default Counter;
