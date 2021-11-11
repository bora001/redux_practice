import React from "react";
import { plus, minus } from "./Redux";
import { useSelector, useDispatch } from "react-redux";

function CounterPage() {
  // get redux state by useSelector
  const { number } = useSelector((state) => ({
    number: state.counter,
  }));

  const dispatch = useDispatch();
  const plusNumber = () => dispatch(plus());
  const minusNumber = () => dispatch(minus());

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "130px",
        }}
      >
        <button onClick={plusNumber}>➕</button>
        <p>{number}</p>
        <button onClick={minusNumber}>➖</button>
      </div>
    </div>
  );
}
export default CounterPage;
