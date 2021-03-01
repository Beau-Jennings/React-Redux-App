import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";

import App from './App';

import { charReducer } from "./reducers/CharReducer";

const store = createStore(charReducer, applyMiddleware(thunk));

// console.log(store)
ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

