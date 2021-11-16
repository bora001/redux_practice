import React from "react";
import CounterPage from "./CounterPage";
import TodoPage from "./TodoPage";

function App() {
  return (
    <div>
      <CounterPage />
      <hr style={{ margin: "40px 0" }} />
      <TodoPage />
    </div>
  );
}
export default App;
