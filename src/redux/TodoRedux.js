// reducer
export default function TodoReducer(state = [], action) {
  switch (action.type) {
    case SUBMIT:
      let newState = {
        id: action.id,
        text: action.text,
        isFinish: action.isFinish,
      };

      return [...state, newState];

    case ACTIVE:
      console.log(action, "active reducer");
      console.log(state);
      let activeState = state.map((info, index) => {
        return info.id === action.id
          ? { ...info, isFinish: true }
          : { ...info, isFinish: false };
      });
      return activeState;

    default:
      return state;
  }
}

//action.type
const SUBMIT = "SUBMIT";
const ACTIVE = "ACTIVE";

let currentId = 0;
// action

export function submit(input) {
  console.log("redux", input);
  return {
    type: SUBMIT,
    text: input,
    isFinish: false,
    id: currentId++,
  };
}

export function active(id) {
  return {
    type: ACTIVE,
    id: id,
  };
}
