import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoSelector, toDoState } from "../atoms";

import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const setToDos = useSetRecoilState(toDoState);

  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  useEffect(() => {
    setToDos([
      {
        id: 1651554996991,
        text: "555",
        category: "TO_DO",
      },
      {
        id: 1651554996357,
        text: "444",
        category: "TO_DO",
      },
      {
        id: 1651554995697,
        text: "333",
        category: "TO_DO",
      },
      {
        id: 1651554995033,
        text: "222",
        category: "TO_DO",
      },
      {
        id: 1651554994216,
        text: "111",
        category: "TO_DO",
      },
    ]);
  }, []);

  console.log(toDos);

  return (
    <div>
      <h1>Make To Dos</h1>
      <CreateToDo />

      <hr />
      <h2>To Do List</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>

      <hr />
      <h2>Doing List</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>

      <hr />
      <h2>Done List</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
