import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-blue font-bold underline">
        Hello world!
      </h1>
    </Provider>
  );
}

export default App;
