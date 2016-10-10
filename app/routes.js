import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppContainer from './components/app/AppContainer';
import HeroeList from './components/HeroeList';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HeroeList} />
  </Route>
);
