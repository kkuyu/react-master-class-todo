import { IToDo } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button type="button">To Do</button>
      <button type="button">Doing</button>
      <button type="button">Done</button>
    </li>
  );
}

export default ToDo;
