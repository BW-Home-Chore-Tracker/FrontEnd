import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/Parent";
import Chores from "./components/Chores";
import './App.css';

function App() {

  

  return (
  
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Parent} />
        <Route path="/signup" component={Parent} />
        <Route path="/chores" component={Chores} />
      </div>
    </Router>
  
  );
}

export default App;
