import React from 'react';
import { connect } from 'react-redux';
import Root from '../components/Root';
import {initAuth} from '../actions/AuthActions';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null
    }
};

export default connect(mapStateToProps, {initAuth})(RootContainer);