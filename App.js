import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
import Root from './components';

const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    {},
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Root} />
      </Router>
    </Provider>
  );
}

export default App;
