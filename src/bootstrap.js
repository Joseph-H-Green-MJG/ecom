import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import "./style/main.scss";

import history from './history'

import Layout from "./components/layout.js";
import SignIn from './components/auth/signin';
import Signup from './components/auth/signup';
import Account from './components/account/account';
import Shop from './components/shop/shop';
import Review from './components/order/review';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/signin' exact component={SignIn} />
            <Route path='/signup' exact component={Signup} />
            
            <Route path='/account' exact component={Account} />

            <Route path='/shop' exact component={Shop} />
            <Route path='/order/review' exact component={Review} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
