import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header";

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export const App: FC = (): JSX.Element => {
  const [result, setResult] = useState<Todo[]>([]);

  const fetchURL = "https://jsonplaceholder.typicode.com/todos";
  const getData = () => fetch(fetchURL).then((res) => res.json());

  const onSubmit = () => {
    getData().then((data) => setResult(data));
  };

  return (
    <>
      <Header />
      <p>Api Fetch</p>
      <button onClick={onSubmit}>Clicca</button>
      <div>
        {result.splice(0, 10).map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>
    </>
  );
};

export default App;
