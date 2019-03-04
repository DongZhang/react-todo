import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import TodoSection from './scenes/todo/TodoSection';
import TodoDetail from './scenes/todo/TodoDetail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/todos' component={TodoSection} />
            <Route path='/todo/:id' component={TodoDetail} />
            <Redirect to="/todos" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
