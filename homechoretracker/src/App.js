import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/Parent";
import Chores from "./components/Chores";
import './App.css';
import Children from "./components/Children";

function App() {



  return (

    <Router>
      <div className="App">
        <Link to="protected">Parent</Link>
        <Link to="/children">Children</Link>
        {/* <Link to="/protected">Parent</Link> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/protected" component={Parent} />
          {/* <Route path="/protected" component={Children} /> */}

          <Route path="/chores" component={Chores} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
