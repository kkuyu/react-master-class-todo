import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
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

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input type="text" {...register("toDo", { required: "Plase write a To Do" })} />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
