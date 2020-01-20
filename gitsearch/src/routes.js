import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import SearchPage from './pages/Search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
}
