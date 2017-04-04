import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import RepoPage from './pages/RepoPage';
import reducers from './reducers';
import loggerMiddleware from './middlewares/loggerMiddleware'
import asyncMiddleware from './middlewares/asyncMiddleware'

const store = createStore(reducers, {}, applyMiddleware(thunk, loggerMiddleware, asyncMiddleware));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RepoPage />
      </Provider>
    );
  }
}

export default App
