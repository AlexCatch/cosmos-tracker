import React from 'react';
import { connect } from 'react-redux';
import Root from '../components/Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null
    }
};

export default connect(mapStateToProps)(RootContainer);