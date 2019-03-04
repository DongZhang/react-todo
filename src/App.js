import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
// import Router from ''
import logo from './logo.svg';
import './App.css';

import TodoSection from './scenes/todo/TodoSection';
import TodoDetail from './scenes/todo/TodoDetail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
          <Route path="/todos" component={TodoSection} />
          <Route path="/todo/:id" component={TodoDetail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
