import './App.scss'
import React from 'react'
import Homepage from './pages/Homepage'
import Infopage from './pages/Info'
import Typed from 'react-typed'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/* eslint-disable import/no-extraneous-dependencies */

// React FullPage-JS
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          About
          <Link to="/blog">Blog</Link>
        </Route>
        <Route path="/blog">
          Blog
        </Route>
        <Route path="/contact">
          Contact
        </Route>
        <Route path="/info">
          <Infopage />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
