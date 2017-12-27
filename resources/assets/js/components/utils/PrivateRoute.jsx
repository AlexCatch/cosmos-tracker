import React, { Component } from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom';

const PrivateRoute = ({authenticated: authenticated, component: Component, ...rest }) => {
    return <Route {...rest} render={props => (
        authenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login'
            }}/>
        )
    )}/>
};

export default PrivateRoute;