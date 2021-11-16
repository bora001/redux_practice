import React from "react";

function TodoList({ text }) {
  console.log("todoList", text);
  return (
    <div>
      <ul>
        {text.map((content, index) => {
          return <li key={index}>{content}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
