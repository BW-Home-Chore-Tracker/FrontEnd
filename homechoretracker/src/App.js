import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/Parent";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Home Chore Tracker</h1>

        <Switch>


          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={Parent} />
          {/* <PrivateRoute path="/chores" component={Chores} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
