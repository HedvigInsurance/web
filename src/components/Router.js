import React from "react"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter, routerMiddleware } from "react-router-redux"
import createHistory from "history/createBrowserHistory"

import { Landing, AboutUs, FAQ, Legal, Contact, Terms, Download, NotFound } from "../features/loadables"

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
history.listen((location, action) => {
  window.scrollTo(0, 0)
})

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const Router = () => (
  <ConnectedRouter history={history}>
    <div
      style={{
        height: "100%"
      }}
    >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/faq" component={FAQ} />
        <Route path="/legal" component={Legal} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms" component={Terms} />
        <Route path="/download" component={Download} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </ConnectedRouter>
)

export { Router, middleware as routerMiddleware }
