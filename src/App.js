/* global Raven, process */
import React, { Component } from "react"
import { Provider } from "react-redux"
import { routerReducer } from "react-router-redux"
import { Router, routerMiddleware } from "./components/Router"
import * as Navigation from "./services/Navigation"
import { getOrLoadToken } from "./services/TokenStorage"
import * as hedvigRedux from "hedvig-redux"
import moment from "moment"
import { tokenStorageSaga } from "./sagas/TokenStorage"
import { logoutSaga } from "./sagas/logout"
import perilReducer from "./reducers/peril"
import landingReducer from "./reducers/landing"
import waitlistReducer from "./reducers/waitlist"
import analyticsMiddleware from "./middleware/analytics";

import "purecss/build/base.css"
import "purecss/build/grids.css"
import "purecss/build/grids-responsive.css"

window.hedvigRedux = hedvigRedux
window.Navigation = Navigation
window.moment = moment

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://f3942dffb4a14ed0ab23aa38b6ae73f0@sentry.io/284598').install()
}

class App extends Component {
  constructor() {
    super()
    this.store = hedvigRedux.configureStore({
      additionalReducers: {
        router: routerReducer,
        peril: perilReducer,
        landing: landingReducer,
        waitlist: waitlistReducer
      },
      additionalMiddleware: [routerMiddleware, analyticsMiddleware],
      additionalSagas: [tokenStorageSaga, logoutSaga],
      raven: window.Raven,
    })
    window.store = this.store
    getOrLoadToken(this.store.dispatch)
  }

  componentWillMount() {
    this.store.dispatch(hedvigRedux.chatActions.getAvatars())
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
