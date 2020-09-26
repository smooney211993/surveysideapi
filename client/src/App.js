import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Components
import Dashboard from './Components/layout/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';
import Landing from './Components/layout/Landing';
import Navbar from './Components/layout/Navbar';
import SurveyForm from './Components/surveyforms/SurveyForm';
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
        <Navbar />
        <>
          <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-survey' component={SurveyForm} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
