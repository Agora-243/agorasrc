import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import  thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { searchTerms, requestProducts, sessionManager } from './reducer.js';



const logger = createLogger();
const rootReducer = combineReducers({searchTerms, requestProducts, sessionManager});
const store = createStore(rootReducer, applyMiddleware( thunkMiddleware, logger));
ReactDOM.render(
  <Provider store = { store }>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals(App);
