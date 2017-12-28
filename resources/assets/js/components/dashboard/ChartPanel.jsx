import React, { Component } from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';

export default class ChartPanel extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <Card>
                <CardHeader>Chart</CardHeader>
                <CardBody className="chart-panel-body">
                </CardBody>
            </Card>
        );
    }
}