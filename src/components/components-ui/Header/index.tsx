import React, { FC } from "react";
import styled from "styled-components";
import { UISpacing } from "../Spacing";
import { Link } from "react-router-dom";
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

export const Header: FC = (): JSX.Element => (
  <Outer>
    <h2>Giuseppe Arimatea</h2>
    <InnerBox>
      <Link to="/">
        <li>Home</li>
      </Link>
      <UISpacing marginRight="30px" />
      <Link to="/Counter">
        <li>Counter</li>
      </Link>
      <UISpacing marginRight="30px" />
      <Link to="/Todo">
        <li>Todo</li>
      </Link>
      <UISpacing marginRight="30px" />
      <Link to="/Fetch">
        <li>Fetch</li>
      </Link>
    </InnerBox>
  </Outer>
);

Header.displayName = "Header";
