import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
const LoginContainer = props => <Login {...this.props}/>;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null
    }
};

export default connect(mapStateToProps)(LoginContainer);