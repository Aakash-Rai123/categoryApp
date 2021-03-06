import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';


import App from './components/App';
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk';


ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>,document.getElementById('root'));