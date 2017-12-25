import React from 'react';
import { connect } from 'react-redux';
import Signup from '../components/Signup';

const SignupContainer = props => <Signup {...this.props}/>;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null
    }
};

export default connect(mapStateToProps)(SignupContainer);