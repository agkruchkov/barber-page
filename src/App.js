import React, { useEffect } from "react";
import "./styles.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Services from "./components/Servises";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { loadServices } from "./store/services";

const App = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadServices);
  }, []);

  return (
    <div className="App">
      <header className="header-site container clearfix">
        <Menu />
      </header>

      <main className="middle-site container clearfix">
        <Switch>
          <Route
            history={history}
            path="/home"
            render={(props) => <Home {...props} />}
          />
          <Route
            history={history}
            path="/services"
            render={(props) => <Services {...props} />}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
