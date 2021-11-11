import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Redux";
import { createStore } from "redux";
import reducer from "./Redux";
// store
const store = createStore(reducer);
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById("root"));
