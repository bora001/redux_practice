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

  return (
    <div>
      <h1>REDUX Practice</h1>
      <p>This is Redux practice</p>
      <ul>
        <li>
          <a href="/">React</a>
        </li>
        <li>
          <a href="/">Redux</a>
        </li>
      </ul>

      <div className="btn_box">
        <button>Create</button>
        <button>Delete</button>
      </div>

      <div className="txt_box">
        <h2>title</h2>
        <p>desc</p>
      </div>
    </div>
  );
}

export default App;
