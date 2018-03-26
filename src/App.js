/* global Raven, process */
import React, { Component } from "react"
import { Provider } from "react-redux"
import { routerReducer } from "react-router-redux"
import { Router, routerMiddleware } from "./components/Router"
import analyticsMiddleware from "./middleware/analytics";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, compose, combineReducers } from "redux"

import "purecss/build/base.css"
import "purecss/build/grids.css"
import "purecss/build/grids-responsive.css"

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://f3942dffb4a14ed0ab23aa38b6ae73f0@sentry.io/284598').install()
}

class App extends Component {
  constructor() {
    super()
    const appliedMiddleware = applyMiddleware(
      routerMiddleware,
      analyticsMiddleware,
    )
    let middlewares
    if (process.env.NODE_ENV === "development") {
      middlewares = composeWithDevTools({})(appliedMiddleware)
    } else {
      middlewares = compose(appliedMiddleware)
    }
    this.store = createStore(
      combineReducers({
        router: routerReducer,
      }),
      {},
      middlewares
    )
    window.store = this.store
  }

  componentDidMount() {
    this.store.dispatch({type: "ANALYTICS/APP_MOUNTED"})
  }

  render() {
    return (
      <Provider store={this.store}>
        <Router />
      </Provider>
    )
  }
}

export default App
