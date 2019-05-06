import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserData } from '../actions';

export class AuthSocial extends Component {
  /**
   * Save token to storage and redirect user
   */
  LoginUser = (token) => {
    window.localStorage.setItem('token', token);
    const { history } = this.props;
    history.push('/dashboard');
  }

  /**
   * Get user data from url
   */
  userDataHandler = () => {
    const { location, dispatch, token } = this.props;
    const userArray = location.search.split('&');
    dispatch(getUserData(userArray));
    this.LoginUser(token);
  }

  render() {
    return (
      <div>
        {this.userDataHandler()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.auth.redirect,
  id: state.auth.id,
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  username: state.auth.username,
  email: state.auth.email,
  error: state.auth.error,
  token: state.auth.token
});

export default connect(mapStateToProps)(AuthSocial);
