import React, { useEffect, useState } from "react";
import { createStore } from "redux";

function App() {
  const [reduxState, setreduxState] = useState([]);
  const [Create, setCreate] = useState(false);
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Id, setId] = useState(0);

  const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  useEffect(() => {
    setreduxState(store.getState());
  }, []);

  console.log(store.getState());

  console.log(reduxState);
  function appReducer(state = [], action) {
    switch (action.type) {
      case "submit":
        state = [
          ...state,
          {
            title: action.title,
            desc: action.desc,
          },
        ];
        setreduxState(state);
        return state;
        break;
      default:
        state = [
          { title: "React", desc: "This is about React" },
          { title: "Redux", desc: "This is about Redux" },
        ];
        return state;
        break;
    }
  }
  store.subscribe(() => store.getState());

  function getName(event) {
    event.preventDefault();
    console.log(event.target.attributes.id.value, "getName");
    setId(event.target.attributes.id.value, "getName");
  }

  function getInput(event) {
    event.preventDefault();
    setCreate(!Create);
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
    setCreate(false);
  }

  return (
    <div style={{ margin: "0 auto", width: "40%", textAlign: "center" }}>
      <h1>REDUX Practice</h1>
      <div
        className="inner_box"
        style={{
          padding: "20px",
          backgroundColor: "#ff99",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>This is Redux practice</h4>
        {reduxState &&
          reduxState.map((content, index) => {
            return (
              <p
                key={index}
                style={{
                  padding: "10px",
                  backgroundColor: "#ff5",
                  width: "100px",
                  textAlign: "center",
                  boxShadow: "3px 3px 3px gold",
                }}
              >
                <a
                  href="/"
                  onClick={getName}
                  id={index}
                  style={{ textDecoration: "none" }}
                >
                  {content.title}
                </a>
              </p>
            );
          })}

        {reduxState &&
          reduxState.map((content, index) => {
            return index == Id ? (
              <p style={{ marginTop: "50px" }}> - {content.desc}</p>
            ) : (
              " "
            );
          })}
      </div>

      <button
        onClick={getInput}
        style={{
          marginTop: "50px",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#f6f6",
          letterSpacing: "0.5px",
          cursor: "pointer",
        }}
      >
        Create New Article ✅
      </button>

      {Create && (
        <form
          onSubmit={newArticle}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            height: "120px",
            padding: "10px",
            backgroundColor: "#ff5",
            margin: "20px auto 0",
            justifyContent: "space-around",
          }}
        >
          <h4 style={{ lineHeight: "0" }}>Make new article</h4>
          <input placeholder="title" name="title" onChange={getTitle}></input>
          <input placeholder="desc" name="desc" onChange={getDesc}></input>
          <button onSubmit={newArticle}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
