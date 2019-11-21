import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/SignIn";
import Chores from "./components/Chores";
import './App.css';
import Children from './components/Children';
import UpdateChoresForm from './components/UpdateChoresForm'
import SignIn from "./components/SignIn";
import NavBar from "./components/NavBar";
function App() {



  return (

    <Router>

      <div className="App">
        <NavBar />
        <Switch>
          <Route exact exact path="/" component={SignIn} />
          <PrivateRoute exact path="/protected" component={Parent} />
          <Route exact path="/children" component={Children} />
          <Route path="/chores" component={Chores} />

          <Route path="/children" component={Children} />
          <Route path="/chores" component={Chores} />
          <Route path="/update-chores" component={UpdateChoresForm} />

          {/* <Route exact path="/" component={Login} /> */}
        </Switch>
      </div>
    </Router>

  );
}

export default App;
