import React from "react";
import "../App.css";
const Counter = () => {
 const [counter,setCounter]=React.useState(1)
 const handleIncrement=(value)=>{
                     setCounter(counter+value)
 }
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement(1)}>Add</button>
      <button onClick={() => handleIncrement(-1)}>Reduce</button>
    </div>
  );
};

export default Counter;
