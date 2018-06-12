import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    );
  }
}

export default App;
