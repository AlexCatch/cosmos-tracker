import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/Navbar';

const NavBarContainer = props => <NavBar {...props} />;

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authToken !== null
    }
};

export default connect(mapStateToProps)(NavBarContainer);