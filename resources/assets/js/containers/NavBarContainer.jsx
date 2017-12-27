import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar';
import {logout} from '../actions/AuthActions';

const NavBarContainer = props => <NavBar {...props} />;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.user !== null,
        user: state.auth.user
    }
};

export default connect(mapStateToProps, {logout})(NavBarContainer);