import React from "react";
import { plus, minus } from "./Redux";

function App() {
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
        <p>0</p>
        <button onClick={minus}>➖</button>
      </div>
    </div>
  );
}
export default App;
