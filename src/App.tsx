import React, { FC } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Fetch } from "./components/fetch";
import { Header } from "./components/header";
import { Todo } from "./components/Crud/todo";
import { TodoList } from "./components/Crud/todolist";
import store from "./redux/store";

export const App: FC = (): JSX.Element => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Fetch />
        <Todo />
        <TodoList />
      </Provider>
    </>
  );
};

export default App;
