import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      return oldToDos.map((toDo) => {
        if (toDo.id !== id) return toDo;
        return { ...toDo, category: +name as number };
      });
    });
  };

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) =>
      oldToDos.reduce((acc: IToDo[], cur: IToDo) => {
        if (cur.id !== id) acc.push(cur);
        return acc;
      }, [])
    );
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button type="button" name={Categories.TO_DO.toString()} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button type="button" name={Categories.DOING.toString()} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button type="button" name={Categories.DONE.toString()} onClick={onClick}>
          Done
        </button>
      )}
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </li>
  );
}

export default ToDo;
