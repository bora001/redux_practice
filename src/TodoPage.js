import React, { useState, useRef } from "react";
import { submit } from "./redux/TodoRedux";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";

function TodoPage() {
  const [InputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();

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
    ref.current.value = "";
  };

  return (
    <div>
      <h2>To do List</h2>
      <form onSubmit={onSubmit}>
        <input
          name="todo"
          placeholder="Write your todo list on here "
          onChange={onChange}
          ref={ref}
        />
        <button onSubmit={onSubmit}>Submit</button>
      </form>
      <TodoList text={text} />
    </div>
  );
}

export default TodoPage;
