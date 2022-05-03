import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>({
    defaultValues: {
      toDo: "",
    },
  });

  const handleValid = (data: IForm) => {
    console.log("add to do:", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input type="text" {...register("toDo", { required: "Plase write a To Do" })} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
