import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { del, selectTodos } from "../../../redux/reducers/todoSlice";

export const TodoList: FC = (): JSX.Element => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map(({ txt, id }: any) => (
        <>
          <p>{txt}</p>
          <button onClick={() => dispatch(del(id))}>Cancella</button>
        </>
      ))}
    </>
  );
};
