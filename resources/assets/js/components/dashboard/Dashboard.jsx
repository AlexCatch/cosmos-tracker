import React, { Component } from 'react';

import ChangeQuickLookCard from './ChangeQuickLookCard';
import TransactionsPanel from './TransactionsPanel';
import ChartPanel from './ChartPanel';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-3 col-xs-12">
                        <ChangeQuickLookCard type="btc" gradientClassName="change-card-btc"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3 col-xs-12">
                        <ChangeQuickLookCard type="bch" gradientClassName="change-card-bch"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3 col-xs-12 mt-lg-0 mt-sm-4 mt-xs-4">
                        <ChangeQuickLookCard type="eth" gradientClassName="change-card-eth"/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3 col-xs-12 mt-lg-0 mt-sm-4 mt-xs-4">
                        <ChangeQuickLookCard type="ltc" gradientClassName="change-card-ltc"/>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <TransactionsPanel/>
                    </div>
                    <div className="col-lg-9 col-md-7 col-sm-12 mt-md-0 mt-sm-4 mt-xs-4">
                        <ChartPanel/>
                    </div>
                </div>
            </div>
        );
    }
}