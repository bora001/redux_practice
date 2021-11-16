// setting initial State

const initialState = {
  counter: 0,
};

// reducer
export default function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case MINUS:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//action.type

const PLUS = "PLUS";
const MINUS = "MINUS";

// action
export function plus() {
  return {
    type: PLUS,
  };
}
export function minus() {
  return {
    type: MINUS,
  };
}
