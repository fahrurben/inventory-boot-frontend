import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';
import { InputField, Validations } from '../components';
import _ from 'lodash';
import { statusEnum } from '../actions/constant';
import customerActions from '../actions/customerActions';

let FormCustomerUpdate = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="name" type="text" validate={Validations.required}
            placeholder="Name" label="Name" required="true" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="contactName" type="text"
            placeholder="Contact Name" label="Contact Name" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="contactPhone" type="text"
            placeholder="Contact Phone" label="Contact Phone" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="contactFax" type="text"
            placeholder="Contact Fax" label="Contact Fax" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="contactEmail" type="text"
            placeholder="Contact Email" label="Contact Email" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="contactWebsite" type="text"
            placeholder="Contact Website" label="Contact Website" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="addressStreet" type="text"
            placeholder="Street" label="Address Street" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="addressCity" type="text"
            placeholder="City" label="Address City" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="addressProvince" type="text"
            placeholder="Address Province" label="Address Province" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="addressPostalCode" type="text"
            placeholder="Address Postal Code" label="Address Postal Code" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="addressRemarks" type="text"
            placeholder="Address Remarks" label="Address Remarks" /> 
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <Field component={InputField} name="shippingStreet" type="text"
            placeholder="Street" label="Shipping Street" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="shippingCity" type="text"
            placeholder="City" label="Shipping City" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="shippingProvince" type="text"
            placeholder="Shipping Province" label="Shipping Province" /> 
        </div>
        <div className="column">
          <Field component={InputField} name="shippingPostalCode" type="text"
            placeholder="Shipping Postal Code" label="Shipping Postal Code" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="shippingRemarks" type="text"
            placeholder="Shipping Remarks" label="Shipping Remarks" /> 
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <Field component={InputField} name="remarks" type="text"
            placeholder="Remarks" label="Remarks" /> 
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link" onClick={()=>props.onCancel()} type="button">Cancel</button>
        </div>
      </div>  
    </form>
  );
};

FormCustomerUpdate = reduxForm({
  form: 'formCustomerUpdate',
  enableReinitialize: true
})(FormCustomerUpdate);

FormCustomerUpdate = withRouter(connect(
  state => ({
    initialValues: state.customerUpdate.initialData
  })
)(FormCustomerUpdate));

class CustomerUpdatePage extends Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
  }

  componentDidMount() {
    this.props.getCustomer(this.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === statusEnum.SUCCESS) {
      setTimeout(() => this.props.history.push('/customer'), 2000);
    }
  }

  handleSubmit(values) {
    values.id = this.id;
    this.props.updateCustomer(values);
  }

  cancel() {
    this.props.history.push('/customer');
  }

  render() {
    
    const { isLoading, status, actionResponse, initialData, customer} = this.props;

    return (
      <div className="columns">
        <div className="column">
          <h2 className="title is-2">Update Customer</h2>
          {
            status === statusEnum.SUCCESS &&
            <div className="notification is-success">
              Update Customer Success
            </div>
          }
          {
            status === statusEnum.ERROR &&
            <div className="notification is-danger">
              { actionResponse.message }
            </div>
          }
          <FormCustomerUpdate 
            onSubmit={this.handleSubmit.bind(this)} 
            onCancel={this.cancel.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.customerUpdate });
const matchDispatchToProps = dispatch => (bindActionCreators({ ...customerActions }, dispatch));

export default connect(mapStateToProps, matchDispatchToProps)(CustomerUpdatePage);