import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { isLoggedIn, logout } from '../services/AuthenticationService';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CustomerListPage from './CustomerListPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    
    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    logout();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="container">
        {
          isLoggedIn() &&
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div className="navbar-menu">
              <Link to="/customerList" className="navbar-item">Customer</Link>
              <a className="navbar-item" onClick={this.doLogout}>Logout</a>
            </div>
          </nav>
        }
        <Switch>
          <Route path="/home" component={HomePage} />  
          <Route path="/customerList" component={CustomerListPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
