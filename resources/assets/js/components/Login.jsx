import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center mt-5">
                    <div className="col-md-8">
                        <Card>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    <Button color="primary">Login</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}