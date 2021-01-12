import React, { FC, memo, SyntheticEvent } from "react";

interface Props {
  text: string;
  onClick: (event: SyntheticEvent) => void;
}

export const UIButton: FC<Props> = memo(
  ({ text, onClick }: Props): JSX.Element => {
    return <button onClick={onClick}>{text}</button>;
  }
);

UIButton.displayName = "Button";
