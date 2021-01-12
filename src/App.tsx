import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/components-ui/Header";
import { Counter } from "./components/components-view/ViewCounter";
import { Todo } from "./components/components-view/ViewCrud/todo";
import { Fetch } from "./components/components-view/ViewFetch";
import { Home } from "./components/components-view/ViewHome";
import store from "./redux/store";

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exacth path="/Counter" component={Counter} />
          <Route exacth path="/Fetch" component={Fetch} />
          <Route exacth path="/Todo" component={Todo} />
          <Route exacth path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
