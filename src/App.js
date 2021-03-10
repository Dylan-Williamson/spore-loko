import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { setUser } from './redux/actionCreators';
import { connect } from 'react-redux';
// import { render } from '@testing-library/react';

const App = (props) => {

    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          props.setUser(authUser);
        } else {
          props.setUser(null);
        }
      })
    }, [])

    return (
        <>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
        </>
    );
}

export default connect(null, { setUser })(App)