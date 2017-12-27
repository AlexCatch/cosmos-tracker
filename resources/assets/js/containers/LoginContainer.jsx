import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';

import { login } from '../actions/AuthActions';

import { withRouter } from 'react-router-dom';

const LoginContainer = props => <Login {...props}/>;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null,
        loginError: state.auth.loginError,
        isAuthenticating: state.auth.isAuthenticating
    }
};

export default withRouter(connect(mapStateToProps, {login})(LoginContainer));