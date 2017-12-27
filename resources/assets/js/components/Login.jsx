import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';

import {
    Redirect
} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: false
        };
        this.login = this.login.bind(this);
    }
    componentDidMount() {
        console.log("component did mount");
        console.log(this.props.authenticated);
        if (this.props.authenticated) {
            console.log("we are authed, pushing now");
            this.props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-8">
                        {this.props.loginError && <Alert color="danger">
                            Invalid Username or Password
                        </Alert>}
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.login}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    <Button disabled={this.props.isAuthenticating} color="primary">{this.props.isAuthenticating ? "Logging you in..." : "Login"}</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

    login(e) {
        e.preventDefault();
        this.props.login(e.target.email.value, e.target.password.value);
    }
}