import React, { Component } from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';
import DashboardContainer from '../containers/DashboardContainer';
import PrivateRoute from './utils/PrivateRoute';

import history from '../history/history'

import {
    Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

export default class Root extends Component {
    componentDidMount() {
        this.props.initAuth();
    }
    render() {
        return (
            <div className="page-wrapper">
                <Router history={history}>
                    <div>
                        <NavBarContainer/>
                        <div>
                            <switch>
                            <Route exact path="/login" component={LoginContainer}/>
                            <Route exact path="/sign-up" component={SignupContainer}/>
                            <PrivateRoute exact path="/dashboard" component={DashboardContainer} authenticated={this.props.authenticated}/>
                            </switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}