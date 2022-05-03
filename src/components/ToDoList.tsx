import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  const setToDos = useSetRecoilState(toDoState);

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
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
