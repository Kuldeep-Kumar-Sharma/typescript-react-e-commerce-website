import React from "react";
import "./App.css";
import Layout from "./components/containers/Layout/Layout";
import Authentication from "./pages/User/Authentication/Authentication";
import { Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/authentication" component={Authentication} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default App;
