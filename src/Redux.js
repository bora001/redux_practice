import { createStore } from "redux";

// setting initial State

const initialState = {
  counter: 0,
};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

//action.type

const PLUS = "PLUS";
const MINUS = "MINUS";

// action
function plus() {
  return {
    type: PLUS,
  };
}
function minus() {
  return {
    type: MINUS,
  };
}

// store
const store = createStore(reducer);
