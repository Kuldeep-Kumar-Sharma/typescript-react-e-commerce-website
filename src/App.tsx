import React from "react";
import "./App.css";
import Layout from "./components/containers/Layout/Layout";
import Login from "./pages/User/Login/Login";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default App;
