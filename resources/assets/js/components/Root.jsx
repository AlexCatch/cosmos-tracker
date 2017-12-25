import React, { Component } from 'react';
import NavBarContainer from '../containers/NavBarContainer';
import LoginContainer from '../containers/LoginContainer';
import SignupContainer from '../containers/SignupContainer';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export default class Root extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Router>
                    <div>
                        <NavBarContainer/>
                        <div>
                            <Route exact path="/login" component={LoginContainer}/>
                            <Route exact path="/sign-up" component={SignupContainer}/>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}