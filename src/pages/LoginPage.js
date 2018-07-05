import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { InputField, Validations } from '../components';
import { statusEnum } from '../actions/constant';
import loginActions from '../actions/loginActions';

let LoginForm = props => {
  const { t } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={InputField} name="username" type="text" validate={Validations.required}
        placeholder="Username" required="true" leftIcon="fas fa-user"/>
      <Field component={InputField} name="password" type="password" validate={Validations.required} 
        placeholder="Password" required="true" leftIcon="fas fa-unlock"/>  
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Login</button>
        </div>
      </div>  
    </form>
  );
};

LoginForm = reduxForm({
  form: 'formLogin'
})(LoginForm);

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === statusEnum.SUCCESS) {
      this.props.history.push('/home');
    }
  }

  componentDidMount() {
    this.props.setDefaultState();
  }

  handleSubmit(values) {
    console.log(values);
    this.props.loginSubmit(values);
  }

  render() {

    const { isLoading, status, actionResponse} = this.props;

    return (
      <div className="columns">
        <div className="column">
          {
            status === statusEnum.SUCCESS &&
            <div className="notification is-success">
              Login Success
            </div>
          }
          {
            status === statusEnum.ERROR &&
            <div className="notification is-danger">
              { actionResponse.message }
            </div>
          }
          <LoginForm onSubmit={this.handleSubmit.bind(this)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.login });

const matchDispatchToProps = dispatch => (bindActionCreators({ ...loginActions }, dispatch));

export default connect(mapStateToProps, matchDispatchToProps)(LoginPage);
