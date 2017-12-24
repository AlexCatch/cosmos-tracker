import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootContainer from './containers/RootContainer';
import configureStore from './store/store';

ReactDOM.render( <Provider store={configureStore()}>
    <RootContainer />
</Provider>, document.getElementById('root'));