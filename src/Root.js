import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/store"
import App from "./App"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function Root() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/:filter?">
            <App></App>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
