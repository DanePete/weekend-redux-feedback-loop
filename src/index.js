import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// HOW FEELING REDUCER
// const howFeeling = (state = 0, action) => {
//     if(action.type ==="HOW_FEELING") {
//         return action.payload;
//     }
//     return state;
// }

// // UNDERSTANDING REDUCER
// const understanding = (state = 0, action) => {
//     if(action.type ==="UNDERSTANDING") {
//         return action.payload;
//     }
//     return state;
// }

// // SUPPORTED REDUCER
// const supported = (state = 0, action) => {
//     if(action.type ==="SUPPORTED") {
//         return action.payload;
//     }
//     return state;
// }

// // COMMENTS REDUCER
// const comments = (state = '', action) => {
//     if(action.type ==="COMMENTS") {
//         return action.payload;
//     }
//     return state;
// }

const global = (state = {}, action) => {
    return {...state, feedback: action.payload}
}

const store = createStore(
  combineReducers({
    // howFeeling,
    // understanding,
    // supported,
    // comments,
    global
  })
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
