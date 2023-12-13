import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function Increament() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [division, setDivision] = useState(0);
  const [addition, setAddition] = useState(0);
  const [subtraction, setSub] = useState(0);
  const [modulus, setModulus] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  useEffect(() => {
    setDivision(() => count / 2);
  }, [count]);

  useEffect(() => {
    setAddition(() => count + 2);
  }, [count]);

  useEffect(() => {
    setSub(() => count - 2);
  }, [count]);

  useEffect(() => {
    setModulus(() => count % 2);
  }, [count]);

  const decrement = () => {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  };

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          +
        </button>
        <button type="button" onClick={decrement}>
          -
        </button>
        <p>Calculation: {calculation}</p>
        <p>Division: {division}</p>
        <p>Addition: {addition}</p>
        <p>Subtraction: {subtraction}</p>
        <p>modulus: {modulus}</p>
      </div>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Increament />);
