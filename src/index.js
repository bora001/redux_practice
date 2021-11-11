import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducer from "./Redux";
import { Provider } from "react-redux";

// store
const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(
  //Every component in App can able to get info from Redux by Provider

  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
