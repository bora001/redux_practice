import React, { useState } from "react";
import { createStore } from "redux";

function App() {
  const [reduxState, setreduxState] = useState({ title: "react" });
  const [Create, setCreate] = useState(false);
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  function appReducer(state = {}, action) {
    switch (action.type) {
      case "select":
        const newState = { ...state, ...action };
        return newState;
      case "submit":
        const newState2 = { ...state, ...action };
        return newState2;

      default:
        return state;
    }
  }

  function getName(event) {
    event.preventDefault();
    store.dispatch({ type: "select", title: event.target.innerHTML });
  }

  function getInput(event) {
    event.preventDefault();
    setCreate(!Create);
    // store.dispatch({ type: "create" , title:});
  }

  function getTitle(event) {
    setTitle(event.target.value);
  }

  function getDesc(event) {
    setDesc(event.target.value);
  }

  function newArticle(event) {
    event.preventDefault();
    store.dispatch({ type: "submit", title: Title, desc: Desc });
  }

  const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.subscribe(() => setreduxState(store.getState()));

  console.log("get", reduxState);

  return (
    <div>
      <h1>REDUX Practice</h1>
      <p>This is Redux practice</p>
      <ul>
        <li>
          <a href="/" onClick={getName}>
            React
          </a>
        </li>
        <li>
          <a href="/" onClick={getName}>
            Redux
          </a>
        </li>
      </ul>

      <div className="btn_box">
        <button onClick={getInput}>Create</button>

        {Create && (
          <form
            onSubmit={newArticle}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "200px",
              height: "120px",
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "red",
              justifyContent: "space-around",
            }}
          >
            <h4 style={{ lineHeight: "0" }}>Make new article</h4>
            <input placeholder="title" name="title" onChange={getTitle}></input>
            <input placeholder="desc" name="desc" onChange={getDesc}></input>
            <button onSubmit={newArticle}>Submit</button>
          </form>
        )}

        {/* <button>Delete</button> */}
      </div>

      <div className="txt_box">
        <h2>{reduxState.title}</h2>
        {reduxState.desc ? (
          <p>{reduxState.desc}</p>
        ) : (
          <p>This is about {reduxState.title}</p>
        )}
      </div>
    </div>
  );
}

export default App;
