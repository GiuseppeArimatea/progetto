import { FC, useState } from "react";
import { UIButton } from "../../components-ui/Button";

export const Counter: FC = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const setAddOnClick = () => {
    setCounter(counter + 1);
  };

  const setDecreaseOnClick = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <UIButton text="aumenta" onClick={setAddOnClick} />
      <p>{counter}</p>
      <UIButton
        isDisabled={false ? counter : counter < 1}
        text="diminuisci"
        onClick={setDecreaseOnClick}
      />
    </>
  );
};
