import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      return oldToDos.map((toDo) => {
        if (toDo.id !== id) return toDo;
        return { ...toDo, category: name as IToDo["category"] };
      });
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button type="button" name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DOING" && (
        <button type="button" name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "DONE" && (
        <button type="button" name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
