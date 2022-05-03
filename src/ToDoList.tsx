import { useForm } from "react-hook-form";

interface IForm {
  todo: string;
  email: string;
  password: string;
}

function ToDoList() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>({
    defaultValues: {
      todo: "",
      email: "@naver.com",
      password: "",
    },
  });

  const onValid = (data: any) => {
    console.log("valid", data);
  };

  console.log("error", errors);

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", padding: 20 }} onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register("todo", { required: "todo is required" })} placeholder="Write a to do" />
        <span>{errors?.todo?.message}</span>
        <input
          type="text"
          {...register("email", { required: "email is required", pattern: { value: /^[A-Za-z0-9._%+-]+@naver\.com$/, message: "only naver.com emails allowed" } })}
          placeholder="Write a email"
        />
        <span>{errors?.email?.message}</span>
        <input type="text" {...register("password", { required: "password is required", minLength: { value: 10, message: "password is too short" } })} placeholder="Write a password" />
        <span>{errors?.password?.message}</span>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
