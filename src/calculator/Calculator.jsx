import { useEffect, useState } from "react";
import "./calculator.css";
function Calculator() {
  const [state, updateState] = useState(""); //setState
  // update input state
  const handleClick = (e) => {
    updateState(state.concat(e.target.name));
  };
  // clear input state
  const handleClear = () => {
    updateState("");
  };
  // backspace input state
  const handleBackspace = () => {
    updateState(state.slice(0, state.length - 1));
  };
  const handleCalculation = () => {
    try {
      updateState(eval(state).toString());
    } catch (err) {
      updateState("");
      alert("fwsdhegduHASKX");
    }
  };
  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={state} />
        </form>
        <div className="keys">
          <button className="highlight" onClick={handleClear} id="clear">
            Clear
          </button>
          <button
            className="highlight"
            onClick={handleBackspace}
            id="backspace"
          >
            C
          </button>
          <button className="highlight" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={handleCalculation} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
