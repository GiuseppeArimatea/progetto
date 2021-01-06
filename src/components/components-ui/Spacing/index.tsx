import { FC, memo } from "react";
import styled from "styled-components";

interface Props {
  marginRight?: string;
}
export const InnerBox = styled.div<Props>`
  display: flex;
  flex-direction: row;
  ${({ marginRight }: Props): string | undefined | false =>
    marginRight && `margin-right: ${marginRight};`};
`;

export const UISpacing: FC<Props> = memo(
  ({ marginRight }: Props): JSX.Element | null => {
    return <InnerBox marginRight={marginRight} />;
  }
);

UISpacing.displayName = "UISpacing";
