import React, { Component } from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';


export default class TransactionsPanelCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <div className="transaction-panel-card">
            </div>
        );
    }
}