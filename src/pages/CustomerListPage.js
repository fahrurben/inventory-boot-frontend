import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { statusEnum } from '../actions/constant';
import customerActions from '../actions/customerActions';

class CustomerPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.searchCustomers({page: 1, size: 20});
  }

  render() {
    return (
      <div className="columns">
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.customerList });
const matchDispatchToProps = dispatch => (bindActionCreators({ ...customerActions }, dispatch));

export default connect(mapStateToProps, matchDispatchToProps)(CustomerPage);