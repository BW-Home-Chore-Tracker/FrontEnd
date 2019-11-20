import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/Parent";
import Chores from "./components/Chores";
import './App.css';
import Children from './components/Children';

function App() {



  return (

    <Router>
      <div className="App">
        <header>
          <Link to="/login">Login</Link><br />
          {/* <Link to="protected">Parent</Link> */}
          <Link to="/children">Children</Link>
        </header>
        <Switch>
          <Route exact path="/" component={Parent} />
          <PrivateRoute exact path="/protected" component={Children} />
          {/* <Route path="/protected" component={Children} /> */}

          <Route path="/chores" component={Chores} />
        </Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Parent} />
        <Route path="/signup" component={Parent} />
        <Route path="/children" component={Children} />
        <Route path="/chores" component={Chores} />
      </div>
    </Router>

  );
}

export default App;
