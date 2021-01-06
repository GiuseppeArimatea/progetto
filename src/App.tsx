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

  useEffect(() => {
    getData().then((data) => setResult(data));
  }, []);

  return (
    <>
      <Header />
      <div>
        {result?.map((item) => (
          <li key={item.id}>
            {item.title},{item.userId}
          </li>
        ))}
      </div>
    </>
  );
};

export default App;
