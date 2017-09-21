import React, { Component } from 'react';
import './App.css';
import Container from './components/Container.js';

import { connect, Provider } from 'react-redux';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import Reducer from './redux/reducers.js';
import * as acts from './redux/actions.js';
import thunkMiddleware from 'redux-thunk';
import 'babel-polyfill'

const store = applyMiddleware(thunkMiddleware)(createStore)(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Comp = connect(
    state => ({state}),
    dispatch => ({
        actions: bindActionCreators(acts, dispatch)
    })
)(Container);


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Comp/>
      </Provider>
    );
  }
}


export default App;
