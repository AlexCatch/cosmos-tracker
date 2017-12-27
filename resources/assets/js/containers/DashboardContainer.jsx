import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';
import { withRouter } from 'react-router-dom';

const DashboardContainer = props => <Dashboard {...props}/>;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null,
    }
};

export default withRouter(connect(mapStateToProps)(DashboardContainer));