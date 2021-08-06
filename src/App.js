import logo from "./logo.svg";
import "./App.css";
import Main from "./main";
import Profile from "./profile";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul> */}
        <hr />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
