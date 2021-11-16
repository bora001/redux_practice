// setting initial State

const initialState = {
  text: [],
};

// reducer
export default function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT:
      console.log(action.text, "actiontext");
      return {
        text: [...state.text, action.text],
      };
    default:
      return state;
  }
}

//action.type
const SUBMIT = "SUBMIT";

// action

export function submit(input) {
  console.log("redux", input);
  return {
    type: SUBMIT,
    text: input,
  };
}
