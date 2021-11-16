import React, { useState } from "react";
import { submit } from "./redux/TodoRedux";

import { useSelector, useDispatch } from "react-redux";

function TodoPage() {
  const [InputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const { text } = useSelector((state) => ({
    text: state.TodoReducer.text,
  }));

  console.log({ text }, "text");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(submit(InputValue));
  };

  return (
    <div>
      <h2>To do List</h2>
      <form onSubmit={onSubmit}>
        <input
          name="todo"
          placeholder="Write your todo list on here "
          onChange={onChange}
        />
        <button onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default TodoPage;
