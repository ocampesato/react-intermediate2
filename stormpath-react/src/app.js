import ReactStormpath, { Router, LoginRoute, LogoutRoute, AuthenticatedRoute } from 'react-stormpath';

import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

ReactStormpath.init();

ReactDOM.render(
<Router>
  <Route path='/' component={MasterPage}>
    <AuthenticatedRoute path='/profile'  component={ProfilePage} />
    <Route              path='/register' component={RegistrationPage} />
    <LoginRoute         path='/login'    component={LoginPage} />
    <IndexRoute                          component={IndexPage} />
    <LogoutRoute        path='/logout' />
  </Route>
</Router>, 
  document.getElementById('app-container')
);
