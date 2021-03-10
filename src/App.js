import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header';
import Payment from './components/Payment';
import Home from './containers/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { setUser } from './redux/actionCreators';
import { connect } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51ITXeLEUG2WFNVacjKfBIJlEZJNc3q2TxfIHAVJh1ChshsUqxTMib8bfmgcULisjDNfBEY8xfNQguQMZDhnd4c3j008AvwPCd8"
)

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
              <Route exact path="/payment">
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
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