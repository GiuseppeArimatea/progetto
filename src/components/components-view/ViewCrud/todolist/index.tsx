import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { del, selectTodos } from "../../../../redux/reducers/todoSlice";
import { UIButton } from "../../../components-ui/Button";

export const TodoList: FC = (): JSX.Element => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map(({ txt, id }: any) => (
        <>
          <p>{txt}</p>
          <UIButton text="Cancella" onClick={() => dispatch(del(id))} />
        </>
      ))}
    </>
  );
};
