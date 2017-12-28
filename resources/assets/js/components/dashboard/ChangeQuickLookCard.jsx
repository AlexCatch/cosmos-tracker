import React, { Component } from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, FormText, Alert} from 'reactstrap';
import LoadingIndicator from '../LoadingIndicator';


export default class ChangeQuickLookCard extends Component {
    constructor() {
        super();
        this.state = {
            loading: false
        };
    }
    render() {
        return (
            <div className="change-card-container">
                <div className={"card change-card " + this.props.gradientClassName}>
                    {this.renderContent(this.props.type)}
                </div>
            </div>
        );
    }

    renderContent(type) {
        switch (type) {
            case "btc":
                return (
                    <div className="change-card-inner d-flex flex-column justify-content-between">
                        <h5 className="text-faded">BTC</h5>
                        {this.state.loading && <LoadingIndicator/>}
                        {!this.state.loading && <div className="change-card-text-center mb-1">
                            <h1 className="m-0">+12.56%</h1>
                            <h6 className="m-0">$152,456</h6>
                        </div>}
                        {!this.state.loading && <h5 className="text-faded">$17,456 / BTC</h5>}
                    </div>
                );
                break;
            case "bch":
                return (
                    <div className="change-card-inner d-flex flex-column justify-content-between">
                        <h5 className="text-faded">BCH</h5>
                        {this.state.loading && <LoadingIndicator/>}
                        {!this.state.loading && <div className="change-card-text-center mb-1">
                            <h1 className="m-0">+12.56%</h1>
                            <h6 className="m-0">$152,456</h6>
                        </div>}
                        {!this.state.loading && <h5 className="text-faded">$17,456 / BCH</h5>}
                    </div>
                );
                break;
            case "eth":
                return (
                    <div className="change-card-inner d-flex flex-column justify-content-between">
                        <h5 className="text-faded">ETH</h5>
                        {this.state.loading && <LoadingIndicator/>}
                        {!this.state.loading && <div className="change-card-text-center mb-1">
                            <h1 className="m-0">+12.56%</h1>
                            <h6 className="m-0">$152,456</h6>
                        </div>}
                        {!this.state.loading && <h5 className="text-faded">$17,456 / ETH</h5>}
                    </div>
                );
                break;
            case "ltc":
                return (
                    <div className="change-card-inner d-flex flex-column justify-content-between">
                        <h5 className="text-faded">LTC</h5>
                        {this.state.loading && <LoadingIndicator/>}
                        {!this.state.loading && <div className="change-card-text-center mb-1">
                            <h1 className="m-0">+12.56%</h1>
                            <h6 className="m-0">$152,456</h6>
                        </div>}
                        {!this.state.loading && <h5 className="text-faded">$17,456 / LTC</h5>}
                    </div>
                );
                break;
            default:
                return <div/>;
        }
    }
}