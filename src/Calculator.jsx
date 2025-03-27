import { useState } from "react";
import { evaluate } from "mathjs";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  console.log('input', input);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => setInput("0");

  const handleCalculate = () => {
    try {
      setInput( evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'C', '+'].map((char) => (
          <button key={char} onClick={() => (char === "C" ? handleClear() : handleClick(char))}>
            {char}
          </button>
        ))}
        <button onClick={handleCalculate} className="Equal">=</button>
      </div>
    </div>
  );
}

export default Calculator;
