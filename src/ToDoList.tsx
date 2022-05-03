import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  // 'toDos' same as 'useRecoilValue(toDoState)'
  // 'setToDos' same as 'useSetRecoilState(toDoState)'
  const [toDos, setToDos] = useRecoilState(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>({
    defaultValues: {
      toDo: "",
    },
  });

  const handleValid = ({ toDo }: IForm) => {
    console.log("add to do:", toDo);
    setValue("toDo", "");
    setToDos((oldToDos) => [{ id: Date.now(), text: toDo, category: "TO_DO" }, ...oldToDos]);
  };

  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input type="text" {...register("toDo", { required: "Plase write a To Do" })} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
