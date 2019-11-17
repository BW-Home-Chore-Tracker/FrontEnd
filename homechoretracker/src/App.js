import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";
import Parent from "./components/Parent";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={Parent} />
      </div>
    </Router>
  );
}

export default App;
