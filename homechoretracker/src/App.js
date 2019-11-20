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
function App() {



  return (

    <Router>
      <div className="App">
        <header>
          <h1>Welcome to Chores Challenge</h1>
          <a href="https://chorechallenge.netlify.com/">Chores Challenge</a><br />
          <Link to="/children">Children</Link><br />
          <Link to="/chores">Chores Challenge List</Link><br />
          {/* <Link to="/login">Login</Link><br /> */}
          {/* <Link to="/signup">Parent</Link> */}
          {/* <Link to="/update-chores" component={UpdateChoresForm}>Update Chores</Link> */}
        </header>
        <Switch>
          <Route exact exact path="/" component={SignIn} />
          <Route exact path="/children" component={Children} />
          <Route path="/chores" component={Chores} />
          <PrivateRoute exact path="/protected" component={Parent} />
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
