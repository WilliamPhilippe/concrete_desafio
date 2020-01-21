import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SearchPage from './pages/Search';
import ProfilePage from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/profile/:user" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}
