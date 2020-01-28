import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './redux/store';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const initialState = [];

const store = createStore(
   rootReducer,
   initialState,
   compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
   )
);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
