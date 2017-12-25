import React, { Component } from 'react';
import {
    Collapse,
    Navbar as ReactstrapNav,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap';

import {
    Link
} from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    render() {
        return (
                <ReactstrapNav color="primary" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Cosmos Tracker</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {this.renderNavOptions()}
                        </Collapse>
                    </div>
                </ReactstrapNav>
        );
    }
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }
    renderNavOptions() {
        if (this.props.authenticated) {
            return (<Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Alexander Catchpole
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem>
                            Settings
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>);
        }

        return <Nav className="ml-auto" navbar>
            <NavItem>
                <Link className="nav-link" to="/sign-up">Get Started</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/login">Login</Link>
            </NavItem>
        </Nav>
    }
}