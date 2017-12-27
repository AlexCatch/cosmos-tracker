import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootContainer from './containers/RootContainer';
import configureStore from './store/store';

window.axios = require('axios');
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';

ReactDOM.render( <Provider store={configureStore()}>
    <RootContainer />
</Provider>, document.getElementById('root'));