import React, { Component } from 'react';

const LoadingIndicator = () => {
    return <div className="loading-indicator-container"> <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"/>
        <div className="sk-cube2 sk-cube"/>
        <div className="sk-cube4 sk-cube"/>
        <div className="sk-cube3 sk-cube"/>
    </div>
    </div>
};

export default LoadingIndicator;