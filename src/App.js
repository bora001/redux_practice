import React from "react";
import { plus, minus } from "./Redux";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // get redux state by useSelector
  const { number } = useSelector((state) => ({
    number: state.counter,
  }));

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "130px",
        }}
      >
        <button onClick={plus}>➕</button>
        <p>{number}</p>
        <button onClick={minus}>➖</button>
      </div>
    </div>
  );
}
export default App;
