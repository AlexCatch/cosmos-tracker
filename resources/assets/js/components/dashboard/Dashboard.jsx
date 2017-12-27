import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import ChangeQuickLookCard from './ChangeQuickLookCard';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            loading: false
        };
    }
    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/login');
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-4">
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
                </div>
            </div>
        );
    }
}