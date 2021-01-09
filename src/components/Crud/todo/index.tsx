import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/reducers/todoSlice";

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
      <button
        onClick={() => {
          dispatch(add({ txt: todoTxt, id: Date.now().toString() }));
          setTodoTxt("");
        }}
      >
        Clicca
      </button>
    </div>
  );
};
