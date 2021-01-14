import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../../redux/reducers/todoSlice";
import { UIButton } from "../../../components-ui/Button";
import { TodoList } from "../todolist";

export const Todo: FC = (): JSX.Element => {
  const [todoTxt, setTodoTxt] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={todoTxt}
        onChange={(event) => setTodoTxt(event.target.value)}
      />
      <UIButton
        text="Invia"
        onClick={() => {
          dispatch(add({ txt: todoTxt, id: Math.random() }));
          setTodoTxt("");
        }}
      />
      <TodoList />
    </div>
  );
};
