import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
// import registerServiceWorker from "./registerServiceWorker"
require("normalize.css")
require("./index.css")

ReactDOM.render(<App />, document.getElementById("root"))
// registerServiceWorker()

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default
        ReactDOM.render(<NextApp />, document.getElementById("root"))
    })
}
