import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, formState, handleSubmit } = useForm();

  const onValid = (data: any) => {
    console.log("valid", data);
  };

  console.log("error", formState.errors);

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register("todo", { required: "todo is required" })} placeholder="Write a to do" />
        <input type="text" {...register("password", { required: "password is required", minLength: { value: 10, message: "password is too short" } })} placeholder="Write a password" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
