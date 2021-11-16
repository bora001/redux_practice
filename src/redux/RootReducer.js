import { combineReducers } from "redux";
import CounterReducer from "./CounterRedux";
import TodoReducer from "./TodoRedux";

const RootReducer = combineReducers({
  CounterReducer,
  TodoReducer,
});

export default RootReducer;
