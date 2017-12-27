import React from 'react';
import { connect } from 'react-redux';
import Signup from '../components/Signup';

import { register } from '../actions/AuthActions';

import { withRouter } from 'react-router-dom';

const SignupContainer = props => <Signup {...props}/>;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null,
        loading: state.auth.isSigningUp,
        error: state.auth.signupError,
        sentTo: state.auth.verificationSentTo
    }
};

export default withRouter(connect(mapStateToProps, {register})(SignupContainer));