import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

/**
 * global Reducer
 * Builds an object in state that holds our multi-page input values
 */
const global = (state = {}, action) => {
    console.log('action',action.payload);
    return {...state, ...action.payload}
}

/**
 * Store
 * 
 */
const store = createStore(
  combineReducers({
    global
  })
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
