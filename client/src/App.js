import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// Components
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
      <>
        Hello
        <a href='http://localhost:5000/api/auth/google'>Sign in With Google</a>
      </>
      <Router>
        <Switch>
          <Route exact path='/survey' component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
