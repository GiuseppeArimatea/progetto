import { FC, useState } from "react";
import { UIButton } from "../../components-ui/Button";

export const Counter: FC = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const setOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <UIButton text="clicca" onClick={setOnClick} />
      <p>{counter}</p>
    </>
  );
};
