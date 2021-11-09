import { createStore } from "redux";

function App() {
  function appReducer(state, action) {
    switch (action.type) {
      default:
        return state;
    }
  }

  let store = createStore(appReducer);
  store.subscribe(() => console.log(store.getState()));

  return <div></div>;
}

export default App;
