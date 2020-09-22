import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Components
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';
import Landing from './Components/Landing';
// redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
