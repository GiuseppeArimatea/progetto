import React, { FC } from "react";
import styled from "styled-components";
import { UISpacing } from "../Spacing";
import { BrowserRouter, Link, NavLink, Switch } from "react-router-dom";
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
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <UISpacing marginRight="30px" />
      <NavLink to="/Counter">
        <li>Counter</li>
      </NavLink>
      <UISpacing marginRight="30px" />
      <NavLink to="/Todo">
        <li>Todo</li>
      </NavLink>
      <UISpacing marginRight="30px" />
      <NavLink to="/Fetch">
        <li>Fetch</li>
      </NavLink>
    </InnerBox>
  </Outer>
);

Header.displayName = "Header";
