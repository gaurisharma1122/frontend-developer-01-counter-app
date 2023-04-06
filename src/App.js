import { useState } from "react";

function App() {

  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(0);

  const handleReset = () => {
    setNumber(0);
    setValue(0);
  };
  const handleIncrement = () => {
    setNumber(number + parseInt(value));
  };
  const handleDecrement = () => {
    setNumber(number - parseInt(value));
  };

  return (
    <div className="app">
      <h1 className={ number<0 ? 'negative' : 'positive' }>{number}</h1>
      <p>Enter a value by which increment/decrement should happen</p>
      <input type="text" placeholder="Enter a number" value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
