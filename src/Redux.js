import { createStore } from "redux";

// setting initial State

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);
