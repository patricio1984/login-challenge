import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import NuevaCuenta from "./components/NuevaCuenta";
import AlertaState from "./context/alertas/alertaState";

function App() {
  return (
    <div className="App">
      <AlertaState>
          <Router>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
              </Switch>
          </Router>
      </AlertaState>
    </div>
  );
}

export default App;
