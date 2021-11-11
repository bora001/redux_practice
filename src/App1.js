import React, { useEffect, useState } from "react";
import { createStore } from "redux";

function App1() {
  const [ReduxState, setReduxState] = useState("");
  const [currentId, setcurrentId] = useState(0);
  const [getInput, setgetInput] = useState(false);
  const [NewTitle, setNewTitle] = useState("");
  const [NewDesc, setNewDesc] = useState("");

  function appReducer(state, action) {
    switch (action.type) {
      case "select":
        return { ...state, action };
        break;
      case "create":
        console.log("create action", action);
        return action.content;
      default:
        return {
          content: [
            { id: 0, title: "react", desc: "react is react !" },
            { id: 1, title: "redux", desc: "redux is redux!" },
          ],
        };
    }
  }

  useEffect(() => {
    let state = store.getState();
    setReduxState(state.content);
  }, []);

  function MakeNewDesc() {
    let id = currentId;
    let state = Object.assign({}, ReduxState[id]);
    return <p>{state.desc}</p>;
  }

  const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  function getName(event) {
    event.preventDefault();
    let Id = event.target.attributes.id.value;
    setcurrentId(Id);
    store.dispatch({ type: "select", id: Id });
    console.log("ya", currentId, Id);
  }
  console.log(currentId, "currentId ");

  store.subscribe(() => {
    let state = store.getState();
  });

  function getNewArticle(event) {
    event.preventDefault();
    setgetInput(!getInput);
  }

  function getTitle(event) {
    setNewTitle(event.target.value);
  }

  function getDesc(event) {
    setNewDesc(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    let currentState = store.getState();
    let NewId = currentState.content.length;
    let NewOb = { id: NewId, title: NewTitle, desc: NewDesc };
    let stateArray = currentState.content;
    let NewState = [...stateArray, NewOb];
    console.log(NewState, "NewState");
    setReduxState(NewState);
    store.dispatch({
      type: "create",
      content: NewState,
    });
    setgetInput(false);
  }

  function onDelete(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h2>Redux test</h2>
      <div>
        {/* {ReduxState &&
          ReduxState.map((content, index) => {
            return (
              <button key={index} id={index} onClick={getName}>
                {content.title}
              </button>
            );
          })} */}
        {ReduxState &&
          ReduxState.map((content, index) => {
            return currentId == index ? (
              <button
                key={index}
                id={index}
                onClick={getName}
                style={{ backgroundColor: "red" }}
              >
                {content.title}
              </button>
            ) : (
              <button key={index} id={index} onClick={getName}>
                {content.title}
              </button>
            );
          })}
      </div>
      <button onClick={getNewArticle} style={{ backgroundColor: "gold" }}>
        Create
      </button>
      <button onClick={onDelete} style={{ backgroundColor: "lightgreen" }}>
        Delete
      </button>

      {getInput && (
        <form onSubmit={onSubmit}>
          <input onChange={getTitle} placeholder="title"></input>
          <input onChange={getDesc} placeholder="desc"></input>
          <button onSubmit={onSubmit}>Submit</button>
        </form>
      )}

      <p>{MakeNewDesc()}</p>
    </div>
  );
}
export default App1;
