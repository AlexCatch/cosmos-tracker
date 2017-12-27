import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';

import {
    Redirect
} from 'react-router-dom';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        };
        this.register = this.register.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }
    render() {
        return this.renderContent();
    }
    renderContent() {
        if (this.props.sentTo) {
            return (
                <div className="container">
                    <div className="row justify-content-md-center mt-5">
                        <div className="col-md-8">
                            {this.props.error && <Alert color="danger">
                                {this.props.error}
                            </Alert>}
                            <Card>
                                <CardBody>
                                    <h5>An email has been sent to {this.props.sentTo}. Please click the link in the email to confirm your account.</h5>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-8">
                        {this.props.error && <Alert color="danger">
                            {this.props.error}
                        </Alert>}
                        <Card>
                            <CardBody>
                                <Form onSubmit={this.register}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Name</Label>
                                        <Input type="text" name="name" id="exampleEmail" placeholder="Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Confirm Password</Label>
                                        <Input type="password" name="password_confirmation" id="examplePassword" placeholder="Confirm Password" />
                                    </FormGroup>
                                    <Button disabled={this.props.loading} color="primary">{this.props.loading ? "Creating your account..." : "Sign Up"}</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
    register(e) {
        e.preventDefault();
        this.props.register(e.target.name.value, e.target.email.value, e.target.password.value, e.target.password_confirmation.value);
    }
}