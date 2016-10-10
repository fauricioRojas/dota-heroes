/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import routes from './routes';

import Loading from './components/Loading';
import './assets/main';

const store = configureStore(store);

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>, document.getElementById('app')
);
