import { FC } from "react";
import styled from "styled-components";

export const InnerBox = styled.div`
  justify-content: center;
  display: flex;
  font-size: 50px;
  margin: 5rem;
  background-color: chocolate;
`;

export const Home: FC = (): JSX.Element => <InnerBox>HOMEPAGE</InnerBox>;
