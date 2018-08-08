import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

class Auth extends React.Component {
  state = {
    email: '',
    password: '',

  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  loginHandler = (event) => {
    event.preventDefault();
    // console.log(this.state)
    this.props.onAuth(this.state.email, this.state.password)
  }

  render() {

    let form = null
    form = (
      <form onSubmit={e => this.props.handle_login(e, this.state)}>
        <h4>Log In</h4>
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handle_change}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />

        <button onClick={this.loginHandler}>Login</button>
      </form>
    )

    if (this.props.loading) {
      form = <Spinner />
    }

    let errorMessage = null
    if (this.props.error) {
      errorMessage = Object.keys(this.props.error).map(obj => {
        return <p>{this.props.error[obj]}</p>
      })
    }

    if (this.props.token) {
      form = <p>Login success! Token: {this.props.token}</p>
    }

    return (
      <div>
        {form}
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
//
// Auth.propTypes = {
//   handle_login: PropTypes.func.isRequired
// };
