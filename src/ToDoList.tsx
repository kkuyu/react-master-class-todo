import React, { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={onChange} placeholder="Write a to do" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
