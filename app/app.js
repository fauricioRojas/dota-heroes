/*jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './components/Loading';
import './assets/main';

const app = document.getElementById('app');
ReactDOM.render(
  <div>
    <Loading />
    <span className="container icon icon-zap"></span>
  </div>, app
);
