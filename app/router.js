import { Route, Switch } from 'react-router-dom';
import React from 'react';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);
