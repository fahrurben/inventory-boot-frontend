import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
        </ul>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
