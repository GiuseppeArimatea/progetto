import React, { FC } from "react";
import styled from "styled-components";
import { UISpacing } from "../components-ui/Spacing";

export const Outer = styled.div`
  background-color: #00000070;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const Header: FC = (): JSX.Element => {
  return (
    <Outer>
      <h2>Giuseppe Arimatea</h2>
      <InnerBox>
        <li>Home</li>
        <UISpacing marginRight="30px" />
        <li>Servizi</li>
        <UISpacing marginRight="30px" />
        <li>Skill</li>
        <UISpacing marginRight="30px" />
        <li>Contattami</li>
        <UISpacing marginRight="30px" />
      </InnerBox>
    </Outer>
  );
};

Header.displayName = "Header";
