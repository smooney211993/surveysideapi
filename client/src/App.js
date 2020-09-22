import React from 'react';
import logo from './logo.svg';
import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        Hello
        <a href='http://localhost:5000/api/auth/google' target='_blank'>
          Sign in With Google
        </a>
      </>
    </Provider>
  );
};

export default App;
