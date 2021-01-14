import React, { FC, memo, SyntheticEvent } from "react";

interface Props {
  text: string;
  onClick: (event: SyntheticEvent) => void;
  isDisabled?: any;
}

export const UIButton: FC<Props> = memo(
  ({ text, onClick, isDisabled }: Props): JSX.Element => {
    return (
      <button onClick={onClick} disabled={isDisabled}>
        {text}
      </button>
    );
  }
);

UIButton.displayName = "Button";
