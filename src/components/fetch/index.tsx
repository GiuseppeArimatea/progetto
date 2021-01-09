import React, { FC, useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
}

export const Fetch: FC = (): JSX.Element => {
  const [result, setResult] = useState<Todo[]>([]);
  const fetchURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    const getData = () => fetch(fetchURL).then((res) => res.json());
    getData().then((result) => setResult(result.splice(0, 10)));
  }, []);

  return (
    <>
      <p>Api Fetch</p>
      <div>
        {result.map((item) => (
          <li key={item.id}>
            {item.title},{item.userId}
          </li>
        ))}
      </div>
    </>
  );
};
