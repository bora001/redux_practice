import React, { useState } from "react";
import { createStore } from "redux";

function App() {
  const [reduxState, setreduxState] = useState({ title: "react" });

  function appReducer(state = {}, action) {
    switch (action.type) {
      case "select":
        const newState = { ...state, ...action };
        return newState;

      default:
        return state;
    }
  }

  function getName(event) {
    event.preventDefault();
    store.dispatch({ type: "select", title: event.target.innerHTML });
  }

  const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(() => setreduxState(store.getState()));

  console.log("get", reduxState);

  return (
    <div>
      <h1>REDUX Practice</h1>
      <p>This is Redux practice</p>
      <ul>
        <li>
          <a href="/" onClick={getName}>
            React
          </a>
        </li>
        <li>
          <a href="/" onClick={getName}>
            Redux
          </a>
        </li>
      </ul>

      <div className="btn_box">
        <button>Create</button>
        <button>Delete</button>
      </div>

      <div className="txt_box">
        <h2>{reduxState.title}</h2>
        <p>This is about {reduxState.title}</p>
      </div>
    </div>
  );
}

export default App;
