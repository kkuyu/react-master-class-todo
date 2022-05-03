import { useForm } from "react-hook-form";

interface IForm {
  name: string;
  nickname: string;
  todo: string;
  email: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<IForm>({
    defaultValues: {
      name: "",
      nickname: "",
      todo: "",
      email: "@naver.com",
      password: "",
      passwordConfirm: "",
    },
  });

  const noNico = (value: string) => {
    if (value.includes("nico")) {
      return "no nicos allowed";
    }
    return true;
  };

  const noNick = (value: string) => {
    if (value.includes("nick")) {
      return "no nick allowed";
    }
    return true;
  };

  const onValid = (data: IForm) => {
    console.log("valid", data);

    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", { message: "password are not the same" }, { shouldFocus: true });
    }
    if (false) {
      setError("extraError", { message: "server offline" });
    }
  };

  console.log("error", errors);

  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column", padding: 20 }} onSubmit={handleSubmit(onValid)}>
        <input type="text" {...register("name", { required: "name is required", validate: noNico })} placeholder="Write a name" />
        <span>{errors?.name?.message}</span>

        <input
          type="text"
          {...register("nickname", {
            required: "nickname is required",
            validate: {
              name: noNico,
              nickname: noNick,
            },
          })}
          placeholder="Write a nickname"
        />
        <span>{errors?.nickname?.message}</span>

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

        <input
          type="text"
          {...register("passwordConfirm", { required: "password confirm is required", minLength: { value: 10, message: "password confirm is too short" } })}
          placeholder="Write a password confirm"
        />
        <span>{errors?.passwordConfirm?.message}</span>

        <button type="submit">Add</button>

        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
