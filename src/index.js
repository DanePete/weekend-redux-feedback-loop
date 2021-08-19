import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

// HOW FEELING REDUCER
const feedBack = (state = [], action) => {
  switch(action.type) {
      case ('ADD_FEEDBACK'):
          console.log('Add Pizza', action.payload.feeling)
          return [...state, action.payload];
      case ('REMOVE_PIZZA'):
          console.log('Removed Pizza')
          // need specific info about which pizza to delete
          // this will only work for the basic project
          let newState = [];
          for (let pizza of state) {
              if (pizza.name != action.payload.name) {
                  newState.push(pizza);
              }
          }
          return newState;

  }
  return state;
};

const store = createStore(
  combineReducers({
      feedBack
  })
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
