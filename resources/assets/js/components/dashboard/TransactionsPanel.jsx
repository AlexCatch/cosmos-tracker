import React, { Component } from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';

import TransactionPanelCard from './TransactionPanelCard';


export default class TransactionsPanel extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }
    render() {
        return (
            <Card>
                <CardHeader>Transactions</CardHeader>
                <CardBody className="transaction-panel-body">
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                    <TransactionPanelCard/>
                </CardBody>
            </Card>
        );
    }
}