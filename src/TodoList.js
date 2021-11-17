import React from "react";

function TodoList({ currentState, ActiveTodo }) {
  return (
    <div>
      <ul>
        {currentState.map((content, index) => {
          return (
            <div key={index}>
              {content.isFinish ? (
                <li
                  id={index}
                  style={{ color: "red" }}
                  onClick={() => ActiveTodo(index)}
                >
                  {content.text}
                </li>
              ) : (
                <li id={index} onClick={() => ActiveTodo(index)}>
                  {content.text}
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
