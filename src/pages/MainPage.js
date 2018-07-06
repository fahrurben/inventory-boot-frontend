import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { isLoggedIn, logout } from '../services/AuthenticationService';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import CustomerListPage from './CustomerListPage';
import CustomerCreatePage from './CustomerCreatePage';
import CustomerUpdatePage from './CustomerUpdatePage';

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
          <div className="columns">
            <div className="column">
              <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
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
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                      Data
                    </a>
                    <div className="navbar-dropdown is-boxed">
                      <Link to="/customer" className="navbar-item">Customer</Link>
                    </div>
                  </div>
                  <div className="navbar-end">
                    <a className="navbar-item" onClick={this.doLogout}>Logout</a>
                  </div>  
                </div>
              </nav>
            </div>
          </div>
        }
        <Switch>
          <Route path="/home" component={HomePage} />  
          <Route path="/customer/create" component={CustomerCreatePage} />
          <Route path="/customer/update/:id" component={CustomerUpdatePage} />
          <Route path="/customer" component={CustomerListPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
