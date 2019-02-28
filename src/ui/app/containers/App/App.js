/**
 * App.js
 *
 * This component is the framework around the actual pages.
 * It renders the routes that determine what container to display.
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';

import Welcome from '../Welcome/Welcome';
import LuckyNumber from '../LuckyNumber/LuckyNumber';
import NotFound from '../NotFound/NotFound';
import WelcomeForm from '../../components/WelcomeForm/WelcomeForm';
import saga from '../saga';
import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import { connect, compose } from 'react-redux';
import { CONTAINER_KEY } from '../constants';
import reducer from '../../../app/reducer';

const App = () => (

  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - React Code Challenge"
      defaultTitle="React Code Challenge"
    >
      <meta name="description" content="Step 1: Complete code challenge, Step 2: Interview, Step 3: ???, Step 4: Profit!" />
    </Helmet>

    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/welcome" component={Welcome} />
      <Route path="/lucky" component={LuckyNumber} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

import { reduxForm } from 'redux-form/immutable';

// const withConnect = connect();
// const withSaga = injectSaga({ key: CONTAINER_KEY, saga });
// const withReducer = injectReducer({ key: CONTAINER_KEY, reducer });

// compose(withReducer, withSaga, withConnect)(App);

export default withRouter(App);
