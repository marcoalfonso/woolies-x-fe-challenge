import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Checkout from './pages/Checkout/Checkout'


export const RoutesContainer = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/checkout" exact component={Checkout} />
  </Switch>
)

const Routes = withRouter(RoutesContainer)

export default Routes
