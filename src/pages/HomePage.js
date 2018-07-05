import React, { Component } from 'react';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          First column
        </div>
        <div className="column">
          Second column
        </div>
        <div className="column">
          Third column
        </div>
        <div className="column">
          Fourth column
        </div>
      </div>
    );
  }
}

export default HomePage;
