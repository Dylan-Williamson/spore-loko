import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import Checkout from './components/Checkout'
import { Switch, Route } from 'react-router-dom';
// import { render } from '@testing-library/react';

class App extends Component {

  render() {
    return (
        <>
          <Header />
            <Switch>
              <Route path="/checkout" component={ Checkout } />
              <Route path="/" component={ Home } />
            </Switch>
        </>
    );
  }
}

export default App;